import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiploTresComponent } from './multiplo-tres.component';

describe('MultiploTresComponent', () => {
  let component: MultiploTresComponent;
  let fixture: ComponentFixture<MultiploTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiploTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiploTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
