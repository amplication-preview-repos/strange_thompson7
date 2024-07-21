import { PrizeProgressCreateNestedManyWithoutPrizesInput } from "./PrizeProgressCreateNestedManyWithoutPrizesInput";

export type PrizeCreateInput = {
  name?: string | null;
  description?: string | null;
  costInBlueGems?: number | null;
  costInPurpleGems?: number | null;
  costInRedGems?: number | null;
  prizeProgresses?: PrizeProgressCreateNestedManyWithoutPrizesInput;
};
