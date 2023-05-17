import { style } from '@angular/animations';
import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl : './server.component.html' ,
    styles : [`
    .online{
        color: white;
    }
    `]
})

export class ServerComponent{
    serverId = 7;
    serverStatus = "offline";
    allowserverstatus = false;
    username = 'meet';
    serverName = "servername";
    serverCreated = false;
    servers = ['servernames', 'servername 2'];

    // constructor()
    // {
    // setTimeout(() => {
    //     this.allowserverstatus = true;
       
    // }, 2000);
    // }
    constructor(){
       this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; 
    }

    clickevent(){
        console.log("function call");
        this.serverCreated = true;
        this.servers.push(this.serverName);
        //var meets =  this.serverId = 7? '19': '563485';
        //this.serverStatus = "online" ? this.serverStatus = "offline" : this.serverStatus = "online"
        //console.log(this.serverStatus);
        
    }

    changename(event: any){
       this.username = event.target.value;
        
    }
    getColor(){
        return this.serverStatus === "online" ? "green" : "red";
    }
}
