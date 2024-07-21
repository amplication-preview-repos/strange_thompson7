import { Endeavor } from "../endeavor/Endeavor";

export type Reward = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  endeavors?: Array<Endeavor>;
  blueGems: number | null;
  redGems: number | null;
  purpleGems: number | null;
};
