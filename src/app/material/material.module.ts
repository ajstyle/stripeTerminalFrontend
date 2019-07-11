import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatProgressSpinnerModule , MatInputModule ,
             MatListModule, MatExpansionModule, MatDividerModule, MatCheckboxModule,MatProgressBarModule,
            MatToolbarModule, MatCardModule, MatIconModule, MatDialogModule, MatTabsModule, MatTooltipModule, MatRadioModule],
  exports: [MatButtonModule, MatListModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, 
    MatExpansionModule, MatDividerModule, MatCheckboxModule, MatToolbarModule, MatProgressBarModule , MatCardModule,
    MatIconModule, MatDialogModule, MatTabsModule, MatTooltipModule, MatRadioModule],
})
export class MaterialModule { }
