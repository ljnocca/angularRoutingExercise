import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { } // ActivatedRoute object injected in constructor will give us access to the id passed in the URL

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // params is an observable. a feature that allows you to work with async tasks

    this.route.params
      .subscribe(
        (params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      );
  }


}
