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

  <nav>
    <div class="nav-wrapper">
      <div class="brand-logo center">
        <h1>Tap Room</h1>
      </div>
    </div>
  </nav>
    <div class="container">
    <!-- <button class="btn btn-xs" (click)="sortByAbv()">Sort by ABV</button> -->
    <keg-list [childKegList]="masterKegList" (editButtonSender)="editKeg($event)"></keg-list>
    <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg><br>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
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

selectedKeg: Keg = null;

editKeg(clickedKeg: Keg): void {
  this.selectedKeg = clickedKeg;
}

finishedEditing(): void {
  this.selectedKeg = null;
}

addKeg(kegFromChildForm: Keg): void {
  this.masterKegList.push(kegFromChildForm);
}

}
