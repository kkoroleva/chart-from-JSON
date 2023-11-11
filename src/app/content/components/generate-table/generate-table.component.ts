import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonHandlerService } from '../../services/json-handler.service';
import { IUser } from '../../interfaces/data.interface';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-generate-table',
  templateUrl: './generate-table.component.html',
  styleUrls: ['./generate-table.component.scss'],
})
export class GenerateTableComponent {
  public dataSource: Observable<IUser[]>;

  public displayedColumns: string[] = [
    'about',
    'address',
    'balance',
    'company',
    'email',
  ];

  constructor(private JSONHandler: JsonHandlerService) {
    this.dataSource = this.JSONHandler.userData$;
  }
}
