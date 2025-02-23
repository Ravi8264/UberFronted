import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Add this import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { RideRequestComponent } from './ride-request/ride-request.component';
import { PaymentComponent } from './payment/payment.component';
import { RideHistoryComponent } from './ride-history/ride-history.component';
import { RatingFeedbackComponent } from './rating-feedback/rating-feedback.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RideComponent } from './ride/ride.component';
import { DriverComponent } from './driver/driver.component';
import { SignupComponent } from './signup/signup.component';
import { HelpComponent } from './help/help.component';
import { LanguageComponent } from './language/language.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpageuberComponent } from './firstpageuber/firstpageuber.component';
import { MapComponent } from './map/map.component'; // Ensure this component is imported
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { LoginComponent } from './login/login.component';
import { OffCanvasSignInComponent } from './off-canvas-sign-in/off-canvas-sign-in.component';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { NotifactionofrideComponent } from './notifactionofride/notification.component';
import { DriverloginComponent } from './driverlogin/driverlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    RideRequestComponent,
    PaymentComponent,
    RideHistoryComponent,
    RatingFeedbackComponent,
    SettingsComponent,
    NavbarComponent,
    RideComponent,
    DriverComponent,
    SignupComponent,
    HelpComponent,
    LanguageComponent,
    SuggestionComponent,
    FooterComponent,
    FirstpageuberComponent,
    MapComponent,
    LoginComponent,
    OffCanvasSignInComponent,
    DriverManagementComponent,
    NotifactionofrideComponent,
    DriverloginComponent,
  ],
  imports: [
    BrowserModule, // Add BrowserModule here
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Add HttpClientModule here
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
