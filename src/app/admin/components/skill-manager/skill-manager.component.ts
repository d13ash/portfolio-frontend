import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from '../../../services/skill.service';
import { Skill } from '../../../models/skill.model';

@Component({
  selector: 'app-skill-manager',
  templateUrl: './skill-manager.component.html',
  styleUrls: ['./skill-manager.component.scss']
})
export class SkillManagerComponent implements OnInit {
  skillForm: FormGroup;
  skills: Skill[] = [];
  categories = ['Programming', 'Web Development', 'Databases', 'Tools & Platforms'];
  isLoading = true;
  error: string | null = null;

  constructor(private fb: FormBuilder, private skillService: SkillService) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      category: [this.categories[0], Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.isLoading = true;
    this.skillService.getSkills().subscribe({
      next: (data) => {
        this.skills = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load skills.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.skillForm.invalid) {
      return;
    }
    this.skillService.addSkill(this.skillForm.value).subscribe({
      next: () => {
        this.loadSkills(); // Refresh the list
        this.skillForm.reset({ category: this.categories[0] });
      },
      error: (err) => {
        this.error = 'Failed to add skill.';
        console.error(err);
      }
    });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this skill?')) {
      this.skillService.deleteSkill(id).subscribe({
        next: () => this.loadSkills(), // Refresh the list
        error: (err) => {
          this.error = 'Failed to delete skill.';
          console.error(err);
        }
      });
    }
  }
}
