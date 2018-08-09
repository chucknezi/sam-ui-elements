import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SamUploadComponentV2 } from './upload-v2.component';
import { SamProgressModule } from '../progress-bar';
import { SamDragDropModule } from '../../directives';
import { SamFilesizeModule } from '../../pipes';

@NgModule({
    declarations: [ SamUploadComponentV2 ],
    exports: [ SamUploadComponentV2 ],
    imports: [
        CommonModule,
        FormsModule,
        SamDragDropModule,
        SamProgressModule,
        SamFilesizeModule
    ]
})
export class SamUploadV2Module { }

export * from './upload-v2.component';