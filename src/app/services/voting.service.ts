import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VotingService {

    constructor(private http: HttpClient) {}

    getPublicWorkVotes(idPublicWork: number): Observable<any[]> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
    }

    getGovernorVotes(idGovernor: number): Observable<any[]> {
        return this.http.get<any[]>('');
    }

    updatePublicWorkUserVote(idItem: number, idUser: number, vote: number): Observable<any> {
        return this.http.post('url', JSON.stringify({}));
    }

    updateGovernorUserVote(idGovernor: number, idUser: number, vote: number): Observable<any> {
        return this.http.post('url', JSON.stringify({}));
    }

}
