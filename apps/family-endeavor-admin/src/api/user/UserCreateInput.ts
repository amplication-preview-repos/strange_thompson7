import { InputJsonValue } from "../../types";
import { ParentCreateNestedManyWithoutUsersInput } from "./ParentCreateNestedManyWithoutUsersInput";
import { KidCreateNestedManyWithoutUsersInput } from "./KidCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  parents?: ParentCreateNestedManyWithoutUsersInput;
  kids?: KidCreateNestedManyWithoutUsersInput;
};
