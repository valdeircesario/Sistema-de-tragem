import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTriagemComponent } from './listar-triagem.component';

describe('ListarTriagemComponent', () => {
  let component: ListarTriagemComponent;
  let fixture: ComponentFixture<ListarTriagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarTriagemComponent]
    });
    fixture = TestBed.createComponent(ListarTriagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
