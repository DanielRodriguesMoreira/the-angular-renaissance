import { Observable } from 'rxjs';
import { HttpEvent } from '@angular/common/http';

export class HttpInterceptor implements HttpInterceptor {
  intercept(): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
}
