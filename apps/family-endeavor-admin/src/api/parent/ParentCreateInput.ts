import { KidCreateNestedManyWithoutParentsInput } from "./KidCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  email?: string | null;
  name?: string | null;
  kids?: KidCreateNestedManyWithoutParentsInput;
};
