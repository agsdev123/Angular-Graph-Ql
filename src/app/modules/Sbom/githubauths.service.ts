import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubauthsService {
  TOKEN = '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';
  URL = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  /** Get GitHub Accounts Api*/
  getGithubAccounts(): Observable<any> {
    return this.http.get(this.URL +'/user/repos', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `token ${this.TOKEN}`,
      }),
    });
  }

  /** Get GitHub branches Api*/
  getGithubBranches(owner: any, repository: any): Observable<any> {
    return this.http.get(this.URL +`/repos/${owner}/${repository}/branches`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `token ${this.TOKEN}`,
      }),
    });
  }
}
