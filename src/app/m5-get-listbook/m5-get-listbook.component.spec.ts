import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M5GETListbookComponent } from './m5-get-listbook.component';

describe('M5GETListbookComponent', () => {
  let component: M5GETListbookComponent;
  let fixture: ComponentFixture<M5GETListbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M5GETListbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M5GETListbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
