import { PrizeProgress as TPrizeProgress } from "../api/prizeProgress/PrizeProgress";

export const PRIZEPROGRESS_TITLE_FIELD = "id";

export const PrizeProgressTitle = (record: TPrizeProgress): string => {
  return record.id?.toString() || String(record.id);
};
