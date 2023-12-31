import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  onLoadServer(id:number){
    this.route.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'})

  }

}
