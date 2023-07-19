import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaTiComponent } from './para-ti.component';

describe('ParaTiComponent', () => {
  let component: ParaTiComponent;
  let fixture: ComponentFixture<ParaTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParaTiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
