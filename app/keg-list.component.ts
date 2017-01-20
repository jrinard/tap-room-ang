import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
  <select (change)="changeAbvFilter($event.target.value)">
    <option value="highToLow">High to Low</option>
    <option value="lowToHigh" selected>Low to High</option>
  </select>

  <li *ngFor="let currentKeg of childKegList | abvFilter:filterType">
  <p>{{currentKeg.brewery}} {{currentKeg.name}}</p>
  <p>{{currentKeg.abv}}% <span [class]="priceColor(currentKeg.price)">\${{currentKeg.price}}</span>,
    </p> <span [class]="reorderColor(currentKeg.pintsRemaining)">{{currentKeg.pintsRemaining}}</span> remaining
    <p><button class="light-blue darken-2 btn waves-effect waves-light btn-small" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
    <button class="light-blue darken-2 btn waves-effect waves-light btn-small" (click)="sellPint(currentKeg)">Sell Pint</button></p>
    <hr>
  </li>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() editButtonSender = new EventEmitter();

  filterType: string = "lowToHigh";

  changeAbvFilter(optionFromSelect: string): void {
    this.filterType = optionFromSelect;
  }

  editButtonHasBeenClicked(kegToEdit: Keg): void {
    this.editButtonSender.emit(kegToEdit);
  }

  priceColor(price: number): string {
    if(price === 5){
      return "text-primary";
    }else if (price > 5){
      return "text-warning";
    } else {
      return "text-success";
    }
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

}
