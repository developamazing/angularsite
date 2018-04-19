import { Component, Input  } from '@angular/core';
import { iSupplier } from '../app.restservice.types';

@Component({
    selector: 'supplierview',
    templateUrl: './supplier.view.html',
    styleUrls: ['../app.styles.css']
})
export class SupplierViewComponent {
    @Input()
    current: iSupplier;
}