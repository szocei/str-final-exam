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


columnKey:string='';

onColumnSelect(key:string):void{
  this.columnKey=key;
}
phrase:string='';

onChangePhrase(event:any): void{
    this.phrase = (event.target as HTMLInputElement).value;
      
  }

  selectDel: User = new User();
onRemove(user: User): void {
    this.selectDel = user;
  }

  deleteItem(): void {
    const deletedId: number = this.selectDel.id;
    this.userService.remove(this.selectDel);
     this.userService.getAll();
     this.router.navigate(['user'])
        
  }

}
