import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: any = {}

  constructor(private router: Router, private navCtrl: NavController, private auth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(data => {
      this.router.navigate(['/tabs/tab2']);
    });

  }
}
