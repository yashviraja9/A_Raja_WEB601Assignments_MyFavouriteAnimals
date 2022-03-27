import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Animals } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newAnimalEvent: EventEmitter<Animals> = new EventEmitter<Animals>();
  @Output() updateAnimalEvent: EventEmitter<Animals> = new EventEmitter<Animals>();

  newAnimal?: Animals;
  testPass?: boolean;
  message?: string;
  @ViewChild('id') inputId: any;
  @ViewChild('title') inputTitle: any;
  @ViewChild('description') inputDescription: any;
  @ViewChild('creator') inputCreator: any;
  @ViewChild('imgURL') inputImage: any;
  @ViewChild('type') inputType: any;
  @ViewChild('tags') inputTags: any;

  constructor() { }

  ngOnInit(): void {
  }

  addAnimal(title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newAnimal = {
      // id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };

    if(this.newAnimal != null && this.newAnimal.title != '' && this.newAnimal.description != '' && this.newAnimal.creator != '') {
      this.newAnimalEvent.emit(this.newAnimal);
      this.testPass = true;
    } else {
      this.testPass = false;
    }

    let ourPromise = new Promise((success, fail) => {
      if (this.testPass) {
        success("The addition is successful..");
      }
      else {
        fail("You must try to create the content again with the required fields filled in.");
      }
    });
  
    ourPromise.then( (successMessage) => {
      //  console.log("The promise succeeded with the message: ", successMessage);
        this.inputId.nativeElement.value = '';
        this.inputTitle.nativeElement.value = '';
        this.inputDescription.nativeElement.value = '';
        this.inputCreator.nativeElement.value = '';
        this.inputImage.nativeElement.value = '';
        this.inputType.nativeElement.value = '';
        this.inputTags.nativeElement.value = '';
        this.message = '';
    })
    .catch( (failureMessage : any) => {
      // console.log("The promise failed with the message: ", failureMessage);
      this.message = failureMessage;
    });
  }

  updateAnimal(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    this.newAnimal = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type,
      tags: tags.split(",")
    };

    if(this.newAnimal.id == 1 || this.newAnimal.id == 2 || this.newAnimal.id == 3 || this.newAnimal.id == 4 || 
      this.newAnimal.id == 5 || this.newAnimal.id == 6 || this.newAnimal.id == 7 &&
      this.newAnimal != null && this.newAnimal.title != '' && this.newAnimal.description != '' && this.newAnimal.creator != '') {
        this.updateAnimalEvent.emit(this.newAnimal);
        this.testPass = true;
    } else {
      this.testPass = false;
    }

    let ourPromise = new Promise((success, fail) => {
      if (this.testPass) {
        success("The Update is successful..");
      }
      else {
        fail("You must try to update the content again with the required fields filled in.");
      }
    });
  
    ourPromise.then( (successMessage) => {
      //  console.log("The promise succeeded with the message: ", successMessage);
        this.inputId.nativeElement.value = '';
        this.inputTitle.nativeElement.value = '';
        this.inputDescription.nativeElement.value = '';
        this.inputCreator.nativeElement.value = '';
        this.inputImage.nativeElement.value = '';
        this.inputType.nativeElement.value = '';
        this.inputTags.nativeElement.value = '';
        this.message = '';
    })
    .catch( (failureMessage : any) => {
      // console.log("The promise failed with the message: ", failureMessage);
      this.message = failureMessage;
    });
  }
}
