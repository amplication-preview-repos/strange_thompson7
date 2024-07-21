import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { EndeavorProgressCreateNestedManyWithoutEndeavorsInput } from "./EndeavorProgressCreateNestedManyWithoutEndeavorsInput";

export type EndeavorCreateInput = {
  description?: string | null;
  name?: string | null;
  dueDate?: Date | null;
  reward?: RewardWhereUniqueInput | null;
  assignedTo?: string | null;
  endeavorProgresses?: EndeavorProgressCreateNestedManyWithoutEndeavorsInput;
};
