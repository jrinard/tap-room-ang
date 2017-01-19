//ROOT COMPONENT
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Keg } from './keg.model';

//Part 1 COMPONENT ANNOTATION - determines how it APPEARS
@Component({ // defines new component should have functionalities outlines in the above imported component
  selector: 'app-root', // defines the specific tag to render within.
  template: `
  <div class="container">
  <div class="page-header">
    <h1>Tap Room</h1>
    </div>

    <button class="btn btn-xs" (click)="sortByAbv()">Sort by ABV</button>
    <keg-list [childKegList]="masterKegList" (editButtonSender)="editKeg($event)"></keg-list>


    <button class="btn" (click)="showKegForm()">Add Keg</button>
    <div *ngIf="addNewKeg">
      <h3>New Keg</h3>
      <form [formGroup]="newKegForm" (ngSubmit)="addKeg()">
        <div class="form-group">
          <input class="form-control" formControlName="brewery" placeholder="Brewery">
        </div>
        <div class="form-group">
          <input class="form-control"formControlName="name" placeholder="Beer Name">
        </div>
        <div class="form-group">
          <input class="form-control"formControlName="price" placeholder="Price Per Pint">
        </div>
        <div class="form-group">
          <input class="form-control"formControlName="abv" placeholder="Alcohol %">
        </div>
        <button class="btn btn-xs"type="submit">Save</button>
        <button class="btn btn-xs"(click)="hideKegForm()">Cancel</button>
      </form>
    </div><!--newKeg-->

      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
  </div>
  `
})

//Part 2 CLASS DEFINITION -- determines how it BEHAVES
export class AppComponent {

masterKegList: Keg[] = [
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

selectedKeg: Keg = null;

editKeg(clickedKeg: Keg): void {
  this.selectedKeg = clickedKeg;
}

finishedEditing(): void {
  this.selectedKeg = null;
}

addKeg(): void {
  let brewery = this.newKegForm.value.brewery;
  let name = this.newKegForm.value.name;
  let price = this.newKegForm.value.price;
  let abv = this.newKegForm.value.abv;
  let newKeg: Keg = new Keg(brewery, name, price, abv);
  this.masterKegList.push(newKeg);
}

showKegForm(): void {
  this.addNewKeg = true;
}

hideKegForm(): void {
  this.addNewKeg = false;
}



sortByAbv(): void {
  this.masterKegList.sort(function (kegA: Keg, kegB: Keg) {
    return kegA.abv - kegB.abv;
  });
}
}
