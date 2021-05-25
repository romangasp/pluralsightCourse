import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { EventService } from "../shared/events.service";
import { IEvent } from "../shared";

@Component({
  templateUrl: "./events-details.component.html",
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EventDetailsComponent {
  event: IEvent;
  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
