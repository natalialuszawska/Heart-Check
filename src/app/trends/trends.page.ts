import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {

  notes= {}
  constructor(private dataService: DataService,  private cd: ChangeDetectorRef, private alertCtrl: AlertController, private modalCtrl: ModalController) { 
    this.dataService.getNotes().subscribe(res => {
      this.notes = res;
      this.cd.detectChanges();
    });
    
  }
  
  ngOnInit() {
  }

  // async openNote(note: any) {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalPage,
  //     componentProps: { id: note.id },
  //     breakpoints: [0, 0.5, 0.8],
  //     initialBreakpoint: 0.8
  //   });
 
  //   await modal.present();

}
