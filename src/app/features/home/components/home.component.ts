import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-home',
  templateUrl: '../templates/template1/views/home.component.html',
  styleUrls: ['../templates/template1/less/home.component.less']

})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log("Method not implemented.");
  }

}