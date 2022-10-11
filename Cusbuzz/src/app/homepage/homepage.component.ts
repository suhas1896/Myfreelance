import { Component, OnInit } from '@angular/core';
import {APIHttpService} from '../services/apihttpservices'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private callapi:APIHttpService) { }

  ngOnInit(): void {
    this.loadapiData({ method: 'getdata' })
  }

  loadapiData(comp: any) {
    let opt: any = {};
    opt.method = comp.method
    switch (comp.method) {
      case "getdata":
        opt.rest_method = "GET"
        opt.url = environment.apiUrl+"posts"
        break;
      default:
    }
    this.loadData(opt)
  }
 //get api responce
  loadData(opt: any) {
    let resp = this.callapi.callAPI(opt) ;
    resp.subscribe(resp => {
      switch (opt.method) {
        case "getdata":
          console.log(resp)
          break
      }
    },
      (error) => {
        console.log(error)
      })
  }

}
