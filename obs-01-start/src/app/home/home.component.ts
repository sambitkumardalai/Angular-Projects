import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";

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

        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          // through error
          observer.error(new Error("Count is greater 3!"));
        }
      }, 1000);
    });

    this.customInternalObservableSubscription = customIntervalObservable
      .pipe(map((data) => `Rounded value ${data + 1}`))
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("Completed");
        }
      );
  }

  ngOnDestroy() {
    this.customInternalObservableSubscription.unsubscribe();
  }
}
