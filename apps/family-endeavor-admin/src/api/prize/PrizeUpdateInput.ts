import { PrizeProgressUpdateManyWithoutPrizesInput } from "./PrizeProgressUpdateManyWithoutPrizesInput";

export type PrizeUpdateInput = {
  name?: string | null;
  description?: string | null;
  costInBlueGems?: number | null;
  costInPurpleGems?: number | null;
  costInRedGems?: number | null;
  prizeProgresses?: PrizeProgressUpdateManyWithoutPrizesInput;
};
