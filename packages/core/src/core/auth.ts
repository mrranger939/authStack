import { AuthConfig } from "../types/auth";

export function auth(config: AuthConfig) {
  if (!config.adapter) {
    throw new Error("Authstack: adapter is required");
  }

  return function authMiddleware(req: any, res: any, next: any) {
    next();
  };
}
