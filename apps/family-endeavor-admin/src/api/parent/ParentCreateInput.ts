import { KidCreateNestedManyWithoutParentsInput } from "./KidCreateNestedManyWithoutParentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentCreateInput = {
  email?: string | null;
  name?: string | null;
  kids?: KidCreateNestedManyWithoutParentsInput;
  user?: UserWhereUniqueInput | null;
};
