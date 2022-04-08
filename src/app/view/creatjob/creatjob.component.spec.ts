import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatjobComponent } from './creatjob.component';

describe('CreatjobComponent', () => {
  let component: CreatjobComponent;
  let fixture: ComponentFixture<CreatjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
