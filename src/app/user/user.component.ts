import { Component, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-component',
  template: `
      <h1>User Component</h1>
      <a [routerLink]="['/']" [queryParams]="{analytics:500}">Home</a>
      <a [routerLink]="['/user']">User</a>
      <button (click)="onNavigate()">Go Home</button>
      <hr>
      {{id}}      
    `
})
export class UserComponent implements OnDestroy {
  private subscription:Subscription;
  private id:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute){
    this.subscription = this.activatedRoute.params.subscribe(
      (parameter:any)=>this.id=parameter['id']
    );
  };

  onNavigate(){
    this.router.navigate(['/'],{queryParams:{'analytics':100}});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
