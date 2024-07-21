import { KidUpdateManyWithoutParentsInput } from "./KidUpdateManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentUpdateInput = {
  email?: string | null;
  name?: string | null;
  kids?: KidUpdateManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
