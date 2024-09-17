import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, filter, map, throwError} from "rxjs";
import { CryptService } from "../service/cryptografia/crypt.service";

@Injectable({
  providedIn: 'root'
})
export class CryptHttpInterceptor implements HttpInterceptor {

  pw: string = 'ABSistersNimet!!'

  constructor(
    private servicoCrypt: CryptService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let httpHeaders: HttpHeaders = new HttpHeaders();

    req = req.clone({
      headers: httpHeaders.set('Content-type', 'application/json'),
      withCredentials: true
    });

    if (req.body) {
      req = req.clone(
        {
          body: this.servicoCrypt.criptografasr(JSON.stringify(req.body), this.pw)
        }
      );
    }

    console.log(req.body);
    return next
      .handle(req)
      .pipe(
        filter((event: HttpEvent<any>) => event instanceof HttpResponse),
        map((response: HttpResponse<any>) => {
          if (response.body && response.headers.get('Content-type') &&
            response.headers.get('Content-type')?.includes('application/json')) {
            const desc = this.servicoCrypt.descriptografar(response.body, this.pw);
            return response.clone({ body: desc });
          }
          return response;
        }),
        catchError(
          (error:HttpErrorResponse) =>{
            if(error.error){
              return throwError({
                error: this.servicoCrypt.descriptografar(error.error,this.pw),
                headers: error.headers,
                status: error.status,
                statusText: error.statusText,
                url: error.url || undefined
              });
            }
            return throwError(error);
          }
        )
      );
  }
}
