import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Complaint } from '../models/complaint';

@Injectable()
export class ComplaintService {

    apiUrl = '/api/complaints';

    constructor(
        private http: HttpClient
    ) { }

    getComplaints(): Observable<Complaint[]> {
        return this.http.get<Complaint[]>(this.apiUrl);
    }

    getComplaint(idComplaint: number): Observable<Complaint> {
        const url = `${this.apiUrl}/${idComplaint}`;
        return this.http.get<Complaint>(url);
    }

    createComplaint(complaint: Complaint): Observable<Complaint> {
        return this.http
          .post<Complaint>(this.apiUrl, JSON.stringify(complaint));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
