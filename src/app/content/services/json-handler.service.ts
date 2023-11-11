import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces/data.interface';

@Injectable()
export class JsonHandlerService {
  private userDataState = new BehaviorSubject<IUser[]>([]);

  public userData$ = this.userDataState.asObservable();

  constructor() {}

  public async getUserDataFFile(file: FileList): Promise<void> {
    let data: IUser[] = await this.onLoad(file) || [];
    this.userDataState.next(data);  
    console.log(this.userDataState.value);
  }

  private onLoad(file: FileList): Promise<IUser[]> {
    return new Promise(resolve=>{
      let reader = new FileReader()
      
      reader.onload = function(event) {
          let data: IUser[] = JSON.parse(event?.target?.result as string)
          resolve(data);
      }
      reader.readAsText(file[0])
  })
  }
}
