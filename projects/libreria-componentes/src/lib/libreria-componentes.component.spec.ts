import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibreriaComponentesComponent } from './libreria-componentes.component';

describe('LibreriaComponentesComponent', () => {
  let component: LibreriaComponentesComponent;
  let fixture: ComponentFixture<LibreriaComponentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibreriaComponentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibreriaComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
