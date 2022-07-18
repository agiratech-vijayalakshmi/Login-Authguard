import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstBookComponent } from './first-book.component';

describe('FirstBookComponent', () => {
  let component: FirstBookComponent;
  let fixture: ComponentFixture<FirstBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
