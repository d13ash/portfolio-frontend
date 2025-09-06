import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AuthGuard } from '../services/auth.guard';

import { ProjectManagerComponent } from './components/project-manager/project-manager.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { BlogManagerComponent } from './components/blog-manager/blog-manager.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SkillManagerComponent } from './components/skill-manager/skill-manager.component';
import { AchievementManagerComponent } from './components/achievement-manager/achievement-manager.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [ // <-- Add child routes
      { path: '', redirectTo: 'projects', pathMatch: 'full' },
      { path: 'projects', component: ProjectManagerComponent },
      { path: 'projects/new', component: ProjectFormComponent },
      { path: 'projects/edit/:id', component: ProjectFormComponent },
      // Blog Routes
      { path: 'blogs', component: BlogManagerComponent }, // <-- Add
      { path: 'blogs/new', component: BlogFormComponent },   // <-- Add
      { path: 'blogs/edit/:id', component: BlogFormComponent }, // <-- Add
      // Contact Routes
      { path: 'contacts', component: ContactManagerComponent },
      { path: 'contacts/new', component: ContactFormComponent },
      { path: 'contacts/edit/:id', component: ContactFormComponent },
      { path: 'skills', component: SkillManagerComponent },
      { path: 'achievements', component: AchievementManagerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
