import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTriagemComponent } from './app-triagem.component';

describe('AppTriagemComponent', () => {
  let component: AppTriagemComponent;
  let fixture: ComponentFixture<AppTriagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTriagemComponent]
    });
    fixture = TestBed.createComponent(AppTriagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
