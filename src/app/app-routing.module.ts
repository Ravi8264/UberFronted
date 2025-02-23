import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Make sure both are importe
import { RideComponent } from './ride/ride.component';
import { DriverComponent } from './driver/driver.component';
import { LanguageComponent } from './language/language.component';
import { SignupComponent } from './signup/signup.component';
import { HelpComponent } from './help/help.component';
import { FirstpageuberComponent } from './firstpageuber/firstpageuber.component';
import { LoginComponent } from './login/login.component';
import { OffCanvasSignInComponent } from './off-canvas-sign-in/off-canvas-sign-in.component';
import { AuthGuard } from './service/auth.guard';
import { NotifactionofrideComponent } from './notifactionofride/notification.component';
import { DriverManagementComponent } from './driver-management/driver-management.component';
import { DriverloginComponent } from './driverlogin/driverlogin.component';
import { AuthGuardDriver } from './service/authdriver.guard';

const routes: Routes = [
  // { path: 'ride', component: RideComponent },
  { path: 'ride', component: RideComponent, canActivate: [AuthGuard] },
  { path: 'driver', component: DriverComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'help', component: HelpComponent },
  { path: 'sign-in-drive', component: DriverComponent }, // Route for signing in to drive
  { path: 'sign-in-ride', component: RideComponent },
  { path: 'off-canvas-sign-in', component: OffCanvasSignInComponent },
  { path: 'notification', component: NotifactionofrideComponent },
  { path: 'driverlogin', component: DriverloginComponent },
  {
    path: 'driverManagement',
    component: DriverManagementComponent,
    canActivate: [AuthGuardDriver],
  },
  { path: '**', component: FirstpageuberComponent }, // Fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
