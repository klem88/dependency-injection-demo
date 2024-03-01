import { Injectable, Optional, Self } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { DependencyService } from './dependency.service';

@Injectable()
export class Example1Service {
  private counter = 0;
  private counterSubject = new Subject<void>();
  counter$ = this.counterSubject.asObservable();
  dependencyCounter$!: Observable<void>;

  constructor(
    @Self() @Optional() private dependencyService: DependencyService,
  ) {
    console.log('SERVICE 1 instantiated');
    this.dependencyCounter$ = this.dependencyService
      ? this.dependencyService.counter$
      : of();
  }

  incrementCounter(): void {
    this.counter++;
    this.counterSubject.next();
  }

  getMessage(): string {
    return `S1 NOT Root: ${this.counter}`;
  }

  incrementDependencyCounter(): void {
    if (this.dependencyService) {
      this.dependencyService.incrementCounter();
    }
  }

  getMessageFromDependency(): string {
    if (this.dependencyService) {
      return this.dependencyService.getMessage();
    } else {
      return '';
    }
  }
}
