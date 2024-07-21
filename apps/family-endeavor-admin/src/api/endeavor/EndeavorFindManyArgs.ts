import { EndeavorWhereInput } from "./EndeavorWhereInput";
import { EndeavorOrderByInput } from "./EndeavorOrderByInput";

export type EndeavorFindManyArgs = {
  where?: EndeavorWhereInput;
  orderBy?: Array<EndeavorOrderByInput>;
  skip?: number;
  take?: number;
};
