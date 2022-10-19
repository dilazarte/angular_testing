import { Component, OnInit } from '@angular/core';
import { NosotrosService } from 'src/app/services/nosotros.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  users:any;
  constructor(private nosotrosServicio:NosotrosService) { }
  
  ngOnInit(): void {
    this.nosotrosServicio.getData().subscribe( res => {
     console.log(res)
     this.users=res;
    })
    
  }

}
