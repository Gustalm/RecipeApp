import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  pageMessage = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pageMessage = this.activatedRoute.snapshot.data['message'] || 'An error occurred';
  }
}
