import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { ConsumerOfferBundleResponse } from '../app.restservice.types';
import { iConsumerOfferBundles } from '../app.restservice.types';

@Component({
    templateUrl: './consumerofferbundles.component.html',
    styleUrls: ['../app.styles.css']
})
export class ConsumerofferbundlesComponent implements OnInit {
  public message: string;
  public allConsumerOfferBundles: any[];
  public rulesResults: string;
  public today: number = Date.now();
  public searchText: string;
  public page: any;

  constructor(
      private _dataService: DataService) {
      _dataService.restEntityName = "consumerOfferBundle";
      this.message = _dataService.statusMsg;      
  }

    //sorting
    key: string = 'offer.offerBundle.productSKU'; //set default
    reverse: boolean = false;
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }
  
  ngOnInit() {
      // this._slimLoadingBarService.start();
      this._dataService
          //.getAll<any[]>()
          .getDataByQueryString<iConsumerOfferBundles[]>("/all")
          .subscribe((data: iConsumerOfferBundles[]) => { this.allConsumerOfferBundles = data; //alert(data.responseMessage);
                      },
                      error => () => {
                          alert('error');
                      },
                      () => {
                          // success
                          // alert("data:" + this.allConsumerOfferBundles);
                      });
          this.message = this._dataService.statusMsg;
 }
}