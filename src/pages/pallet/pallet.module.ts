import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PalletPage } from './pallet';

@NgModule({
  declarations: [
    PalletPage,
  ],
  imports: [
    IonicPageModule.forChild(PalletPage),
  ],
})
export class PalletPageModule {}
