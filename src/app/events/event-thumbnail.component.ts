import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared/index";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styles: [
    `
      .green {
        color: #003300 !important;
      }
      .pad-left {
        margin-left: 10px;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
  someProperty: any = "some value";

  // @Output() eventClick = new EventEmitter();

  /*handleClickMe() {
    this.eventClick.emit(this.event.name);
  }*/

  logFoo() {
    console.log("foo");
  }

  getStartTimeClass() {
    if (this.event && this.event.time === "8:00 am") return ["green", "bold"];
    return [];
  }
}
