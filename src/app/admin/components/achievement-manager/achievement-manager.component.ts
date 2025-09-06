import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AchievementService } from '../../../services/achievement.service';
import { Achievement } from '../../../models/achievement.model';

@Component({
  selector: 'app-achievement-manager',
  templateUrl: './achievement-manager.component.html',
  styleUrls: ['./achievement-manager.component.scss']
})
export class AchievementManagerComponent implements OnInit {
  achievementForm: FormGroup;
  certifications: Achievement[] = [];
  otherAchievements: Achievement[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private fb: FormBuilder, private achievementService: AchievementService) {
    this.achievementForm = this.fb.group({
      title: ['', Validators.required],
      issuer: [''],
      url: [''],
      date: [''],
      isCertification: [false]
    });
  }

  ngOnInit(): void {
    this.loadAchievements();
  }

  loadAchievements(): void {
    this.isLoading = true;
    this.achievementService.getAchievements().subscribe({
      next: (data) => {
        this.certifications = data.filter(a => a.isCertification);
        this.otherAchievements = data.filter(a => !a.isCertification);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load achievements.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.achievementForm.invalid) {
      return;
    }
    this.achievementService.addAchievement(this.achievementForm.value).subscribe({
      next: () => {
        this.loadAchievements();
        this.achievementForm.reset({ isCertification: false });
      },
      error: (err) => {
        this.error = 'Failed to add achievement.';
        console.error(err);
      }
    });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.achievementService.deleteAchievement(id).subscribe({
        next: () => this.loadAchievements(),
        error: (err) => {
          this.error = 'Failed to delete achievement.';
          console.error(err);
        }
      });
    }
  }
}
