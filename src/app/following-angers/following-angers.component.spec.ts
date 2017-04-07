import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingAngersComponent } from './following-angers.component';

describe('FollowingAngersComponent', () => {
  let component: FollowingAngersComponent;
  let fixture: ComponentFixture<FollowingAngersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingAngersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingAngersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
