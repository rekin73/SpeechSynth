import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FiszkiService {

  dane = [];
  constructor(private httpClient: HttpClient) {

  }
  getData(cb) {
    const that = this;
    const params = new HttpParams().set('nr', '1');
    this.httpClient.get('http://localhost/KalFiszki/index.php', { params })
      .subscribe((data) => {
        // console.log(data)
       /* data.forEach(element => {
          that.dane.push(element)
        });*/
        // this.dane = data;
console.log(data);
        cb(data);

      },
      error => {
        console.log('Error', error);
      });
   // return this.dane;
  }
}
