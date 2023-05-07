import { Injectable } from "@angular/core";
import { Apollo, gql, TypedDocumentNode } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MutationOptions } from "@apollo/client/core";
interface User {
  id: string;
  name: string;
  email: string;
   username: string;
}
interface UpdateUserInput {
  name?: string;
  email?: string;
     username?: string;
  // Add other fields for updating user data
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
    // Use the query method when you want to fetch data once and receive the result.
    // This is suitable for scenarios where the data is static or doesn't frequently change.

    // return this.apollo.query({ query }).pipe(map((result) => result.data));
    // ------------------------

    // Use the watchQuery method when you want to establish a subscription to the server and
    // receive real-time updates as the data changes. This is suitable for scenarios
    //  where you need real-time data synchronization, such as chat applications or collaborative editing.
    // return this.apollo.watchQuery({ query }).valueChanges.pipe(
    //     map((result) => result.data)
    //   );

    // Use the lazyQuery method when you want to defer the execution of a query until
    //  it's explicitly triggered. This is useful when you want to fetch data on-demand,
    //  such as when a user clicks a button or performs a specific action.

    // Lazy Query
    const lazyQuery = gql`
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

    return this.apollo
      .query<any>({
        query: lazyQuery,
      })
      .pipe(map((result) => result.data));
  }


  getUserById(id: number): Observable<User> {
    const GET_USER_BY_ID = gql`
      query GetUser($id: ID!) {
        user(id: $id) {
          id
          name
          username
          email
        }
      }
    `;

    const variables = { id };

    return this.apollo
      .watchQuery<{ user: User }>({
        query: GET_USER_BY_ID,
        variables,
      })
      .valueChanges.pipe(map((result) => result.data.user));
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
          input,
        },
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
 updateUser(id: any, input: UpdateUserInput): Observable<User> {
  const mutation = gql`
    mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
      updateUser(id: $id, input: $input) {
        id
        name
        email
        username
      }
    }
  `;

  const variables = {
    id,
    input
  };

  return this.apollo.mutate<{ updateUser: User }>({
    mutation,
    variables
  }).pipe(
    map(result => {
      if (result.data) {
        return result.data.updateUser;
      } else {
        // Handle the case when result.data is null or undefined
        throw new Error('No data found');
      }
    })
  );
}


  deleteUser(id: number): Observable<boolean> {
    const mutation = gql`
      mutation ($id: ID!) {
        deleteUser(id: $id)
      }
    `;

    const options: MutationOptions<any, any> = {
      mutation,
      variables: {
        id,
      },
    };

    return this.apollo
      .mutate<any>(options)
      .pipe(map((result) => result.data?.deleteUser ?? false));
  }
}
