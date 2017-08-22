import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Candidate } from './candidate';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CandidateService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private candidateUrl = 'candidates/';  // URL to web api

    results: Candidate[];

    constructor(private http: Http) { }

    getCandidates(): Promise<Candidate[]> {
        return this.http.get(this.candidateUrl)
            .toPromise()
            .then(res => res.json() as Candidate[])
            .catch(this.handleError);
    };

    getCandidate(id: number): Promise<Candidate> {
        const url = `${this.candidateUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(res => res.json() as Candidate[])
            .catch(this.handleError);
    };

    addCandidate(name: string): Promise<Candidate> {
        console.log(name);
        const url = `${this.candidateUrl}/${name}`;
        return this.http.post(this.candidateUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Candidate)
            .catch(this.handleError);
    };
    updateCandidate(candidate: Candidate): Promise<Candidate> {
        const url = `${this.candidateUrl}/${candidate.id}`;
        return this.http.put(url, JSON.stringify(candidate), { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Candidate)
            .catch(this.handleError);
    };

    deleteCandidate(id: number): Promise<Candidate> {
        const url = `${this.candidateUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(res => res.json() as Candidate)
            .catch(this.handleError);
    };
        
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}