import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    selector: 'test-signals',
    template: `
      <p>Count: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
    `,
  })
  export class TestSignalsComponent {
     counter = signal(0);
  
    increment() {
      this.counter.update((current) => current + 1);
    }
  }
  