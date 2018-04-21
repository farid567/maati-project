import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedRouting } from './shared.routing';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { SignupPopupComponent } from './components/signup-popup/signup-popup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRouting
  ],
  declarations: [HeaderComponent, FooterComponent, LoginPopupComponent, SignupPopupComponent],
  exports: [HeaderComponent,FooterComponent ,LoginPopupComponent ,SignupPopupComponent]
})
export class SharedModule { }
