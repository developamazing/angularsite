import { Component, OnInit, ViewChild  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { SupplierOfferResponse } from '../app.restservice.types';
import { iSupplierOffer } from '../app.restservice.types';

@Component({
  templateUrl: './supplieroffers.component.html',
  styleUrls: ['../app.styles.css']
})
export class SupplierOffersComponent implements OnInit {
  public message: string;
  public allSupplierOffers: any[];
  public searchText: string;
  public page: any;
  public selectedValue: any;

  constructor(
      private _dataService: DataService) {
      _dataService.restEntityName = "supplieroffer";
      this.message = _dataService.statusMsg;
  }
  
  ngOnInit() {
      // this._slimLoadingBarService.start();
      this._dataService
          //.getAll<any[]>()
          .getDataByQueryString<iSupplierOffer[]>("/all?includeInactive=true")
          .subscribe((data: iSupplierOffer[]) => { this.allSupplierOffers = data; //alert(data.responseMessage);
                      },
                      error => () => {
                          alert('error');
                      },
                      () => {
                          // success
                          // alert("data:" + this.allSupplierOffers);
                      });
          this.message = this._dataService.statusMsg;
 }
}