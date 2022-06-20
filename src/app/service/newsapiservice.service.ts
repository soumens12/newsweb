import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b0e1d1fe7f684cc1bbd4007c9b342923";

  //sportapiurl
   sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b0e1d1fe7f684cc1bbd4007c9b342923";

 //businessapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b0e1d1fe7f684cc1bbd4007c9b342923";

  //entertainmentapiurl
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b0e1d1fe7f684cc1bbd4007c9b342923";

    //technologyapiurl
    techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b0e1d1fe7f684cc1bbd4007c9b342923";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

   //sports()
   sportsDisplay():Observable<any>
   {
     return this._http.get(this.sportsApiUrl);
   }
   //business()
   businessDisplay():Observable<any>
   {
     return this._http.get(this.businessApiUrl);
   }

   //entertainment()
   entertainmentDisplay():Observable<any>
   {
     return this._http.get(this.entertainmentApiUrl);
   }

   //technology()
   techDisplay():Observable<any>
   {
     return this._http.get(this.techApiUrl);
   }
}
