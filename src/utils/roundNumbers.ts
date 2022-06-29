import millify from "millify";

export const roundNumber = (num: number | string) => {
  return millify(+num, { precision: 4 });
};
