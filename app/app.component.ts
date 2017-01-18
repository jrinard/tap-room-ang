//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

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
    <button (click)="showKegForm()">Add Keg</button>
    <div *ngIf="addNewKeg">
      <form [formGroup]="newKegForm" (ngSubmit)="addKeg()">
        <input formControlName="brewery" placeholder="Brewery">
        <input formControlName="name" placeholder="Beer Name">
        <input formControlName="price" placeholder="Price Per Pint">
        <input formControlName="abv" placeholder="Alcohol %">
        <button type="submit">Save</button>
        <button (click)="hideKegForm()">Cancel</button>
      </form>
    </div><!--newKeg-->
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

addNewKeg: boolean = false;

newKegForm = new FormGroup({
  brewery: new FormControl(),
  name: new FormControl(),
  price: new FormControl(),
  abv: new FormControl()
});

addKeg(): void {
  let brewery = this.newKegForm.value.brewery;
  let name = this.newKegForm.value.name;
  let price = this.newKegForm.value.price;
  let abv = this.newKegForm.value.abv;
  let newKeg: Keg = new Keg(brewery, name, price, abv);
  this.kegs.push(newKeg);
  console.log(this.kegs);
}

showKegForm(): void {
  this.addNewKeg = true;
}

hideKegForm(): void {
  this.addNewKeg = false;
}
// addKeg() {
//   price: number = this.kegForm.controls.price.value;
//
//   newKeg: Keg = new Keg(price etc)
//   kegs.push(newKeg)
// }
}



export class Keg {
  public pintsRemaining: number = 124;
  constructor(public brewery: string, public name: string,  public pintPrice: number, public abv: number) {}
}
