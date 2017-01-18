//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <ul>
      <li *ngFor="let currentKeg of kegs">
      {{currentKeg.brewery}} {{currentKeg.name}}, {{currentKeg.abv}}%,  \${{currentKeg.pintPrice}}
      </li>
    </ul>

  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {

kegs: Keg[] = [
  new Keg('Breakside', 'IPA', 7, 6.3),
  new Keg('Heater Allen', 'Pilsner', 5, 4.9),
  new Keg('Fort George', 'Sunrise Oatmeal Pale Ale', 5, 5.5),
];
}



export class Keg {
  public pintsRemaining: number = 124;
  constructor(public brewery: string, public name: string,  public pintPrice: number, public abv: number) {}
}
