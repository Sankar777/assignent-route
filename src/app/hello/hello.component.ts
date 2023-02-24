import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  routeData: any = [];

  constructor(private route: ActivatedRoute) {
    
  }
  
  ngOnInit(): void {
    debugger
    const data: any  = this.route.snapshot.queryParamMap.get('data');
    this.routeData = JSON.parse(data);
  }

}
