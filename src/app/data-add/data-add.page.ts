import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.page.html',
  styleUrls: ['./data-add.page.scss'],
})
export class DataAddPage implements OnInit {

  note= {temperature: '', bloodPressure:'', weight: '', date:''}
  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) { 

  }

  ngOnInit() {
  }

  //to do : zmianić zarartość tej metody 
  async addNote() {
    // const alert = await this.alertCtrl.create({
    //   header: 'Add Note',
    //   inputs: [
    //     {
    //       name: 'title',
    //       placeholder: 'My cool note',
    //       type: 'text'
    //     },
    //     {
    //       name: 'text',
    //       placeholder: 'Learn Ionic',
    //       type: 'textarea'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel'
    //     }, {
    //       text: 'Add',
    //       handler: res => {
    //         this.dataService.addNote({ text: res.text, title: res.title });
    //       }
    //     }
    //   ]
    //});
    this.dataService.addNote(this.note);
    console.log(this.note)
      
    //await alert.present();
  }
}
