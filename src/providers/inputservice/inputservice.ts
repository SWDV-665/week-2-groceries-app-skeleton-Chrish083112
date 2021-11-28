
import { NullAstVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {GroceryServiceProvider} from '../../providers/grocery/grocery';


/*
  Generated class for the InputserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputserviceProvider {

  constructor( public toastCtrl: ToastController, public alertCtrl: AlertController, public data: GroceryServiceProvider) {
    console.log('Hello InputserviceProvider Provider');
  }


  // ShowAddItemPrompt() {
  //   const prompt = this.alertCtrl.create({
  //     title: 'Add Item',
  //     message: "Please enter item...",
  //     inputs: [
  //       {
  //         name: 'name',
  //         placeholder: 'Name'
  //       },
  //       {
  //         name: 'quantity',
  //         placeholder: 'Quantity'
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         handler: item => {
  //           console.log('Saved clicked', item);
  //           this.data.AddItem(item)
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Please edit item...": "Please add item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
         value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value:item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if(index !== undefined){
              this.data.EditItem(item, index); 
            }
            else{
              this.data.AddItem(item)
            }
              
          }
        }
      ]
    });
    prompt.present();
  }  

}
