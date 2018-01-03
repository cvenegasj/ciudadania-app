export class PublicWork {
    idPublicWork: number;
    name: string;
    description: string;
    positiveScore: number;
    negativeScore: number;
    latitude?: number;
    longitude?: number;
    photo?: string;
    creationDateTime?: string;

    constructor() {
        this.description = '';
    }
}
