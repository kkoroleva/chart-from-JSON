import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { JsonHandlerService } from '../../services/json-handler.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent {
  public formControl = new FormControl('', invalidExtension);
  public file_list: Array<string> = [];

  constructor(private JSONHandler: JsonHandlerService) {}

  public handleFileInputChange(files: FileList | null) {
    if (files) {
      this.formControl.patchValue(files[0]?.name);
      this.formControl.updateValueAndValidity();
    }
  }

  public uploadFile(files: FileList | null) {
    if (files) this.JSONHandler.getUserDataFFile(files);
  }
}

function invalidExtension(): ValidatorFn {
  console.log('meow');
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden =
      control.value.split('.').splice(-1, 1)[0].toLowerCase() !== 'json';
    console.log(forbidden,  control.value.split('.').splice(-1, 1)[0].toLowerCase() !== 'json')
    return forbidden ? { invalidExtension: { value: control.value } } : null;
  };
}

