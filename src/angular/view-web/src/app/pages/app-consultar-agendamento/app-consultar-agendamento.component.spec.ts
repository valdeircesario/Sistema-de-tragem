import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConsultarAgendamentoComponent } from './app-consultar-agendamento.component';

describe('AppConsultarAgendamentoComponent', () => {
  let component: AppConsultarAgendamentoComponent;
  let fixture: ComponentFixture<AppConsultarAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppConsultarAgendamentoComponent]
    });
    fixture = TestBed.createComponent(AppConsultarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
