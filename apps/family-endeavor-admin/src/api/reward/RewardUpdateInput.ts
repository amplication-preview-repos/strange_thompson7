import { EndeavorUpdateManyWithoutRewardsInput } from "./EndeavorUpdateManyWithoutRewardsInput";

export type RewardUpdateInput = {
  endeavors?: EndeavorUpdateManyWithoutRewardsInput;
  blueGems?: number | null;
  redGems?: number | null;
  purpleGems?: number | null;
};
