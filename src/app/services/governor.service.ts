import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/toPromise';
import { Governor } from '../models/governor';
import { Institution } from '../models/institution';

@Injectable()
export class GovernorService {

    apiUrl = '/api/governor';

    muniTrujillo: Institution = { idInstitution: 1, name: 'Municipalidad Provincial de Trujillo', category: 'Municipalidad', photo: '' };
    muniLima: Institution = { idInstitution: 2, name: 'Municipalidad Provincial de Lima', category: 'Municipalidad', photo: '' };
    muniChiclayo: Institution = { idInstitution: 3, name: 'Municipalidad Provincial de Chiclayo', category: 'Municipalidad', photo: '' };

    GOVERNORS: Governor[] = [
        { idGovernor: 11, fullName: 'Elidio Espinoza Quispe', position: '', photo: '', institution: this.muniTrujillo },
        { idGovernor: 12, fullName: 'Oscar Luis Castañeda Lossio', position: '', photo: '', institution: this.muniLima },
        { idGovernor: 13, fullName: 'David Cornejo Chinguel', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 14, fullName: 'Diber Perez Rodriguez', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 15, fullName: 'Hugo Isaías Quispe Mamani', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 16, fullName: 'Humberto Marchena Villegas', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 17, fullName: 'Jose Ramon Montenegro Castillo', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 18, fullName: 'Isidro Solorzano Pinaya', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 19, fullName: 'Oswaldo Jimenez Salas', position: '', photo: '', institution: this.muniChiclayo },
        { idGovernor: 20, fullName: 'Francisco Huaman Febre', position: '', photo: '', institution: this.muniChiclayo }
      ];

    constructor(
        private http: HttpClient
    ) { }

    getGovernors(): Observable<Governor[]> {
        return of(this.GOVERNORS);
    }

    getGovernor(idGovernor: number): Observable<Governor> {
        return of(this.GOVERNORS.find(x => x.idGovernor === idGovernor));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
