import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {GroceryServiceProvider} from '../../providers/grocery/grocery';
import { InputserviceProvider } from '../../providers/inputservice/inputservice';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery List"
  Items =[];
  errormessage:string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public data: GroceryServiceProvider, public input: InputserviceProvider,public social:SocialSharing ) {
    data.datachanged$.subscribe((datachanged:boolean)=>{this.Loaditem()})
  }

  ionviewdidload(){

    this.LoadItem();
  }
  Loaditem(){

    this.data.GetItem().subscribe(

      items=>this.Items=items,
      error =>this.errormessage = <any>error);


  }

  LoadItem(){
    
    
    return this.data.GetItem();
    
  }

 

 
  DeleteItem(Item,index){
    console.log("Deleted")
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + Item.name + " ...",
      duration: 3000
    });
    toast.present();
    this.data.DeleteItem(index)
    
  }
  
  ShareItem(item, index) {
    console.log("Sharing Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Sharing Item - ' + index + " ...",
      duration: 3000
    });

    toast.present();

    let message = "Grocery Item - Name: " + item.name + " - Quantity: " + item.quantity;
    let subject = "Shared via Groceries app";

    this.social.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      console.error("Error while sharing ", error);
    });    

  }



  
  AddItem(){

    console.log("Added")
    this.input.showPrompt();

  }

  

  editItem(item, index) {
    console.log("Edit Item - ", item, index);
    const toast = this.toastCtrl.create({
      message: 'Editing Item - ' + index + " ...",
      duration: 3000
    });
    toast.present();
    this.input.showPrompt(item, index);
  }  

  
}
