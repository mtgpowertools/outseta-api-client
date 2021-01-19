import { ServerCredentials, UserCredentials } from '@src/util/credentials';

export default class Store {
  public readonly baseUrl: string;
  public readonly userAuth: UserCredentials;
  public readonly serverAuth: ServerCredentials;

  constructor(baseUrl: string, userAuth: UserCredentials, serverAuth: ServerCredentials) {
    this.baseUrl = baseUrl;
    this.userAuth = userAuth;
    this.serverAuth = serverAuth;
  }
}
