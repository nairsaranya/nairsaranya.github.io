import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  body = "";
  button1 = "";
  button2 = "";
  btn2 = false;
  constructor(public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      if(this.data) { 
        this.body = this.data.body ?this.data.body : "Are you sure you want to delete?";
        this.button1 = this.data.button1 ?this.data.button1 : "Yes";
        this.button2 = this.data.button2 ?this.data.button2 : "No";
        this.btn2 = this.data.button2 ? true : false;
      }
    }

  ngOnInit(): void {
  }

  closeDialog(flag) {
    this.dialogRef.close(flag);
}

}
