import { PrizeWhereInput } from "./PrizeWhereInput";
import { PrizeOrderByInput } from "./PrizeOrderByInput";

export type PrizeFindManyArgs = {
  where?: PrizeWhereInput;
  orderBy?: Array<PrizeOrderByInput>;
  skip?: number;
  take?: number;
};
