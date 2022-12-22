import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Table } from '../models/table';
import { TABLES, TargetTable } from '../models/tables-list';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private static serviceUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public getTables(): Observable<Table[]> {
    const tables = of(TABLES);
    this.messageService.add('TableService: fetched tables');
    return tables;
  }

  public getTable(id: number): Observable<Table> {
    const table = TABLES.find(t => t.id === id)!;
    this.messageService.add(`TableService: fetched table id=${id}`);
    return of(table);
  }

  public static getServiceUrl(): string{
    return TableService.serviceUrl;
  }

  public getRows(): Observable<TargetTable[]> {
    return this.http
      .get(TableService.serviceUrl)
      .pipe<TargetTable[]>(map((data: any) => data.rows));
  }

  public updateRow(row: TargetTable, pathPart: string): Observable<TargetTable> {
    return this.http.patch<TargetTable>(`${TableService.serviceUrl}${pathPart}${row.id}`, row);
  }

  public addRow(row: TargetTable, pathPart: string): Observable<TargetTable> {
    return this.http.post<TargetTable>(`${TableService.serviceUrl}${pathPart}`, row);
  }

  public deleteRow(id: number, pathPart: string): Observable<TargetTable> {
    return this.http.delete<TargetTable>(`${TableService.serviceUrl}${pathPart}${id}`);
  }

  public editRows(rows: TargetTable[], pathPart: string): Observable<TargetTable[]> {
    return forkJoin(
      rows.map((row) =>
        this.http.patch<TargetTable>(`${TableService.serviceUrl}${pathPart}${row.id}`, row)
      )
    );
  }

  public deleteRows(rows: TargetTable[], pathPart: string): Observable<TargetTable[]> {
    return forkJoin(
      rows.map((row) =>
        this.http.delete<TargetTable>(`${TableService.serviceUrl}${pathPart}${row.id}`)
      )
    );
  }
}