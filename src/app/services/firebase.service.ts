import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    static getUser() {
        throw new Error('Method not implemented.');
    }

  constructor(public db: AngularFirestore) {}

  getAvatars() {
      return this.db.collection('/avatar').valueChanges() ;
  }

  getUser(userKey: any) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }
  checkEmail(email: any) {
    return this.db.collection('users', ref => ref.where('email', '==', email)).snapshotChanges();
  }

  login(userKey: any, pass: any) {
    return this.db.collection('users', ref => ref.where('email', '==', userKey)
    .where('password', '==', pass))
    .snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue) {

    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges() ;
  }

  createUser(value, avatar) {
    return this.db.collection('users').add({
      firstName: value.firstName,
      lastName: value.lastName,
      nameToSearch: value.nameToSearch.toLowerCase(),
      email: value.email,
      id: value.userId,
      password: value.UserPass,
      address: value.address,
      phoneNumber: value.phoneNumber,
      avatar
    });
  }

  createKDSOrder(value) {
    console.log('value=====', value) ;
    return this.db.collection('KDS').add({
      orderInfo: value
    });
  }

  getKDSOrder() {
    return this.db.collection('KDS').snapshotChanges();

  }
  createOrderHistory(value) {
    return this.db.collection('orderHistory').add({
      orderNumber: value.orderNumber,
      paymentType: value.paymentType,
      cost: value.total,
      orderedFrom: value.orderedFrom,
      order: value.order,
      email: value.email
    });
  }

}
