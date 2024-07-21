import { Kid } from "../kid/Kid";

export type Parent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  name: string | null;
  kids?: Array<Kid>;
};
