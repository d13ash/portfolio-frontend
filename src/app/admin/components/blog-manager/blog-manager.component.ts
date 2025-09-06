import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Blog } from '../../../models/blog.model';

@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.scss']
})
export class BlogManagerComponent implements OnInit {
  blogs: Blog[] = [];
  isLoading = true;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.isLoading = true;
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
      this.isLoading = false;
    });
  }

  deleteBlog(id: string): void {
    this.blogService.deleteBlog(id).subscribe(() => {
      this.blogs = this.blogs.filter(b => b._id !== id);
    });
  }
}
