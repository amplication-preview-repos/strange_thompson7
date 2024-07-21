import { KidUpdateManyWithoutParentsInput } from "./KidUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  email?: string | null;
  name?: string | null;
  kids?: KidUpdateManyWithoutParentsInput;
};
