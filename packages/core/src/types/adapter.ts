export interface AuthAdapter<UserType = any> {
  findUserByIdentifier(identifier: string): Promise<UserType | null>;

  createUser(data: {
    identifier: string;
    password: string;
  }): Promise<UserType>;

  findUserById(id: string): Promise<UserType | null>;
}
