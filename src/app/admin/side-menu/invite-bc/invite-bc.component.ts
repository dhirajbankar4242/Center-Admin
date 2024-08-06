import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputConfiguration, InputType } from '../../dto/dtos';
import { CommonMasterComponent } from '../../../common-master/common-master.component';
import { DataTableComponent } from "../../../common-master/data-table/data-table.component";

@Component({
  selector: 'app-invite-bc',
  standalone: true,
  imports: [CommonMasterComponent, DataTableComponent],
  templateUrl: './invite-bc.component.html',
  styleUrl: './invite-bc.component.css'
})
export class InviteBcComponent {

  @ViewChild(CommonMasterComponent) commonMasterComponent!: CommonMasterComponent;
 // @ViewChild('dataTableComponent', { static: false }) dataTableComponent !: DataTableComponent;
 
  displayedColumns: string[] = ['email'];
  inputConfigurationsData: InputConfiguration[] = [
    {
      controlType: InputType.TEXT,
      key: 'email',
      label: 'Email',
      order: 1,
      validators: [Validators.required],
    },
  ];

  // onAddNew() {
  //   this.commonMasterComponent.createNewRecord();
  // }

}
