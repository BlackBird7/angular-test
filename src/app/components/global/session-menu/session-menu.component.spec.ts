import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionMenuComponent } from './session-menu.component';

describe('SessionMenuComponent', () => {
  let component: SessionMenuComponent;
  let fixture: ComponentFixture<SessionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionMenuComponent]
    });
    fixture = TestBed.createComponent(SessionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
