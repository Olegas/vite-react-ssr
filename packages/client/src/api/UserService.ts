import { User } from '../entities/user'

export interface UserRepository {
  getCurrent(): Promise<User>
}

export class UserService {
  constructor(private _repo: UserRepository) {}
  getCurrentUser() {
    return this._repo.getCurrent()
  }
}
