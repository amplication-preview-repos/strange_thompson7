import { Kid } from "../kid/Kid";
import { User } from "../user/User";

export type Parent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  kids?: Array<Kid>;
  user?: User | null;
};
