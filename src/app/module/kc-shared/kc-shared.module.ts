import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMaskModule } from 'primeng/inputmask';
import { FileUploadModule } from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputMaskModule,
    FileUploadModule,
    DropdownModule,
  ],
  exports: [
    InputMaskModule,
    FileUploadModule,
    DropdownModule,
  ]
})
export class KcSharedModule { }
