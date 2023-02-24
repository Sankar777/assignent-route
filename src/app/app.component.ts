import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: any = [];
  constructor(private route: Router) {
    this.data = [
      {
        id: 1,
        name: 'sankar',
      },
      {
        id: 2,
        name: 'sahu',
      },
    ];
  }

  ngOnInit() {
    debugger
    this.route.navigate(['/hello'], { queryParams: {data:JSON.stringify(this.data)} });
  }
}
