import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCadastrarComponent } from './app-cadastrar.component';

describe('AppCadastrarComponent', () => {
  let component: AppCadastrarComponent;
  let fixture: ComponentFixture<AppCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppCadastrarComponent]
    });
    fixture = TestBed.createComponent(AppCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
