import { InputJsonValue } from "../../types";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { EndeavorProgressCreateNestedManyWithoutKidsInput } from "./EndeavorProgressCreateNestedManyWithoutKidsInput";
import { PrizeProgressCreateNestedManyWithoutKidsInput } from "./PrizeProgressCreateNestedManyWithoutKidsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type KidCreateInput = {
  profilePicture?: InputJsonValue;
  name?: string | null;
  yearOfBirth?: number | null;
  parent?: ParentWhereUniqueInput | null;
  gender?: "Option1" | null;
  endeavorProgresses?: EndeavorProgressCreateNestedManyWithoutKidsInput;
  prizeProgresses?: PrizeProgressCreateNestedManyWithoutKidsInput;
  user?: UserWhereUniqueInput | null;
};
