import { JsonValue } from "type-fest";
import { Parent } from "../parent/Parent";
import { Kid } from "../kid/Kid";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  parents?: Array<Parent>;
  kids?: Array<Kid>;
};
