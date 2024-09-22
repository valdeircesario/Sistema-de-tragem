import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAgendaconsultaComponent } from './app-agendaconsulta.component';

describe('AppAgendaconsultaComponent', () => {
  let component: AppAgendaconsultaComponent;
  let fixture: ComponentFixture<AppAgendaconsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppAgendaconsultaComponent]
    });
    fixture = TestBed.createComponent(AppAgendaconsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
