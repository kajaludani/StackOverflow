import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule,
} from '@angular/material';

import {MatChipsModule} from '@angular/material/chips';


const modules = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule,
  MatChipsModule
];

@NgModule({
  imports: modules,
  exports: modules,
})

export class MaterialModules {}
