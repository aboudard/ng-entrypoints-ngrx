import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOtherComponent } from './ng-other.component';

describe('NgOtherComponent', () => {
  let component: NgOtherComponent;
  let fixture: ComponentFixture<NgOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NgOtherComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
