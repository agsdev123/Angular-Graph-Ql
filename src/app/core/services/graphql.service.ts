import { Injectable } from "@angular/core";
import { Apollo, gql, TypedDocumentNode } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MutationOptions } from "@apollo/client/core";
  interface User {
  id: string;
  name: string;
  email: string;
}
export interface CreateUserInput {
  name: string;
 username: string;
  email: string;
  // address?: AddressInput;
  phone?: string;
  website?: string;
  // company?: CompanyInput;
}

@Injectable({
  providedIn: "root",
})


export class GraphqlService {

  constructor(private apollo: Apollo) {}

  getAllData(): Observable<any> {
    const query = gql`
      query ($options: PageQueryOptions) {
        users(options: $options) {
          data {
            id
            name
            email
          }
          meta {
            totalCount
          }
        }
      }
    `;

    return this.apollo.query({ query }).pipe(map((result) => result.data));
  }

  createUser(input: CreateUserInput): Observable<any> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation CreateUser($input: CreateUserInput!) {
            createUser(input: $input) {
              id
              name
              email
            }
          }
        `,
        variables: {
          input
        }
      })
      .pipe(map((result: any) => result.data.createUser));
  }


  updateData(id: number, name: string, description: string): Observable<any> {
    const mutation: TypedDocumentNode<any, any> = gql`
      mutation {
        updateData(id: ${id}, name: "${name}", description: "${description}") {
          id
          name
          description
        }
      }
    `;

    const options: MutationOptions<any, any> = {
      mutation,
    };

    return this.apollo.mutate<any, any>(options);
  }

  deleteData(id: number): Observable<any> {
    const mutation: TypedDocumentNode<any, any> = gql`
      mutation {
        deleteData(id: ${id}) {
          id
        }
      }
    `;

    const options: MutationOptions<any, any> = {
      mutation,
    };

    return this.apollo.mutate<any, any>(options);
  }
}