import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // fetch the route parameter
import { Router } from '@angular/router';   // routing navigations when you want to go from a page to another page
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  count:number;
  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.route.params.subscribe(res => console.log(res.id));
  }
  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.count = this.goals.length;
  }

  sendMeHome() {
    this.router.navigate(['']); //base on the route path
  }

}
