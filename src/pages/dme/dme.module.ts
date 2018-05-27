import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DmePage } from './dme';

@NgModule({
  declarations: [
    DmePage,
  ],
  imports: [
    IonicPageModule.forChild(DmePage),
  ],
})
export class DmePageModule {}
