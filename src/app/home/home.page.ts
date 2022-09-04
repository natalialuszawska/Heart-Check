import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {

  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  public appPages = [
    { title: 'Insert new data', url: '/data-add', icon: 'add' },
    { title: 'Trends', url: '/trends', icon: 'podium' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
}
