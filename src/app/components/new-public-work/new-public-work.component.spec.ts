import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPublicWorkComponent } from './new-public-work.component';

describe('NewPublicWorkComponent', () => {
  let component: NewPublicWorkComponent;
  let fixture: ComponentFixture<NewPublicWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPublicWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPublicWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
