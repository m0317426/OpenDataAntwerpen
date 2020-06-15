import { Component, OnInit } from '@angular/core';
import { MonumentenService } from '../Service/monumenten.service';

@Component({
  selector: 'app-monumenten',
  templateUrl: './monumenten.component.html',
  styleUrls: ['./monumenten.component.css']
})
export class MonumentenComponent implements OnInit {

  public monumenten = [];

  constructor(private _monumentenService: MonumentenService) { }

  ngOnInit() {
    this._monumentenService.getMonumenten().subscribe(data=>this.monumenten=data.features);
    this._monumentenService.getMonumenten().subscribe((data)=>{console.log(data.features);});
  }

}
