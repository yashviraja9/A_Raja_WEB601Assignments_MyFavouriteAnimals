import { Component, EventEmitter, Inject, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { Animals } from '../helper-files/content-interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogDataComponent } from '../dialog-data/dialog-data.component';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newAnimalEvent: EventEmitter<Animals> = new EventEmitter<Animals>();

  newAnimal?: Animals;
  testPass?: boolean;
  message?: string;
  arrayOfAnimals : Animals[]; 

  constructor(public dialog: MatDialog) { 
    this.arrayOfAnimals = [];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataComponent, {
      width: '400px',
      height: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed');
        this.newAnimalEvent.emit(result.animal);
      }
    });
  }

  ngOnInit(): void {
  }
}
