import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreatandaddComponent } from './creatandadd/creatandadd.component';
import { EditComponent } from './Edit/Edit.component';
import { UpdateComponent } from './Update/Update.component';
import { DeleteComponent } from './Delete/Delete.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [							
    AppComponent,
      CreatandaddComponent,
      EditComponent,
      UpdateComponent,
      DeleteComponent,
      HeaderComponent,
      FooterComponent,
      MenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
