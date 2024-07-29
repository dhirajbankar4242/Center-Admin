import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../service/http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit, OnDestroy {
  @Input() url: string = '';
  @Input() displayedColumns: string[] = [];
  @Output() editRecord = new EventEmitter<any>();
  data: any[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const subscription = this.httpService.get(this.url).subscribe((response: any) => {
      console.log("response"+response)
      this.data = response;
    });
    this.subscriptions.push(subscription);
  }

  // onEdit(data: any) {
  //   this.editRecord.emit(data);
  // }

  // onDelete(data: any) {
  //   const subscription = this.httpService.delete(`${this.url}/${data.id}`).subscribe(() => {
  //     this.loadData();
  //   });
  //   this.subscriptions.push(subscription);
  // }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
