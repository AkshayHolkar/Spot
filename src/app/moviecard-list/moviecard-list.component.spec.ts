import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecardListComponent } from './moviecard-list.component';

describe('MoviecardListComponent', () => {
  let component: MoviecardListComponent;
  let fixture: ComponentFixture<MoviecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviecardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
