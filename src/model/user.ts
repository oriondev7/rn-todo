export interface User {
  name: string;
  avatar: string;
}

export interface UserSlice {
  isLoading: boolean;
  user: null | User;
}

export interface FetchUserBody {
  username: string;
  password: string;
}
