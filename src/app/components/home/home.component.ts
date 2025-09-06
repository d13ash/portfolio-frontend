import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Import all necessary services and models
import { ProjectService } from '../../services/project.service';
import { BlogService } from '../../services/blog.service';
import { SkillService } from '../../services/skill.service';
import { AchievementService } from '../../services/achievement.service';
import { ContactService } from '../../services/contact.service';
import { Project } from '../../models/project.model';
import { Blog } from '../../models/blog.model';
import { Skill } from '../../models/skill.model';
import { Achievement } from '../../models/achievement.model';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = true;
  error: string | null = null;

  featuredProjects$: Observable<Project[]>;
  latestPosts$: Observable<Blog[]>;

  // Properties for categorized skills
  skillCategories = ['Programming', 'Web Development', 'Databases', 'Tools & Platforms'];
  skillsByCategory: { [key: string]: Skill[] } = {};

  // Properties for achievements
  certifications: Achievement[] = [];
  otherAchievements: Achievement[] = [];

  // Properties for contacts
  contacts: Contact[] = [];

  constructor(
    private projectService: ProjectService,
    private blogService: BlogService,
    private skillService: SkillService,
    private achievementService: AchievementService,
    private contactService: ContactService
  ) {
    // Initialize observables for featured content
    this.featuredProjects$ = this.projectService.getProjects().pipe(map(projects => projects.slice(0, 3)));
    this.latestPosts$ = this.blogService.getBlogs().pipe(map(posts => posts.slice(0, 2)));
  }

  ngOnInit(): void {
    this.loadPageData();
  }

  loadPageData(): void {
    this.isLoading = true;
    forkJoin({
      skills: this.skillService.getSkills(),
      achievements: this.achievementService.getAchievements(),
      contacts: this.contactService.getContact()
    }).subscribe({
      next: (data) => {
        // Process skills into categories
        this.skillCategories.forEach(cat => {
          this.skillsByCategory[cat] = data.skills.filter(s => s.category === cat);
        });

        // Process achievements
        this.certifications = data.achievements.filter(a => a.isCertification);
        this.otherAchievements = data.achievements.filter(a => !a.isCertification);

        // Load contacts
        this.contacts = data.contacts;

        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load page data.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}

