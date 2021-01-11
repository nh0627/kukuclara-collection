const COLORS = ["yellow", "olive", "teal", "blue", "purple", "orange", "green", "grey", "black", "red"];
export const getColor = (i) => COLORS[i % 10];

export const FILTER_GROUP_NAMES = ["types", "hairColorGroups", "eyeColorGroups", "skinTypes"];

export const START_YEAR = 2013;
export const END_YEAR = new Date().getFullYear();