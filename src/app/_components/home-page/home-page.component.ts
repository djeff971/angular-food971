import { Component, OnInit } from '@angular/core';
import { DataService } from '../../_services/search.service';
import { Post } from '../../_models/post';

@Component({
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }
}