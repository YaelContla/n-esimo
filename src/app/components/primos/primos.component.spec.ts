import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimosComponent } from './primos.component';

describe('PrimosComponent', () => {
  let component: PrimosComponent;
  let fixture: ComponentFixture<PrimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
