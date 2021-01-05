const COLORS = ["yellow", "olive", "teal", "blue", "purple", "orange", "green", "grey", "black", "red"];
export const getColor = (i) => COLORS[i % 10];

export const FILTERS = ["types", "hairColorGroups", "eyeColorGroups", "skinTypes"];