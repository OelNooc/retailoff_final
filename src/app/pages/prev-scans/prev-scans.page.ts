import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-prev-scans',
  templateUrl: './prev-scans.page.html',
  styleUrls: ['./prev-scans.page.scss'],
  standalone: false
})
export class PrevScansPage {
  scans: string[] = [];

  constructor(private browser: InAppBrowser) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.scans = JSON.parse(localStorage.getItem('scans') || '[]');
  }

  isURL(text: string): boolean {
    return /^https?:\/\//.test(text);
  }

  isCoordinate(text: string): boolean {
    return /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/.test(text);
  }

  openInBrowser(url: string) {
    this.browser.create(url, '_system');
  }

  openInMap(coordinates: string) {
    window.open(`https://www.google.com/maps?q=${coordinates}`, '_system');
  }
}
