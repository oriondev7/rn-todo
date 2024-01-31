import { MockUser } from '../../__mock__/mock-user';
import { FetchUserBody, User } from '../../model/user';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchUser = (_: FetchUserBody): Promise<User> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(MockUser);
    }, 2000);
  });
