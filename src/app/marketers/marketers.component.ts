import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { MarketersResponse } from '../app.restservice.types';
import { iMarketer } from '../app.restservice.types';
import { MarketerViewComponent } from './marketer.view';

@Component({
  selector: 'app-marketers',
  templateUrl: './marketers.component.html',
  styleUrls: ['../app.styles.css']
})
export class MarketersComponent implements OnInit {
  public message: string;
  public searchText: string;
  public allMarketers: any[];

  constructor(
      private _dataService: DataService) {
      _dataService.restEntityName = "marketer";
      this.message = _dataService.statusMsg;
  }

  //sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  ngOnInit() {
      // this._slimLoadingBarService.start();
      this._dataService
          //.getAll<any[]>()
          .getData<MarketersResponse>()
          .subscribe((data: MarketersResponse) => { this.allMarketers = data.resultList; //alert(data.responseMessage);
                      },
                      error => () => {
                          alert('error');
                      },
                      () => {
                          // success
                           // alert("data" + this.allMarketers);
                      });
          this.message = this._dataService.statusMsg;
 }
}