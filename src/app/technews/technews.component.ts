import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  //display data
  techDisplay:any = [];

  ngOnInit(): void {

    this._services.techDisplay().subscribe((result)=>{
      console.log(result);
      this.techDisplay = result.articles;
    })

  }

}
