import { InputJsonValue } from "../../types";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { EndeavorProgressUpdateManyWithoutKidsInput } from "./EndeavorProgressUpdateManyWithoutKidsInput";
import { PrizeProgressUpdateManyWithoutKidsInput } from "./PrizeProgressUpdateManyWithoutKidsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type KidUpdateInput = {
  profilePicture?: InputJsonValue;
  name?: string | null;
  yearOfBirth?: number | null;
  parent?: ParentWhereUniqueInput | null;
  gender?: "Option1" | null;
  endeavorProgresses?: EndeavorProgressUpdateManyWithoutKidsInput;
  prizeProgresses?: PrizeProgressUpdateManyWithoutKidsInput;
  user?: UserWhereUniqueInput | null;
};
