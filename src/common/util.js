const COLORS = ["yellow", "olive", "teal", "blue", "purple", "orange", "green", "grey", "black", "red"];
export const getColor = (i) => COLORS[i % 10];

export const START_YEAR = 2013;
export const END_YEAR = new Date().getFullYear();

export const parseSpreadSheet = source => {
    const { data: { feed: { entry } } } = source;
    const KEY_PREFIX = "gsx$";
    const VALUE_PREFIX = "$t";

    // Google spreadsheet API makes all column names lowercased (even snakecase is ignored).
    const NON_CAMELCASE_COLUMNS = ["eyeColor", "eyeColorCode", "eyeColorGroup", "eyeColorGroupCode", "eyeColorHexCode", 
                    "hairColor", "hairColorCode", "hairColorGroup", "hairColorGroupCode", 
                    "hairColorHexCode", "releaseCode", "seriesCode", "skinType", "skinTypeCode", "skinTypeHexCode", "typeCode"];
    const lowercasedColumn = NON_CAMELCASE_COLUMNS.map(column => column.toLowerCase());

    const parsedData = entry.map(row =>
        Object.keys(row)
            .filter(key => key.startsWith(KEY_PREFIX))
            .reduce((obj, key) => {
                const newKey = key.replace(KEY_PREFIX, "");
                const camelCaseIdx = lowercasedColumn.indexOf(newKey);
                const data = row[key][VALUE_PREFIX];
                if (camelCaseIdx > 0) obj[NON_CAMELCASE_COLUMNS[camelCaseIdx]] = data;
                else if (camelCaseIdx === -1) obj[newKey] = data;
                return obj;
            }, {}));
    return parsedData;
};