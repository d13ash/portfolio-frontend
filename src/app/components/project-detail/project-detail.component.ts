import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project | null> | undefined;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');

    if (projectId) {
      this.project$ = this.projectService.getProjectById(projectId).pipe(
        catchError(err => {
          console.error('Failed to load project details', err);
          this.error = 'Could not load project details. It may have been removed or the link is incorrect.';
          return of(null); // Return a null project on error
        })
      );
    } else {
      // If no ID is found in the URL, redirect to the projects list
      this.router.navigate(['/projects']);
    }
  }
}
