import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class Configuration {
    public Server = environment.ServerAddress; // 'http://api.ushopper.net/';
    public ApiUrl = 'offerprocessing/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}