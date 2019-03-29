import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityCenterComponent } from './security-center.component';

describe('SecurityCenterComponent', () => {
  let component: SecurityCenterComponent;
  let fixture: ComponentFixture<SecurityCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
