import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  autok: Array<Auto> = [
    {
      nev: 'Trabant 101',
      evjarat: 1978,
      kiberelt: false
    },
    {
      nev: 'Ferrari Spider',
      evjarat: 1999,
      kiberelt: false
    },
    {
      nev: 'Skoda Fabia',
      evjarat: 2004,
      kiberelt: false
    },
    {
      nev: 'Opel Astra',
      evjarat: 2009,
      kiberelt: false
    }
  ];

  foglalo = 'Kovács János';

  foglaltAuto: Auto;
  foglalas(auto) {
    if (this.foglaltAuto) {
      this.foglaltAuto.kiberelt = false;
    }
    this.foglaltAuto = auto;
    this.foglaltAuto.kiberelt = true;
  }
  onFoglalas(auto) {
    this.foglalas(auto);
  }
}

interface Auto {
  nev: string;
  evjarat: number;
  kiberelt: boolean;
}
