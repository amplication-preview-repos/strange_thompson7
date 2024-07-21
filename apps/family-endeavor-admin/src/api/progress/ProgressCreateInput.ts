import { KidWhereUniqueInput } from "../kid/KidWhereUniqueInput";
import { EndeavorWhereUniqueInput } from "../endeavor/EndeavorWhereUniqueInput";

export type ProgressCreateInput = {
  status?: "Option1" | null;
  blueGemsEarned?: number | null;
  redGemsEarned?: number | null;
  purpleGemsEarned?: number | null;
  kid?: KidWhereUniqueInput | null;
  endeavor?: EndeavorWhereUniqueInput | null;
};
