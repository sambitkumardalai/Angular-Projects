import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges {
  serverElements: any = [];
  @Input('srvElement') element!: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name:string='';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngonchanges called',changes);
    
  }
  ngOnInit(): void {}
}
