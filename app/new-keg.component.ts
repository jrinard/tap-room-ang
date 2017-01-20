import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <button class="light-blue darken-2 btn" (click)="showKegForm()">Add Keg</button>
  <div *ngIf="addNewKeg">
    <h3>New Keg</h3>
      <div class="input-field">
        <input #newBrewery placeholder="Brewery">
      </div>
      <div class="input-field">
        <input #newName placeholder="Beer Name">
      </div>
      <div class="input-field">
        <input #newPrice placeholder="Price Per Pint">
      </div>
      <div class="input-field">
        <input #newAbv placeholder="Alcohol %">
      </div>
      <button class=" light-blue darken-2 btn" (click)="submitForm(newBrewery.value, newName.value, newPrice.value, newAbv.value); newBrewery.value = '';
      newName.value = '';
      newPrice.value = '';
      newAbv.value = '';">Save</button>
      <button class="light-blue darken-2 btn"(click)="hideKegForm()">Cancel</button>
  </div><!--newKeg-->
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  addNewKeg: boolean = false;

  submitForm(breweryInput: string, beerInput: string, priceInput: string, abvInput: string): void {
    let newKeg: Keg = new Keg(breweryInput, beerInput, parseInt(priceInput), parseInt(abvInput));
    this.newKegSender.emit(newKeg);
    this.addNewKeg = false;
  }

  showKegForm(): void {
    this.addNewKeg = true;
  }

  hideKegForm(): void {
    this.addNewKeg = false;
  }


}
