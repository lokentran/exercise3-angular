import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CalculateComponent } from './calculate/calculate.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetProfileComponent,
    ColorPickerComponent,
    CalculateComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
