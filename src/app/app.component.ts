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
  @Input() title = 'Ololo';
  
  selectedCandidate: Candidate;
  candidates: Candidate[];

  constructor(private candidateService: CandidateService) { }

  getVotes(): void {    
    this.candidateService.getCandidates()
    .then(response => this.candidates = response);
  }

  

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.candidateService.addCandidate(name)
      .then(candidate => {
        this.candidates.push(candidate);
        this.selectedCandidate = null;
      });
  }

  delete(candidate: Candidate): void {
    this.candidateService
        .deleteCandidate(candidate.id)
        .then(() => {
          this.candidates = this.candidates.filter(h => h !== candidate);
          if (this.selectedCandidate === candidate) { this.selectedCandidate = null; }
        });
  }


  ngOnInit(): void {
    this.getVotes();
  }
}
