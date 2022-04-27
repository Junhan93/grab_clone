import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  headers: ShortcutButton[]= [
    {
      logo: 'wallet',
      name: 'Top Up'
    },
    {
      logo: 'scan-circle',
      name: 'Scan to Pay'
    },
    {
      logo: 'trending-up',
      name: 'Transfer'
    },
    {
      logo: 'arrow-down-sharp',
      name: 'Receive'
    },
    {
      logo: 'globe',
      name: 'Remittance'
    },
  ];

  constructor() {}



}

interface ShortcutButton {
  logo: string;
  name: string;
}
