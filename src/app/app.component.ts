import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  showDetails: boolean = false;
  dates: Array<String> = [];

  onClick(): void {
    this.showDetails = !this.showDetails;

    let d = new Date();
    this.dates.push(
      d.getDay() +
        "/" +
        d.getMonth() +
        "/" +
        d.getFullYear() +
        " - " +
        d.getHours() +
        ":" +
        d.getMinutes() +
        ":" +
        d.getSeconds()
    );
  }
}
