import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
console.log(this.activeRoute.snapshot.queryParams)
console.log(this.activeRoute.snapshot.fragment)
    this.activeRoute.queryParams.subscribe()
    this.activeRoute.fragment.subscribe()

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
