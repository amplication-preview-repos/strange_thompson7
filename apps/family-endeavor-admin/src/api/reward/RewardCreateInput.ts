import { EndeavorCreateNestedManyWithoutRewardsInput } from "./EndeavorCreateNestedManyWithoutRewardsInput";

export type RewardCreateInput = {
  endeavors?: EndeavorCreateNestedManyWithoutRewardsInput;
  blueGems?: number | null;
  redGems?: number | null;
  purpleGems?: number | null;
};
