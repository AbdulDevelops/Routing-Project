import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(private route:Router, private activeRoute: ActivatedRoute){}

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ]
    /*  onClickUser(){
      this.route.navigate(['/home'], {relativeTo: this.activeRoute})
    } */

    ngOnInit(): void {
    /*  this.users={
        id: this.activeRoute.snapshot.params['id']
        name: this.activeRoute.snapshot.params['id']

      } */
    }
}
