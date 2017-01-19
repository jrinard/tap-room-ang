import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <button class="btn" (click)="showKegForm()">Add Keg</button>
  <div *ngIf="addNewKeg">
    <h3>New Keg</h3>
      <div class="form-group">
        <input class="form-control" #newBrewery placeholder="Brewery">
      </div>
      <div class="form-group">
        <input class="form-control" #newName placeholder="Beer Name">
      </div>
      <div class="form-group">
        <input class="form-control" #newPrice placeholder="Price Per Pint">
      </div>
      <div class="form-group">
        <input class="form-control" #newAbv placeholder="Alcohol %">
      </div>
      <button class="btn btn-xs" (click)="submitForm(newBrewery.value, newName.value, newPrice.value, newAbv.value); newBrewery.value = '';
      newName.value = '';
      newPrice.value = '';
      newAbv.value = '';">Save</button>
      <button class="btn btn-xs"(click)="hideKegForm()">Cancel</button>
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
