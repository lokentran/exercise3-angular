import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CalculateComponent } from './calculate/calculate.component';
import { UserListComponent } from './user-list/user-list.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    PetProfileComponent,
    ColorPickerComponent,
    CalculateComponent,
    UserListComponent,
    InputSearchComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
