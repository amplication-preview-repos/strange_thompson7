import { KidWhereInput } from "./KidWhereInput";
import { KidOrderByInput } from "./KidOrderByInput";

export type KidFindManyArgs = {
  where?: KidWhereInput;
  orderBy?: Array<KidOrderByInput>;
  skip?: number;
  take?: number;
};
