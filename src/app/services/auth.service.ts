import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { Firestore, collection, collectionData, doc, getDoc,docData, addDoc, deleteDoc, updateDoc, SnapshotMetadata, docSnapshots } from '@angular/fire/firestore';
import { snapToData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth,private firestore: Firestore) {
  }
 
  async register({ email, password }) {
    console.log("register method")
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }
 
 login({ email, password }) {
    console.log("login method")

      const userK =  signInWithEmailAndPassword(this.auth, email, password)
      .catch(er=>null)
      .then(cr=>cr);
      console.log("After login:",userK);
      return userK;
    
  }
 
  logout() {
    return signOut(this.auth);
  }

  get user(){
    return this.auth.currentUser;
  }
  
  // addNote(note: any) {

  //   const user = this.auth.currentUser;
  //   const path = `${user.uid}`;

  //   //do zapisywanej notatki dodać id równe użytkownikowi!!!
    
  //   console.log('note in service', path)
  //   const notesRef = collection(this.firestore, path);
  //   return addDoc(notesRef, note);
  // }
  //zła konstukcja robi się kolekcja w kolekcji

  async getNotes(){

    const user = this.auth.currentUser;
    const docRef = doc(this.firestore, user.uid,doc.name );
    getDoc(docRef).then((doc) => { console.log(doc.data()); });
    getDoc(docRef).then((snapshot) => { console.log(snapshot.data()); });

  }
}