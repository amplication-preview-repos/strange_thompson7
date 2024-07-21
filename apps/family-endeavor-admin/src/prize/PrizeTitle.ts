import { Prize as TPrize } from "../api/prize/Prize";

export const PRIZE_TITLE_FIELD = "name";

export const PrizeTitle = (record: TPrize): string => {
  return record.name?.toString() || String(record.id);
};
