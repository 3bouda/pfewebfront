import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAdministratifComponent } from './demande-administratif.component';

describe('DemandeAdministratifComponent', () => {
  let component: DemandeAdministratifComponent;
  let fixture: ComponentFixture<DemandeAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAdministratifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
