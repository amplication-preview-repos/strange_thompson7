import { InputJsonValue } from "../../types";
import { ParentUpdateManyWithoutUsersInput } from "./ParentUpdateManyWithoutUsersInput";
import { KidUpdateManyWithoutUsersInput } from "./KidUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  parents?: ParentUpdateManyWithoutUsersInput;
  kids?: KidUpdateManyWithoutUsersInput;
};
