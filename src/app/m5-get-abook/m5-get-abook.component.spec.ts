import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5GetAbookComponent } from './m5-get-abook.component';

describe('M5GetAbookComponent', () => {
  let component: M5GetAbookComponent;
  let fixture: ComponentFixture<M5GetAbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5GetAbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M5GetAbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
