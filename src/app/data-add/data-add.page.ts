import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { NotesService } from '../services/notes.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Note } from './note';

@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.page.html',
  styleUrls: ['./data-add.page.scss'],
})
export class DataAddPage implements OnInit {

  
  constructor(private firestore: AngularFirestore,
    private notesService: NotesService){}

  ngOnInit() {
  }
  temperature?: number; 
  systolicBloodPressure?:number; 
  diastolicBloodPressure?: number;
  weight?: number;
  date?: any;

  note:Note={
    temperature: this.temperature,
    systolicBloodPressure: this.systolicBloodPressure,
    diastolicBloodPressure: this.diastolicBloodPressure,
    weight: this.weight,
    date: this.date
  }

  addNote() {
    console.log(this.note);
    this.notesService.addNote(this.note);
  }

 
}
