import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pilihminggu',
  templateUrl: './pilihminggu.page.html',
  styleUrls: ['./pilihminggu.page.scss'],
})
export class PilihmingguPage implements OnInit {

  minggu: Observable<any[]>;
  encodedData = '';
  QRSCANNED_DATA: string;
  isOn = false;
  scannedData: {};

  constructor(private db: AngularFirestore, private qrScanCtrl: QRScanner) {
    this.minggu = db.collection('minggu').valueChanges();
  }

  ngOnInit() {
  }

  goToQrScan() {
    this.qrScanCtrl.prepare()
        .then((status: QRScannerStatus) => {
          if (status.authorized) {
            // camera permission was granted
            this.isOn = true;


            // start scanning
            const scanSub = this.qrScanCtrl.scan().subscribe((text: string) => {
              console.log('Scanned something', text);
              this.isOn = false;

              this.QRSCANNED_DATA = text;
              if (this.QRSCANNED_DATA !== '') {
                this.closeScanner();
                scanSub.unsubscribe();
              }

            });
            this.qrScanCtrl.show();

          } else if (status.denied) {
            console.log('camera permission denied');
            this.qrScanCtrl.openSettings();
          } else {
          }
        })
        .catch((e: any) => console.log('Error is', e));
  }

  closeScanner() {
    this.isOn = false;
    this.qrScanCtrl.hide();
    this.qrScanCtrl.destroy();
  }

}
