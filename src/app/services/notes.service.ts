import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private firestore: AngularFirestore,
    private authService: AuthService) { }

  addNote(data){    
    return this.firestore
    .collection(this.authService.user.uid)
    .add(data);
  }

  getNotes(){
    return this.firestore.collection(this.authService.user.uid).snapshotChanges();
  }

}
