import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-data-add',
  templateUrl: './data-add.page.html',
  styleUrls: ['./data-add.page.scss'],
})
export class DataAddPage implements OnInit {

  note= {temperature: '', bloodPressure:'', weight: '', date:''}
  constructor(private dataService: DataService,  
    private auth: AuthService,
     private cd: ChangeDetectorRef, 
     private alertCtrl: AlertController, 
     private modalCtrl: ModalController) { 

  }

  ngOnInit() {
  }

  //to do : zmianić zarartość tej metody 
  async addNote() {
    this.auth.addNote(this.note);
    console.log(this.note)

  }

  async view(){
    this.auth.getNotes();
    
  }
}
