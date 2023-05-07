import { Component, OnInit } from '@angular/core';
import { GithubauthsService } from '../../githubauths.service';
@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectRepositories: boolean = false;
  selectBranches: boolean = false;
  githubData: any =[];
  accounts: any =[];
  repositories: any =[]
  owner: any =[];
  branchs: any =[];
  branch:any

  /**Filter variables*/ 
  filterAccounts:string = '';
  filterRepo:string = '';
  filterData:any = [];
  filterDataRepo:any = [];
  iconClicked = false;

  constructor(private githubservice: GithubauthsService) {
    this.onloadData();
   }

  ngOnInit() {}

/** Get GitHub Accounts*/
  onloadData(){
    this.githubservice.getGithubAccounts().subscribe((res:any[]) =>{
      this.githubData = res;
      const owners = res.map((repo) => ({ owner: repo.owner.login, imageurl: repo.owner.avatar_url }));
      this.accounts = owners.filter((obj, index, self) => index === self.findIndex((t) => (t.owner === obj.owner)));
      this.filterData = this.accounts;
    });
  }

  /**Filter in GitHub Accounts and Repositories*/ 
  onSearchGitAccounts() {
    this.filterAccounts = this.filterAccounts.trim();
    this.accounts = this.filterData.filter((item: any) => item.owner.toLowerCase().includes(this.filterAccounts.toLowerCase())); 
  }
 
  onSearchGitRepo() {
    this.filterRepo = this.filterRepo.trim();
    this.repositories = this.filterDataRepo.filter((item:any) => item.repository.toLowerCase().includes(this.filterRepo.toLowerCase())); 
  }

  /** Filter repository*/
  getRepositories(event: any) {
    this.branch = event;
    const filteredPeople = this.githubData.filter((person: { owner: { login: any; }; }) => { return person.owner.login === event.owner });
    const repository = filteredPeople.map((repo: { name: any; owner: { avatar_url: any; login: any; }; }) => ({ repository: repo.name, imageurl: repo.owner.avatar_url, owner: repo.owner.login }));
    this.owner = repository.slice(0, 1)
    this.repositories = repository;
    this.filterDataRepo = this.repositories
    this.selectRepositories = true;
  }

  /** get branches*/ 
  getbranches(event:any) {
    this.githubservice.getGithubBranches(event.owner,event.repository).subscribe((res:any[])=>{
      const branche = res.map((repo) => ({ branch_name: repo.name, repository: event.repository, }));
      this.branchs = branche
      this.selectBranches = true;
    });
  }

  /** Reset for Accounts and Repositories */ 
  onRefreshAcc(){
    this.filterAccounts = '';
    this.filterData = [];
    this.onloadData();
  }

  onRefreshRepo(){
    this.filterRepo = '';
    this.filterDataRepo = [];
    this.getRepositories(this.branch);
  }
}
