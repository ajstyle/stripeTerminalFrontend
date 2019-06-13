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


@NgModule({
  imports: [MatButtonModule, MatListModule,MatExpansionModule, MatDividerModule, MatCheckboxModule,
     MatToolbarModule, MatCardModule, MatIconModule, MatDialogModule, MatTabsModule,MatTooltipModule],
  exports: [MatButtonModule, MatListModule, MatExpansionModule,MatDividerModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatIconModule, MatDialogModule, MatTabsModule,MatTooltipModule],
})
export class MaterialModule { }
