import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './containers/app.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { LoaderComponent } from './components/loader.component';
import { SnackComponent } from './components/snack.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent, LoaderComponent, SnackComponent],
  exports: [AppComponent]
})
export class CoreModule { }
