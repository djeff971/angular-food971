import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
) { }
}
