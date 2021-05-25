import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [`.nav.navbar-nav {font-size:15px; display: flex; justify-content: space-between;}
  #searchForm { margin-right: 100px; }
  @media (max-width: 1200px) { #searchForm {display:flex}}
  li > a.active { color: #F97924 }`]
})
export class NavBarComponent { }
