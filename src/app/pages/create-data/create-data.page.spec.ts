import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDataPage } from './create-data.page';

describe('CreateDataPage', () => {
  let component: CreateDataPage;
  let fixture: ComponentFixture<CreateDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
