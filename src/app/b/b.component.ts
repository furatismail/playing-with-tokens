import { Component, OnInit } from '@angular/core';
import { PService } from '../p.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private p: PService) { 
    this.p.c();
  }

  ngOnInit(): void {
  }

}
