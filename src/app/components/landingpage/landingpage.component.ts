import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PopupComponent } from 'src/app/shared/popup/popup.component';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
// import { PopupComponent } from './shared/popup/popup.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  tableData: any = [];
  durationInSeconds = 5;
  constructor(public router: Router,public dialog : MatDialog,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.tableData = JSON.parse(localStorage.getItem('details'));
    console.log(this.tableData)
  }

  editData(index: any): void {
    sessionStorage.setItem('index', index);
    this.router.navigate(['/']);
  }

  deleteData(i: any): void {
    const dialogRef = this.dialog.open(PopupComponent,{
      width: '850px',
      data : {
        // body : text,
        button1 : "Yes",
        button2 : "No"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tableData.splice(i,1);
        localStorage.setItem('details',JSON.stringify(this.tableData));
        this._snackBar.openFromComponent(SnackbarComponent, {
					duration: this.durationInSeconds * 1000,
					data: 'Deleted Successfully'
				  });
      }});
  }

}
