import { IUser } from './../iuser';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  message: string;
  p: number = 1;

  addName= "";
  addEmail= "";
  addAddress= "";

  id = "";
  editName= "";
  editEmail= "";
  editAddress= "";

  usersFilter: IUser[] = [];
  users: IUser[] = [
    {
      name: 'Duong Manh Cuong',
      email: 'cuong@gmail.com',
      address: 'Dong Anh'
    },
    {
      name: 'Nguyen Van Luc',
      email: 'cuong@gmail.com',
      address: 'Dong Anh'
    },
    {
      name: 'Bui Xuan Duong',
      email: 'cuong@gmail.com',
      address: 'Dong Anh'
    },
    {
      name: 'Bui Manh Quang',
      email: 'cuong@gmail.com',
      address: 'Dong Anh'
    },
    {
      name: 'Le Duc Manh',
      email: 'cuong@gmail.com',
      address: 'Dong Anh'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.usersFilter = this.users;
  }

  // search(event) {
  //   // console.log(event.target.value);
  //   // let keyword = event.target.value.toLowerCase();
  //   this.usersFilter = (event) ? this.filterUser(event) : this.users;
  // }
  search(event) {

    console.log(event + 'tung');
    this.usersFilter = (event) ? this.filterUser(event) : this.users;
  }

  filterUser(keyword) {
    return this.users.filter(user => {
      return user.name.toLowerCase().indexOf(keyword) != -1;
    })
  }

  remove(id) {
    if(confirm("Ban co chac chan muon xoa?")) {
      this.users.splice(id,1);
      this.message = "Xoa thanh cong";
    }

  }

  addMoreUser() {
    // console.log(this.addName);
    this.users.unshift({
      name: this.addName,
      email: this.addEmail,
      address: this.addAddress
    });

    this.addName = '';
    this.addEmail = '';
    this.addAddress = '';
  }

  showFormEdit(id) {
    this.id = id;
    this.editName = this.users[id].name;
    this.editEmail = this.users[id].email;
    this.editAddress = this.users[id].address;
  }

  updateUser(id) {
    this.users[id].name = this.editName;
    this.users[id].email = this.editEmail;
    this.users[id].address = this.editAddress;
  }

}
