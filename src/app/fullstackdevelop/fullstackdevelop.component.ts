import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fullstackdevelop',
  templateUrl: './fullstackdevelop.component.html',
  styleUrls: ['./fullstackdevelop.component.css']
})
export class FullstackdevelopComponent implements OnInit {

  today = new Date();
  constructor() { }

  ngOnInit() {
  }

}