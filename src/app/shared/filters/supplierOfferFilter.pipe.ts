import { Pipe, PipeTransform } from '@angular/core';
import {  iSupplierOffer } from '../../app.restservice.types';

@Pipe({
  name: 'supplierOfferFilter'
})
export class SupplierOfferFilterPipe implements PipeTransform {
  transform(offers: iSupplierOffer[], searchText: string): any[] {
        if(!offers) return [];
        if(!searchText) return offers;
        //return items.filter(item =>
        //    filterKeys.reduce((memo, keyname) => 
        //        (memo && new RegExp(searchText[keyname], 'gi')).test(item[keyname])
        //       //(item[keyname] && item[keyname].toString().toLowerCase().includes(searchText[keyname].toString()))
        //        || searchText[keyname] === "", true ) );
        searchText = searchText.toLowerCase();
         return offers.filter( sOffer => {
         return sOffer.offerSupplierProductKeyId.supplierId.name.toString().toLowerCase().includes(searchText);
     });
   }
}