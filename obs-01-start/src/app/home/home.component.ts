import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  customInternalObservableSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    let count = 0;
    const customIntervalObservable = new Observable<number>((observer) => {
      setInterval(() => {
        observer.next(count++);
      }, 1000);
    });
    this.customInternalObservableSubscription =
      customIntervalObservable.subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.customInternalObservableSubscription.unsubscribe();
  }
}
