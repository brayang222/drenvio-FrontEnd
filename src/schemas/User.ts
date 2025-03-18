import { ROLES } from "../enum/roles.enum";

export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  role: ROLES;
}
