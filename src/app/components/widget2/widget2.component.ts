import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Example1Service } from 'src/app/services/example-1.service';
import { Example2Service } from 'src/app/services/example-2.service';

@Component({
  selector: 'app-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss'],
})
export class Widget2Component implements OnInit {
  service1Message: string = '';
  service2Message: string = '';
  subscriptionService1!: Subscription;
  subscriptionService2!: Subscription;

  constructor(
    private example1Service: Example1Service,
    private example2Service: Example2Service,
  ) {}

  ngOnInit(): void {
    this.subscriptionService1 = this.example1Service.counter$.subscribe(
      (counter) => {
        this.service1Message = this.example1Service.getMessage();
      },
    );

    this.subscriptionService2 = this.example2Service.counter$.subscribe(
      (counter) => {
        this.service2Message = this.example2Service.getMessage();
      },
    );

    this.service1Message = this.example1Service.getMessage();
    this.service2Message = this.example2Service.getMessage();
  }

  ngOnDestroy(): void {
    this.subscriptionService1.unsubscribe();
    this.subscriptionService2.unsubscribe();
  }

  incrementCounterOnService1(): void {
    this.example1Service.incrementCounter();
  }

  incrementCounterOnService2(): void {
    this.example2Service.incrementCounter();
  }
}
