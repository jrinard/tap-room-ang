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
  <div class="page-header">
    <h1>Tap Room</h1>
    </div>
    
    <button class="btn btn-xs" (click)="sortByAbv()">Sort by ABV</button>
      <li *ngFor="let currentKeg of kegs">
      {{currentKeg.brewery}} {{currentKeg.name}}, {{currentKeg.abv}}%,  <span [class]="priceColor(currentKeg.price)">\${{currentKeg.price}}</span>
      <button class="btn btn-xs" (click)="editKeg(currentKeg)">Edit</button>
      <span [class]="reorderColor(currentKeg.pintsRemaining)">{{currentKeg.pintsRemaining}}</span> remaining
      <button class="btn btn-xs" (click)="sellPint(currentKeg)">Sell Pint</button>
      </li>


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
    <div *ngIf="selectedKeg">
    <h3>Edit Keg</h3>
    <div class="form-group">
      <input class="form-control" [(ngModel)]="selectedKeg.brewery">
    </div>
    <div class="form-group">
      <input class="form-control" [(ngModel)]="selectedKeg.name">
    </div>
    <div class="form-group">
      <input class="form-control" [(ngModel)]="selectedKeg.price">
    </div>
    <div class="form-group">
      <input class="form-control" [(ngModel)]="selectedKeg.abv">
    </div>
    <button class="btn btn-xs" (click)="finishedEditing()">Done</button>

    </div><!--selectedKeg-->
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
  this.kegs.push(newKeg);
}

showKegForm(): void {
  this.addNewKeg = true;
}

hideKegForm(): void {
  this.addNewKeg = false;
}

sellPint(clickedKeg: Keg): void {
  clickedKeg.pintsRemaining -= 1;
}

reorderColor(pintsRemaining: number): string {
  if(pintsRemaining <= 10){
    return "text-danger";
  } else {
    return "text-primary";
  }
}

priceColor(price: number): string {
  console.log(price);
  if(price === 5){
    return "text-primary";
  }else if (price > 5){
    return "text-warning";
  } else {
    return "text-success";
  }
}

sortByAbv(): void {
  this.kegs.sort(function (kegA: Keg, kegB: Keg) {
    return kegA.abv - kegB.abv;
  });
}
}



export class Keg {
  public pintsRemaining: number = 124;
  constructor(public brewery: string, public name: string,  public price: number, public abv: number) {}
}
