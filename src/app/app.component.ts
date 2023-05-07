import { Component } from '@angular/core';
import { GraphqlService } from './core/services/graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data: any[] | any;
  selectedData: any;

  constructor(private graphqlService: GraphqlService) {}

  ngOnInit() {
    this.graphqlService.getAllData().subscribe(result => {
      console.log("result",result)
      this.data = result.users.data
;
    });
  }

  onSelect(data: any) {
    this.selectedData = data;
  }

  createData(name: string, email: string,username:string) {
    this.graphqlService.createUser({ name, email,username }).subscribe(result => {
      console.log("createUser",result)
      this.data.push({result});
    });
  }

  updateData(id: number, name: string, description: string) {
    this.graphqlService.updateData(id, name, description).subscribe(result => {
      const index = this.data.findIndex((data: { id: any; }) => data.id === result.data.updateData.id);
      this.data[index] = result.data.updateData;
    });
  }

  deleteData(id: number) {
    this.graphqlService.deleteData(id).subscribe(result => {
      const index = this.data.findIndex((data: { id: any; }) => data.id === result.data.deleteData.id);
      this.data.splice(index, 1);
    });
  }
}
