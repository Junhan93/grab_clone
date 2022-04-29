import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  headers: ShortcutButton[]= [
    { logo: 'wallet', name: 'Top Up' },
    { logo: 'scan-circle', name: 'Scan to Pay' },
    { logo: 'trending-up', name: 'Transfer' },
    { logo: 'arrow-down-sharp', name: 'Receive' },
    { logo: 'globe', name: 'Remittance' },
  ];

  cards: ShortcutCard[] = [
    { title: 'GrabPay Wallet', amount: 20.22, details: 'View GrabPay Card Details' },
    { title: 'PayLater', amount: 1200, details: 'View PayLater Details' },
  ];

  constructor() {}

  viewCard() {
    console.log('This works');
  }


}

interface ShortcutButton {
  logo: string;
  name: string;
}
interface ShortcutCard {
  title: string;
  amount: number;
  details: string;
}
