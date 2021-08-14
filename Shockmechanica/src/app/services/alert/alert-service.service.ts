import {Injectable} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
  })
export class AlertService {
  constructor(private toastr:ToastrService) {
  }

  success(message: string, duration = 3500) {
    this.toastr.success(message, '',);
  }

  error(message: string, duration = 3500) {
    this.toastr.error(message, '',);

  }

}