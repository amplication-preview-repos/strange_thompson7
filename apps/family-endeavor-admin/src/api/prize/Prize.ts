import { PrizeProgress } from "../prizeProgress/PrizeProgress";

export type Prize = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  costInBlueGems: number | null;
  costInPurpleGems: number | null;
  costInRedGems: number | null;
  prizeProgresses?: Array<PrizeProgress>;
};
