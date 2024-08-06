import { Component, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../service/http.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputConfiguration, InputType } from '../admin/dto/dtos';
import { DataTableComponent } from './data-table/data-table.component';
import { CommonModule } from '@angular/common';
let $: any

@Component({
  selector: 'app-common-master',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, DataTableComponent],
  templateUrl: './common-master.component.html',
  styleUrl: './common-master.component.css'
})
export class CommonMasterComponent implements OnInit, OnDestroy, OnChanges {

  private subscriptions: Subscription[] = [];

  @Input() displayedColumns: string[] = [];
  @Input() url = '';
  @Input() inputConfigurations: InputConfiguration[] = [];
  @Input() title = '';
  // @Input() aiInput: any;
  @Input() btnTitle = 'Submit'
  // imgSrc?: any;
  // selectedFile: any;

  //Expose the InputType enum to the template
  public InputType = InputType;

  @ViewChild('dataTableComponent', { static: false }) dataTableComponent! : DataTableComponent;

  // createMode = true;
  // submitted = false;
  // selectedRecordData !: any;
  form !: FormGroup;
  selectedId: string | null = null;

  constructor(private fb: FormBuilder, private readonly httpService: HttpService) { }

  ngOnChanges() {
    // if (this.aiInput) {
    //   this.createNewRecord();
    //   this.form.controls['name'].setValue(this.aiInput);
    // }
  }

  ngOnInit(): void {
    this.generateForm(this.inputConfigurations);
  }

  generateForm(inputConfigurations: InputConfiguration[]) {
    const formGroup: any = {};
    inputConfigurations.forEach(input => {
      formGroup[input.key] = [input.defaultValue || '', input.validators || []];
    });
    this.form = this.fb.group(formGroup);
  }

  onSubmit() {
    // this.submitted = true;
    if (this.form.valid) {
      const val = this.form.value;
      // if (this.selectedFile) {
      //   val.file = this.selectedFile;
      // }
      const request = this.selectedId ? this.httpService.put(this.url, val) : this.httpService.post(this.url, val);
      this.subscriptions.push(
        request.subscribe(() => this.reload())
      );
    }
  }

  reload() {
    this.dataTableComponent.loadData();
    $('.offcanvas').offcavas('hide');
  }

  createNewRecord() {
    // this.setupForm(true);
  }

  // viewRecord(data: any) {
  //   this.subscriptions.push(
  //     this.httpService.get(`${this.url}/${data.id}`).subscribe((response: any) => {
  //       // this.setupForm(false, data.id);
  //       this.form.patchValue(response);
  //       this.selectedRecordData = data;
  //     })
  //   )
  // if (this.inputConfigurations.find((item: any) => item.controlType === InputType.IMAGE)) {
  //   this.httpService.getImage(this.url, data.id).subscribe((imageBlob: Blob) => {
  //     this.imgSrc = null;
  //     if (imageBlob && imageBlob.size > 0) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         this.imgSrc = reader.result || null;
  //       };
  //       reader.readAsDataURL(imageBlob);
  //     }
  //   });
  // }

  // if (this.inputConfigurations.find((item: any) => item.controlType === 'IMAGE')) {
  //   this.httpService.getImage(this.url, data.id).subscribe((imageBlob: Blob) => {
  //     this.imgSrc = null;
  //     if (imageBlob && imageBlob.size > 0) {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         this.imgSrc = reader.result || null;
  //       };
  //       reader.readAsDataURL(imageBlob);
  //     }
  //   });
  // }
  // }

  // private setupForm(createMode: boolean, selectedId?: any) {
  //   if (!selectedId && this.inputConfigurations) {
  //     const defaultData: any = {};
  //     this.inputConfigurations.forEach(input => {
  //       defaultData[input.key] = input.defaultValue || '';
  //     });
  //     this.form.reset(defaultData);
  //   } else {
  //     this.form.reset();
  //   }
  //   this.createMode = createMode;
  //   this.selectedId = selectedId;
  //   this.selectedRecordData = null;
  //   this.submitted = false;
  //   $('.offcanvas').offcanvas('show');
  // }

  // exportExcelData() {
  //   this.httpClient.downloadExcel(${this.url});
  // }

  ngOnDestroy(): void {
    // this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.selectedFile = reader.result;
  //   };
  //   reader.readAsDataURL(file);
  //   this.imgSrc = URL.createObjectURL(file);
  // }

  // Define trackByKey function for tracking inputConfigurations
  trackByKey(index: number, item: InputConfiguration): string {
    return item.key;
  }

  // Define trackByOptionKey function for tracking dropdown options
  trackByOptionKey(index: number, item: any): string {
    return item.key;
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');
    if (passwordControl && confirmPasswordControl &&
      passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    } else if (confirmPasswordControl) {
      confirmPasswordControl.setErrors(null);
    }
  }

}