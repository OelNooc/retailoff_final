import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastOnesPage } from './last-ones.page';

describe('LastOnesPage', () => {
  let component: LastOnesPage;
  let fixture: ComponentFixture<LastOnesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LastOnesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
