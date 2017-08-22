import { Component, Input } from '@angular/core';

import { CandidateService } from './candidate.service';
import { Candidate } from './candidate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers: [CandidateService]
})

export class AppComponent {
    
  selectedCandidate: Candidate;
  candidates: Candidate[];
  @Input() id: number;
  @Input() name: string;

  constructor(private candidateService: CandidateService) { }

  getCandidates(): void {    
    this.candidateService.getCandidates()
    .then(response => this.candidates = response);
  }

  addCandidate(name: string): void {
    if (!name) { return; }
    this.candidateService.addCandidate(name)
      .then(candidate => {
        this.candidates.push(candidate);
        this.selectedCandidate = null;
      });
  }

  deleteCandidate(candidate: Candidate): void {
    this.candidateService
        .deleteCandidate(candidate.id)
        .then(() => {
          this.candidates = this.candidates.filter(h => h !== candidate);
          if (this.selectedCandidate === candidate) { this.selectedCandidate = null; }
        });
  }


  ngOnInit(): void {
    this.getCandidates();
  }
}
