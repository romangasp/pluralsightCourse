import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from "./events/index";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { EventsAppComponent } from "./events-app.component";


import { NavBarComponent } from "./nav/navbar.component";
import { RouterModule } from "@angular/router";
import { ToastrService } from "./common/toastr.service";
import { ToastrModule } from "ngx-toastr";

import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  declarations: [
    CreateEventComponent,
    Error404Component,
    EventsAppComponent,
    EventDetailsComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  providers: [EventService, ToastrService, EventRouteActivator, EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }],
  bootstrap: [EventsAppComponent],
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');

  }
  return true;
}