import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallApiDetailComponent } from './call-api-detail.component';

describe('CallApiDetailComponent', () => {
  let component: CallApiDetailComponent;
  let fixture: ComponentFixture<CallApiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallApiDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
