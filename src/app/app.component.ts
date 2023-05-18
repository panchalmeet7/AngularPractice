import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  showPass = false;
  log :any[] = [];
 // servers = ['servername', 'servername 2']


 toggleSwitch(){
  this.showPass = !this.showPass;
  this.log.push(new Date() );
}

setColor(){
  return this.log.length>5 ? 'blue' : '';
}
}
