import {Component} from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl : './server.component.html' 
})

export class ServerComponent{
    serverId = 7;
    serverStatus = "online";
    allowserverstatus = false;
    username = 'meet';

    // constructor()
    // {
    // setTimeout(() => {
    //     this.allowserverstatus = true;
       
    // }, 2000);
    // }

    clickevent(){
        console.log("function call");
        //var meets =  this.serverId = 7? '19': '563485';
        this.serverStatus = "online" ? this.serverStatus = "offline" : this.serverStatus = "online"
        //console.log(this.serverStatus);
        
    }

    changename(event: any){
       this.username = event.target.value;
        
    }
}
