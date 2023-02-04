export const removeDuplicatesInArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

export const includesArray = <T>(arr1: T[], arr2: T[]): boolean => {
  return arr2.every((v) => arr1.includes(v));
};
