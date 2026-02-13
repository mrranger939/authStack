import { AuthAdapter } from "./adapter";

export interface AuthConfig {
  adapter: AuthAdapter;
  jwtSecret: string;

  identifierField?: string;
  passwordField?: string;
}
