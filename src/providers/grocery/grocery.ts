import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

/*
  Generated class for the GroveryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceryServiceProvider {

  Items: any [];
  datachanged$: Observable<boolean>;
  private datachangedsubject: Subject<boolean>;
  baseURL = 'http//localhost:27017';

  constructor(public http: HttpClient){
    this.datachangedsubject =new Subject<boolean>();
    this.datachanged$ = this.datachangedsubject.asObservable();

  }
  
  // Items = [
  //   {
  //     name: "bread",
  //     quantity: 1
      

  //   },
  //   {
  //     name: "Milk",
  //     quantity: 3
      

  //   },
  //   {
  //     name: "Cookies",
  //     quantity: 2
      

  //   },
  //   {
  //     name: "Eggs",
  //     quantity: 18
      

  //   },
  //   {
  //     name: "Blueberry",
  //     quantity: 5
      

  //   }

    

  // ]

  GetItem(){

    return this.http.get(this.baseURL+'/api/groceries')
     
    
  }

  private extractdata(res:Response){

    let body =res;
    return body ||{};

  }

  private handleerror(error:Response|any){
    let errmsg: string;
    if(error instanceof Response){
      cost: err = error ||'';
    }
    else{
      errmsg =error.message ? error.message.tostring(): error.message =" ";
    }
    console.log(errmsg);
    return Observable.throw(errmsg);
  }
  // GetItem(){

  //   return this.Items;
  // }

  DeleteItem(id){

  return this.http.delete(this.baseURL+'/api/groceries' + id)
  .subscribe(res=>{this.Items = res;
  this.datachangedsubject.next(true)});

    
  }



  // DeleteItem(index){

  //   this.Items.splice(index, 1);
  // }

  AddItem(item){

    return this.http.post(this.baseURL+'/api/groceries',item)
    .subscribe(res=>{this.Items= res;
    this.datachangedsubject.next(true)});
  
      
    }

  // AddItem(item){
  //   this.Items.push(item);

  // }

  EditItem(item,index){

    return this.http.put(this.baseURL+'/api/groceries' ,item)
    .subscribe(res=>{this.Items= res;
    this.datachangedsubject.next(true)});
  
      
    }

  // EditItem(Item,index){

  //   this.Items[index] = Item;


  // }

}

