import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillManagerComponent } from './skill-manager.component';

describe('SkillManagerComponent', () => {
  let component: SkillManagerComponent;
  let fixture: ComponentFixture<SkillManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
