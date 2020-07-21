import { HttpInterceptor, HttpRequest, HttpParams, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';


export class LoginInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = localStorage.getItem('token');
        if(myToken) {
            let param = new HttpParams();

            let k = req.params.keys();
            console.log(k);
            




            for(let i in k) {
                param = param.set(k[i], req.params.get(k[i]));
            }
            //

            param = param.set('access_token', myToken);

            let cloneReq = req.clone({
                params : param
            });

            k = cloneReq.params.keys();
            console.log(k);

            return next.handle(cloneReq);

        }
        else {
            return next.handle(req);
        }   
    } 
}

export const loginInterceptorProvider = {
    provide : HTTP_INTERCEPTORS,
    useClass : LoginInterceptor,
    multi : true 
}