import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
  <h3>Edit Keg</h3>
  <div class="form-group">
    <input class="form-control" [(ngModel)]="childSelectedKeg.brewery">
  </div>
  <div class="form-group">
    <input class="form-control" [(ngModel)]="childSelectedKeg.name">
  </div>
  <div class="form-group">
    <input class="form-control" [(ngModel)]="childSelectedKeg.price">
  </div>
  <div class="form-group">
    <input class="form-control" [(ngModel)]="childSelectedKeg.abv">
  </div>
  <button class="btn btn-xs" (click)="finishedEditing()">Done</button>
  </div><!--selectedKeg-->
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  finishedEditing(): void {
    this.doneButtonClickedSender.emit();
  }
}
