import { Component, OnDestroy, OnInit, Optional } from '@angular/core';
import { Subscription } from 'rxjs';
import { DependencyService } from 'src/app/services/dependency.service';
import { Example1Service } from 'src/app/services/example-1.service';
import { Example2Service } from 'src/app/services/example-2.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  providers: [Example1Service],
})
export class Page2Component implements OnInit, OnDestroy {
  service1Message: string = '';
  service2Message: string = '';
  service1DependencyMessage: string = '';
  subscriptionService1!: Subscription;
  subscriptionService2!: Subscription;
  subscriptionService1Dependency!: Subscription;

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

    this.subscriptionService1Dependency =
      this.example1Service.dependencyCounter$.subscribe(() => {
        this.service1DependencyMessage =
          this.example1Service.getMessageFromDependency();
      });

    this.service1Message = this.example1Service.getMessage();
    this.service2Message = this.example2Service.getMessage();
    this.service1DependencyMessage =
      this.example1Service.getMessageFromDependency();
  }

  ngOnDestroy(): void {
    this.subscriptionService1.unsubscribe();
    this.subscriptionService2.unsubscribe();
    this.subscriptionService1Dependency.unsubscribe();
  }

  incrementCounterOnService1(): void {
    this.example1Service.incrementCounter();
  }

  incrementCounterOnService2(): void {
    this.example2Service.incrementCounter();
  }

  incrementCounterOnService1Dependency(): void {
    this.example1Service.incrementDependencyCounter();
  }
}
