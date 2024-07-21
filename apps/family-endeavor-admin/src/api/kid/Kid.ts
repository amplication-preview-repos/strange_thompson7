import { JsonValue } from "type-fest";
import { Parent } from "../parent/Parent";
import { Progress } from "../progress/Progress";
import { EndeavorProgress } from "../endeavorProgress/EndeavorProgress";
import { PrizeProgress } from "../prizeProgress/PrizeProgress";

export type Kid = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  profilePicture: JsonValue;
  name: string | null;
  yearOfBirth: number | null;
  parent?: Parent | null;
  gender?: "Option1" | null;
  progresses?: Array<Progress>;
  endeavorProgresses?: Array<EndeavorProgress>;
  prizeProgresses?: Array<PrizeProgress>;
};
