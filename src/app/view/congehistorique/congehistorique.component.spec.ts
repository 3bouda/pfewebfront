import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongehistoriqueComponent } from './congehistorique.component';

describe('CongehistoriqueComponent', () => {
  let component: CongehistoriqueComponent;
  let fixture: ComponentFixture<CongehistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongehistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongehistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
