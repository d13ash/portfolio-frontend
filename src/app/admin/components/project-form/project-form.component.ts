import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { UploadService } from '../../../services/upload.service';
import { Project } from '../../../models/project.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  isEditMode = false;
  private projectId: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isUploading = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      summary: ['', Validators.required],
      description: ['', Validators.required],
      coverImage: ['', Validators.required],
      technologies: ['', Validators.required],
      githubUrl: [''],
      liveUrl: ['']
    });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    if (this.projectId) {
      this.isEditMode = true;
      this.projectService.getProjectById(this.projectId).subscribe(project => {
        this.projectForm.patchValue({
          ...project,
          technologies: project.technologies.join(', ') // Convert array to comma-separated string for form input
        });
        this.imagePreview = project.coverImage;
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Show image preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);

      // Upload image
      this.isUploading = true;
      this.uploadService.uploadImage(file).pipe(
        finalize(() => this.isUploading = false)
      ).subscribe(imageUrl => {
        this.projectForm.patchValue({ coverImage: imageUrl });
      });
    }
  }

  onSubmit(): void {
    if (this.projectForm.invalid) {
      return;
    }

    const formValue = {
      ...this.projectForm.value,
      // Convert comma-separated string back to an array of strings
      technologies: this.projectForm.value.technologies.split(',').map((tech: string) => tech.trim())
    };

    if (this.isEditMode && this.projectId) {
      this.projectService.updateProject(this.projectId, formValue).subscribe(() => {
        this.router.navigate(['/admin/projects']);
      });
    } else {
      this.projectService.createProject(formValue).subscribe(() => {
        this.router.navigate(['/admin/projects']);
      });
    }
  }
}
