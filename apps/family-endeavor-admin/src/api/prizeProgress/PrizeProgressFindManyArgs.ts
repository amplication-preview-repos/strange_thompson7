import { PrizeProgressWhereInput } from "./PrizeProgressWhereInput";
import { PrizeProgressOrderByInput } from "./PrizeProgressOrderByInput";

export type PrizeProgressFindManyArgs = {
  where?: PrizeProgressWhereInput;
  orderBy?: Array<PrizeProgressOrderByInput>;
  skip?: number;
  take?: number;
};
