import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../models/skill.model';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(skills: Skill[], category: string): Skill[] {
    if (!skills || !category) {
      return [];
    }
    return skills.filter(skill => skill.category === category);
  }
}
