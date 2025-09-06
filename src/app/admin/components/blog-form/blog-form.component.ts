import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../../services/blog.service';
import { UploadService } from '../../../services/upload.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  isEditMode = false;
  private blogId: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  isUploading = false;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private uploadService: UploadService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      summary: ['', Validators.required],
      content: ['', Validators.required],
      coverImage: ['', Validators.required],
      tags: ['']
    });
  }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('id');
    if (this.blogId) {
      this.isEditMode = true;
      this.blogService.getBlogById(this.blogId).subscribe(blog => {
        this.blogForm.patchValue({
          ...blog,
          tags: blog.tags.join(', ')
        });
        this.imagePreview = blog.coverImage;
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      reader.readAsDataURL(file);

      this.isUploading = true;
      this.uploadService.uploadImage(file).pipe(
        finalize(() => this.isUploading = false)
      ).subscribe(imageUrl => {
        this.blogForm.patchValue({ coverImage: imageUrl });
      });
    }
  }

  onSubmit(): void {
    if (this.blogForm.invalid) return;

    const formValue = {
      ...this.blogForm.value,
      tags: this.blogForm.value.tags.split(',').map((tag: string) => tag.trim())
    };

    if (this.isEditMode && this.blogId) {
      this.blogService.updateBlog(this.blogId, formValue).subscribe(() => {
        this.router.navigate(['/admin/blogs']);
      });
    } else {
      this.blogService.createBlog(formValue).subscribe(() => {
        this.router.navigate(['/admin/blogs']);
      });
    }
  }
}
