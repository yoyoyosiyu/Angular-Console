import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCenterHomeComponent } from './security-center-home.component';

describe('SecurityCenterHomeComponent', () => {
  let component: SecurityCenterHomeComponent;
  let fixture: ComponentFixture<SecurityCenterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCenterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
