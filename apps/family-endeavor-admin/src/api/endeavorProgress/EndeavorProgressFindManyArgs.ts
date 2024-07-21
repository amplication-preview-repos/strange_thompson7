import { EndeavorProgressWhereInput } from "./EndeavorProgressWhereInput";
import { EndeavorProgressOrderByInput } from "./EndeavorProgressOrderByInput";

export type EndeavorProgressFindManyArgs = {
  where?: EndeavorProgressWhereInput;
  orderBy?: Array<EndeavorProgressOrderByInput>;
  skip?: number;
  take?: number;
};
