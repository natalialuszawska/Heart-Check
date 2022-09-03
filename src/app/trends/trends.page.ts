import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-trends',
  templateUrl: './trends.page.html',
  styleUrls: ['./trends.page.scss'],
})
export class TrendsPage implements OnInit {

  notes;
  constructor(private noteService:NotesService) {}
  
  ngOnInit() {
    this.getNotes();
  }

  getNotes= ()=>
    this.noteService
    .getNotes()
    .subscribe(res=>(this.notes =res));
  


}
