import { Component, OnInit } from '@angular/core';
import {NewsapiserviceService} from '../service/newsapiservice.service'

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent implements OnInit {

  constructor(private _services:NewsapiserviceService) { }

  //display data
  entertainmentDisplay:any = [];

  ngOnInit(): void {

    this._services.entertainmentDisplay().subscribe((result)=>{
      console.log(result);
      this.entertainmentDisplay = result.articles;
    })

  }

}
