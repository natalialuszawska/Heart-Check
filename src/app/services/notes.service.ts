import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { rejects } from 'assert';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore,
    private authService: AuthService) { }

  addNote(data){
    console.log(this.authService.user)
    
    return this.firestore
    .collection(this.authService.user.uid)
    .add(data);
  }

  getNotes(){
    return this.firestore.collection(this.authService.user.uid).snapshotChanges();
  }

}
