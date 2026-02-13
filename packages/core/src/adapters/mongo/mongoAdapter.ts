import { AuthAdapter } from "../../types/adapter";

export function mongoAdapter(UserModel: any): AuthAdapter {
  return {
    async findUserByIdentifier(identifier: string) {
      return UserModel.findOne({ email: identifier });
    },

    async createUser(data) {
      return UserModel.create({
        email: data.identifier,
        password: data.password
      });
    },

    async findUserById(id: string) {
      return UserModel.findById(id);
    }
  };
}
