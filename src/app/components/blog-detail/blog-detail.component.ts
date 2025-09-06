import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blog$: Observable<Blog | null> | undefined;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blog$ = this.blogService.getBlogById(blogId).pipe(
        catchError(err => {
          console.error('Failed to load blog post', err);
          this.error = 'Could not load the blog post.';
          return of(null);
        })
      );
    } else {
      this.router.navigate(['/blog']);
    }
  }
}
