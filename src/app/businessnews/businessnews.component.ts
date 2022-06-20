import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  //display data
  businessDisplay:any = [];

  ngOnInit(): void {

    this._services.businessDisplay().subscribe((result)=>{
      console.log(result);
      this.businessDisplay = result.articles;
    })

  }
}
