import { InputJsonValue } from "../../types";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ProgressCreateNestedManyWithoutKidsInput } from "./ProgressCreateNestedManyWithoutKidsInput";
import { EndeavorProgressCreateNestedManyWithoutKidsInput } from "./EndeavorProgressCreateNestedManyWithoutKidsInput";
import { PrizeProgressCreateNestedManyWithoutKidsInput } from "./PrizeProgressCreateNestedManyWithoutKidsInput";

export type KidCreateInput = {
  profilePicture?: InputJsonValue;
  name?: string | null;
  yearOfBirth?: number | null;
  parent?: ParentWhereUniqueInput | null;
  gender?: "Option1" | null;
  progresses?: ProgressCreateNestedManyWithoutKidsInput;
  endeavorProgresses?: EndeavorProgressCreateNestedManyWithoutKidsInput;
  prizeProgresses?: PrizeProgressCreateNestedManyWithoutKidsInput;
};
