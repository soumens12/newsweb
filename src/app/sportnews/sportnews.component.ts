import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  //display data
  sportsDisplay:any = [];

  ngOnInit(): void {

    this._services.sportsDisplay().subscribe((result)=>{
      console.log(result);
      this.sportsDisplay = result.articles;
    })

  }
}
