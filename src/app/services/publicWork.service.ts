import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PublicWork } from '../models/publicWork';

@Injectable()
export class PublicWorkService {

    apiUrl = '/api/publicWork';

    constructor(
        private http: HttpClient
    ) { }

    getPublicWorks(): Observable<PublicWork[]> {
        return this.http.get<PublicWork[]>(this.apiUrl);
    }

    getPublicWork(idPublicWork: number): Observable<PublicWork> {
        const url = `${this.apiUrl}/${idPublicWork}`;
        return this.http.get<PublicWork>(url);
    }

    createPublicWork(publicWork: PublicWork): Observable<PublicWork> {
        return this.http
          .post<PublicWork>(this.apiUrl, JSON.stringify(publicWork));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
