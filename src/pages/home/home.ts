import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController ) {

  }


  title = "Grocery List"

  Items = [
    {
      name: "bread",
      quantity: 1
      

    },
    {
      name: "Milk",
      quantity: 3
      

    },
    {
      name: "Cookies",
      quantity: 2
      

    },
    {
      name: "Eggs",
      quantity: 18
      

    },
    {
      name: "Blueberry",
      quantity: 5
      

    }



  ]
  DeleteItem(Item,index){
    console.log("Deleted")
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + Item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.Items.splice(index, 1);
  }


  
  AddItem(){

    console.log("Added")
    this.ShowAddItemPrompt();

  }

  ShowAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
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
            this.Items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }

}
