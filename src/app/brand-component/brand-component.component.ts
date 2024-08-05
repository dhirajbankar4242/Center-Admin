import { Component, ViewChild } from '@angular/core';
import { InputConfiguration, InputType } from '../admin/dto/dtos';
import { CommonModule } from '@angular/common';
import { CommonMasterComponent } from '../common-master/common-master.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-brand-component',
  standalone: true,
  imports: [CommonModule, CommonMasterComponent],
  templateUrl: './brand-component.component.html',
  styleUrl: './brand-component.component.css'
})
export class BrandComponentComponent {

  @ViewChild(CommonMasterComponent) commonMasterComponent!: CommonMasterComponent;

  displayedColumns: string[] = ['email', 'address1', 'address2', 'city', 'state', 'zip'];

  inputConfigurationsData: InputConfiguration[] = [
    // {
    //   controlType: InputType.HIDDEN,
    //   key: 'id',
    //   label: 'id',
    //   order: 0,
    // },
    {
      controlType: InputType.TEXT,
      key: 'email',
      label: 'Email',
      order: 1,
      validators: [Validators.required],
    },
    {
      controlType: InputType.TEXT,
      key: 'password',
      label: 'Password',
      order: 2,
      validators: [Validators.required],
    },
    {
      controlType: InputType.TEXT,
      key: 'address1',
      label: 'address1',
      order: 3,
      validators: [Validators.required],
    },
    {
      controlType: InputType.TEXT,
      key: 'address2',
      label: 'address2',
      order: 3,
      validators: [Validators.required],
    },
    {
      controlType: InputType.TEXT,
      key: 'city',
      label: 'City',
      order: 4,
      validators: [Validators.required],
    },
    {
      controlType: InputType.SELECT,
      key: 'state',
      label: 'State',
      order: 5,
      options: [
        { value: 'Maharashtra', display: 'Maharashtra' },
        { value: 'Gujrat', display: 'Gujrat' },
        { value: 'Karnatak', display: 'Karnatak' },
      ],
      validators: [Validators.required],
    },
    {
      controlType: InputType.TEXT,
      key: 'zip',
      label: 'Zip',
      order: 6,
      validators: [Validators.required],
    },
    // {
    //   controlType: InputType.CHECK_BOX,
    //   key: 'check_me_out',
    //   label: 'check me out',
    //   order: 7,
    //   validators: [Validators.required],
    // },
  ];

  // onAddNew() {
  //   this.commonMasterComponent.createNewRecord();
  // }

}
