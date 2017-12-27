import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VotingService {

    constructor(private http: HttpClient) {}

    getItemVotes(idItem: number): Observable<any[]> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
    }

    updateUserVote(idItem: number, idUser: number, vote: number): Observable<any> {
        return this.http.post('url', JSON.stringify({}));
    }


}
