import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementManagerComponent } from './achievement-manager.component';

describe('AchievementManagerComponent', () => {
  let component: AchievementManagerComponent;
  let fixture: ComponentFixture<AchievementManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
