import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public events: Events, public navCtrl: NavController) {}

  ionViewDidEnter() {
    //When tabs page is in view, I have it subscribe to a logout channel so when I logout on contact page, setRoot is run on tabs page. 
    //it needs to be run on tabs page because the tabs page is in the primary nav stack
    this.events.subscribe('user:logout', () => {
      this.navCtrl.setRoot(LoginPage);
      console.log('This is running')
    })
  }

  //This ionViewDidLeave is necessary because if someone logs out multiple times, each of those events emitted
  //Stays in the 'user:logout' channel and as such, without unsubscribing, the login page would be loaded more than once
  //This created an issue where the popup message on login page loaded more than once and stacked on top of each other
  ionViewDidLeave() {
    this.events.unsubscribe('user:logout')
    console.log('helloooo')
  }
}
