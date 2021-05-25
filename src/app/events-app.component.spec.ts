import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EventsAppComponent } from "./events-app.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";



describe("ChatListComponent", () => {
  let component: EventsAppComponent;
  let fixture: ComponentFixture<EventsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
