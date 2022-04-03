import { Component, OnInit, Inject, EventEmitter, ViewChild, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Animals } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';

@Component({
  selector: 'app-dialog-data',
  templateUrl: './dialog-data.component.html',
  styleUrls: ['./dialog-data.component.scss']
})
export class DialogDataComponent implements OnInit {

  // @Output() newAnimalEvent: EventEmitter<Animals> = new EventEmitter<Animals>();

  @ViewChild('id') inputId: any;
  @ViewChild('title') inputTitle: any;
  @ViewChild('description') inputDescription: any;
  @ViewChild('creator') inputCreator: any;
  @ViewChild('imgURL') inputImage: any;
  @ViewChild('type') inputType: any;
  @ViewChild('tags') inputTags: any;

  newAnimal?: Animals;
  testPass?: boolean;
  
  constructor(public dialogRef: MatDialogRef<DialogDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  ngOnInit(): void {
  }
  
  addAnimal(title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    if(title.length > 0 && description.length > 0 && creator.length > 0){
      this.newAnimal = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type,
        tags: tags.split(",")
      }
      this.dialogRef.close({ animal: this.newAnimal });
    }
    if(this.newAnimal != null && this.newAnimal.title != '' && this.newAnimal.description != '' && this.newAnimal.creator != '') {
      this.testPass = true;
    } else {
      this.testPass = false;
    }
  }
  close():void{
    this.dialogRef.close();
  }
}
