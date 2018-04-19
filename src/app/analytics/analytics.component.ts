import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';

@Component({
    templateUrl: './analytics.component.html',
    styleUrls: ['../app.styles.css']
})

export class AnalyticsComponent implements OnInit {
  public message: string;
  public allConsumerOfferBundles: any[];
  public rulesResults: string;
  public today: number = Date.now();

  constructor(
      private _dataService: DataService) {
      _dataService.restEntityName = "consumerOfferBundle";
      this.message = _dataService.statusMsg;
  }

  ApplyRules()
  {
      this._dataService.post("/executeOfferRules")
      .subscribe((data: string) => { this.rulesResults = data; 
      },
      error => () => {
          this.rulesResults = 'Failed to apply rules...';
          alert('error');
      },
      () => {
          this.rulesResults = 'Rules applied successfuly';
      });
      this.message = this._dataService.statusMsg;
  }

  ngOnInit() {
  }
}
