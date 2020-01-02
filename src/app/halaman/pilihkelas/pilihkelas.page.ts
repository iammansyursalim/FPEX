import { Component} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pilihkelas',
  templateUrl: './pilihkelas.page.html',
  styleUrls: ['./pilihkelas.page.scss'],
})
export class PilihkelasPage {

  dosen: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.dosen = db.collection('dosen').valueChanges();
  }


}
