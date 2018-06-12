import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  @Input() dataSource: Person[];
  @Output() ass = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  @Input() names: any = {}

  //定义一个输出的
  @Output() foo = new EventEmitter<string>()

  todo(event: any) {
    this.foo.emit('你好');
  }

  clickMe(data){
    console.log(data, 1)
    this.ass.emit(data)
  }

}
