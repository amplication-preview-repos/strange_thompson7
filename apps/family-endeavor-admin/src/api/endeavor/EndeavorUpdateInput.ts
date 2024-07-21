import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { EndeavorProgressUpdateManyWithoutEndeavorsInput } from "./EndeavorProgressUpdateManyWithoutEndeavorsInput";

export type EndeavorUpdateInput = {
  description?: string | null;
  name?: string | null;
  dueDate?: Date | null;
  reward?: RewardWhereUniqueInput | null;
  assignedTo?: string | null;
  endeavorProgresses?: EndeavorProgressUpdateManyWithoutEndeavorsInput;
};
