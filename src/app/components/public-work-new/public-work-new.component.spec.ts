import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicWorkNewComponent } from './public-work-new.component';

describe('NewPublicWorkComponent', () => {
  let component: PublicWorkNewComponent;
  let fixture: ComponentFixture<PublicWorkNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicWorkNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicWorkNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
