import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrevScansPage } from './prev-scans.page';

describe('PrevScansPage', () => {
  let component: PrevScansPage;
  let fixture: ComponentFixture<PrevScansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevScansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
