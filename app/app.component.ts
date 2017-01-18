//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {

kegs: Keg[] = [
  new Keg('Breakside IPA', 'Breakside', 7, 6.3),
  new Keg('Heater Allen Pilsner', 'Heater Allen', 5, 4.9),
  new Keg('Sunrise Oatmeal Pale Ale', 'Fort George Brewing', 5, 5.5),
];
}



export class Keg {
  public pintsRemaining: number = 124;
  constructor(public name: string, public brewery: string, public pintPrice: number, public abv: number) {}
}
