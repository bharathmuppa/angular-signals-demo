import { ChangeDetectionStrategy, Component, computed, effect, signal } from "@angular/core";

@Component({
    selector: 'test-effects-and-computed',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
      <p>Count: {{ counter() }}</p>
      <button (click)="increment()">Increment</button>
    `,
  })
  export class TestEffectsAndComputedComponent {
     counter = signal(0);
  
     constructor() {
        const isEven = computed(() => {
          return this.counter() % 2 === 0;
        });
    
        effect(() => {
          console.log('Effect runs with: ', isEven());
        });
        // logs "Effect runs with: true" when component is initialy rendered
      }
    
      update() {
        this.counter.update((current) => current + 2); // notice + 2
      }
  }
  
