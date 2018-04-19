import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `<div class='footer' align='right'><i>&copy; 2018 reserved.</i></div>`,
  styleUrls: ['./footer.component.css'] 
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
