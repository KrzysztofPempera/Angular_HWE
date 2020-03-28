import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConsts } from 'src/shared/AppConsts';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})


export class FetchDataComponent {
  public forecasts: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + AppConsts.city[0] + AppConsts.apikey ).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  calcFtoC(tempF: number) {
    let tempC: number;

    tempC = (tempF - 32) / 1.8;
    return tempC.toFixed(1);
  }

}


