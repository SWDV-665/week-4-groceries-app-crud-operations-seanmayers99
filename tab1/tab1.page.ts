import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { removeArrayItem } from 'ionic-angular/util/util';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  title = "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 1
    },
    {
      name: "Cheese",
      quantity: 2
    },
    {
      name: "Carrots",
      quantity: 3
    },
    {
      name: "Broccoli",
      quantity: 1
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    
  }

  async removeItem(item, index) {
    console.log("Removing Item - ", item);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + index + "...",
      duration: 3000
    })
    toast.present();

  }

  addItem() {

    console.log("Adding Item ");
    

  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      message: 'Please enter item ',
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
          role: 'cancel',
          cssClass: 'secondary',
          handler: data => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked', data);
          }
        }
      ]
    });

    await alert.present();
  }

}
