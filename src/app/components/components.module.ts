import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AntennaitemComponent} from './antennaitem/antennaitem.component';
import {RadiosetitemComponent} from './radiosetitem/radiosetitem.component';
@NgModule({
  imports: [CommonModule, IonicModule, FormsModule],
  declarations: [AntennaitemComponent, RadiosetitemComponent],
  exports: [
    AntennaitemComponent, RadiosetitemComponent
  ]
})
export class ComponentsModule { }
