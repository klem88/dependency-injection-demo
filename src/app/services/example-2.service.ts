import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Example2Service {
  private counter = 0;
  private counterSubject = new Subject<void>();
  counter$ = this.counterSubject.asObservable();

  constructor() {
    console.log('SERVICE 2 instantiated');
  }

  incrementCounter(): void {
    this.counter++;
    this.counterSubject.next();
  }

  getMessage(): string {
    return `S2 Prov. Root: ${this.counter}`;
  }
}
