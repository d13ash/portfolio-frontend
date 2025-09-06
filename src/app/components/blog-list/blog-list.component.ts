import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = [];
  isLoading = true;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load blogs', err);
        this.isLoading = false;
      }
    });
  }
}
