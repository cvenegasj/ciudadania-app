import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

@Injectable()
export class UserService {

    apiUrl = '/api/user';

    constructor(
        private http: HttpClient
    ) { }

    getUser(idComplaint: number): Observable<User> {
        const url = `${this.apiUrl}/${idComplaint}`;
        return this.http.get<User>(url);
    }

    createUser(complaint: User): Observable<User> {
        return this.http
          .post<User>(this.apiUrl, JSON.stringify(complaint));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
