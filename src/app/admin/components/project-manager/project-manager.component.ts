import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      this.isLoading = false;
    });
  }

  deleteProject(id: string): void {
    // In a real app, you'd use a confirmation modal here.
    this.projectService.deleteProject(id).subscribe(() => {
      // On success, filter out the deleted project from the local array
      // for an instant UI update.
      this.projects = this.projects.filter(p => p._id !== id);
    });
  }
}
