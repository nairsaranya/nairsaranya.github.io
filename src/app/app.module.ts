import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { AddnewformComponent } from './components/addnewform/addnewform.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { PopupComponent } from './shared/popup/popup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
	declarations: [
		AppComponent,
		AddnewformComponent,
		LandingpageComponent,
		PopupComponent,

	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule,
		MatBadgeModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatDatepickerModule,
		MatNativeDateModule,
		AppRoutingModule,
		MatSnackBarModule

	],
	entryComponents: [
		PopupComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
