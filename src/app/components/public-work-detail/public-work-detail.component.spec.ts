import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicWorkDetailComponent } from './public-work-detail.component';

describe('PublicWorkDetailComponent', () => {
  let component: PublicWorkDetailComponent;
  let fixture: ComponentFixture<PublicWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
