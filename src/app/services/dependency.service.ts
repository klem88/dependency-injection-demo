import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DependencyService {
  private counter = 0;
  private counterSubject = new Subject<void>();
  counter$ = this.counterSubject.asObservable();

  constructor() {
    console.log('DEPENDENCY SERVICE 1 instantiated');
  }

  incrementCounter(): void {
    this.counter++;
    this.counterSubject.next();
  }

  getMessage(): string {
    return `S.dep NOT Root: ${this.counter}`;
  }
}
