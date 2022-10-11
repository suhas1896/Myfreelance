import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable()
export class APIHttpService {
    constructor(private http: HttpClient) { }
    //API service - Get method
    callAPI(opt: any): Observable<any> {
        //let token = "Bearer " + this.authService.getToken();
        //let headers = new HttpHeaders()
       // headers.set('Access-Control-Allow-Origin', '*')
        const options = {
            // headers: new HttpHeaders({
            //     //'Authorization': token,
            //     //'Access-Control-Allow-Origin': '*'
            // })
        }
        if (opt.rest_method == "GET") {
            return this.http.get<any>(opt.url, options)

                .pipe(
                    map(
                        resp => {
                            return resp
                        }
                    ),
                    catchError(this.httpError)
                )
        }

        else if (opt.rest_method == "PUT") {
            return this.http.put<any>(opt.url, opt.payload)
                .pipe(
                    map(
                        resp => {
                            return resp
                        }
                    ),
                    catchError(this.httpError)
                )
        }
        else if (opt.rest_method == "DELETE") {
            return this.http.delete<any>(opt.url, options)
                .pipe(
                    map(
                        resp => {
                            return resp
                        }
                    ),
                    catchError(this.httpError)
                )
        }
        else {
            return this.http.post<any>(opt.url, opt.payload)
                .pipe(
                    map(
                        resp => {
                            return resp
                        }
                    ),
                    catchError(this.httpError)
                )
        }

    }
    httpError(error: any) {
        let errormessage:any
        if (error.error instanceof ErrorEvent) {
            // client side error
            errormessage = error.error.message;
        } else {
            console.log(`Error Code: ${error.status}\nMessage: ${error.message}`) ;
            errormessage = "Problem in server connection"
        }
        return throwError(errormessage);
    }


}
