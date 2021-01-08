import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarMoviecardComponent } from './similar-moviecard.component';

describe('SimilarMoviecardComponent', () => {
  let component: SimilarMoviecardComponent;
  let fixture: ComponentFixture<SimilarMoviecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarMoviecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarMoviecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
