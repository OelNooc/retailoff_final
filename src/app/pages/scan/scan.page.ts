import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage {
  scannedResult: string | null = null;

  constructor(private barcodeScanner: BarcodeScanner, private browser: InAppBrowser) {}

  async scanQR() {
    try {
      const barcodeData = await this.barcodeScanner.scan();
      if (barcodeData.text) {
        this.scannedResult = barcodeData.text;
        this.saveScan(barcodeData.text);
      }
    } catch (error) {
      console.error('Error al escanear el código QR', error);
    }
  }

  saveScan(text: string) {
    const savedScans = this.getSavedScans();
    savedScans.push(text);
    localStorage.setItem('scans', JSON.stringify(savedScans));
  }

  getSavedScans(): string[] {
    return JSON.parse(localStorage.getItem('scans') || '[]');
  }

  isURL(text: string): boolean {
    return /^https?:\/\//.test(text);
  }

  isCoordinate(text: string): boolean {
    return /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/.test(text);
  }

  openInBrowser() {
    this.browser.create(this.scannedResult!, '_system');
  }

  openInMap() {
    window.open(`https://www.google.com/maps?q=${this.scannedResult}`, '_system');
  }
}
