import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$:BehaviorSubject<User[]>| Observable<User[]> = this.userService.userList$;

  constructor(
    private userService: UserService,
    private router:Router,
  ) { }

  ngOnInit(): void {
this.userService.getAll()
  }

 onRemove(user:User):void {
    this.userService.remove(user),
    this.router.navigate(['user'])
    
  }


}
