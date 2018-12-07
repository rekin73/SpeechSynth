import { Component, OnInit } from '@angular/core';
import { FiszkiService } from '../fiszki.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  slowo = '';
  en = '';
  ilosc = 0;
  liczba = 0;
  klikniety = true;
  dane = [];
  constructor(private DataService: FiszkiService) {
    // this.dane =
    this.DataService.getData((dane) => {

      // console.log(this.dane, this.dane[1], this.dane.pl)
      console.log(dane);
      this.dane = dane.slowo;
      this.slowo = this.dane[0].pl;
      this.ilosc = this.dane.length;
      this.liczba = this.dane.length;
    });
    // console.log(this. dane);
  }
  klik() {
    if (this.klikniety) {
      this.klikniety = false;
      this.slowo = '';
      this.en =  this.dane[this.ilosc - this.liczba].en;
      const that = this;


      const u = new SpeechSynthesisUtterance();
      u.text = this.dane[this.ilosc - this.liczba].en;
      u.lang = 'en-US';
      u.rate = 0.7;
      u.onend = function (event) {

      };
      speechSynthesis.speak(u);
      that.liczba--;
      if (that.liczba === 0) {
        that.slowo = 'Koniec Lekcji. Gratulacje!';
      }
      setTimeout(function () {

        that.klikniety = true;
        console.log(that.dane[that.ilosc - that.liczba].pl);
        that.slowo = that.dane[that.ilosc - that.liczba].pl;
        that.en = '';
      }, 5000);
    }
  }
  ngOnInit() {
  }

}
