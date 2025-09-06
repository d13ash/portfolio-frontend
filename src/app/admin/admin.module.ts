import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectManagerComponent } from './components/project-manager/project-manager.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { RouterModule } from '@angular/router';
import { BlogManagerComponent } from './components/blog-manager/blog-manager.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { SkillManagerComponent } from './components/skill-manager/skill-manager.component';
import { FilterByCategoryPipe } from '../pipes/filter-by-category.pipe';
import { AchievementManagerComponent } from './components/achievement-manager/achievement-manager.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    ProjectManagerComponent,
    ProjectFormComponent,
    BlogManagerComponent,
    BlogFormComponent,
    SkillManagerComponent,
    FilterByCategoryPipe,
    AchievementManagerComponent,
    ContactManagerComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    
  ]
})
export class AdminModule { }
