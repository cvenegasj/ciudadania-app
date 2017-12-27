import { Governor } from './governor';
import { Institution } from './institution';

export class Complaint {
    idComplaint: number;
    description: string;
    ocurrenceDate: string;
    photo: string;
    creationDateTime: string;
    dni: number;
    governor: Governor;
    institution: Institution;

    constructor() {}
}
