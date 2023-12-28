import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDashboardComponent } from './person-dashboard.component';

describe('PersonDashboardComponent', () => {
  let component: PersonDashboardComponent;
  let fixture: ComponentFixture<PersonDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
