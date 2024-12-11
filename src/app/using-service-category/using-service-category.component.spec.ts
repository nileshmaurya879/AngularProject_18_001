import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingServiceCategoryComponent } from './using-service-category.component';

describe('UsingServiceCategoryComponent', () => {
  let component: UsingServiceCategoryComponent;
  let fixture: ComponentFixture<UsingServiceCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingServiceCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingServiceCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
