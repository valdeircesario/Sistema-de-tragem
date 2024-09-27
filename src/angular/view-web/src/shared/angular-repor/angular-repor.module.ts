import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {ChipsModule} from "primeng/chips";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {PaginatorModule} from "primeng/paginator";
import {ConfirmDialogModule} from "primeng/confirmdialog";

//BLIBIOTECA PRIMENG

@NgModule({
  exports: [
    ButtonModule,
    DividerModule,
    ChipsModule,
    CardModule,
    ToastModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    TagModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    PaginatorModule,
    ConfirmDialogModule,
  ],
})
export class AngularReporModule { }
