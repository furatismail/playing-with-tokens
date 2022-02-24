import { Component, OnInit } from '@angular/core';
import { PService } from '../p.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private p: PService) {
    this.p.c();
   }

  ngOnInit(): void {
  }

}
