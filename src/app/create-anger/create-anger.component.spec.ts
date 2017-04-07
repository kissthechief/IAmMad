import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAngerComponent } from './create-anger.component';

describe('CreateAngerComponent', () => {
  let component: CreateAngerComponent;
  let fixture: ComponentFixture<CreateAngerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAngerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAngerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
