import axios from "axios";

const SHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const URL_END = "/public/full?alt=json";

const createdAxios = axios.create({
    baseURL: `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/`
});

const parseSpreadSheet = source => {
    const { data: { feed: { entry } } } = source;

    const KEY_PREFIX = "gsx$";
    const VALUE_PREFIX = "$t";
    // Google Spreadsheet API makes all column names lowercased (even snakecase is ignored).
    const NON_CAMEL_CASE_COLUMNS = ["eyeColor", "eyeColorCode", "eyeColorGroup", "eyeColorGroupCode", "eyeColorHexCode",
        "hairColor", "hairColorCode", "hairColorGroup", "hairColorGroupCode",
        "hairColorHexCode", "releaseCode", "seriesCode", "skinType", "skinTypeCode", "skinTypeHexCode", "typeCode"];

    const lowerCasedColumns = NON_CAMEL_CASE_COLUMNS.map(column => column.toLowerCase());

    const parsedData = entry.map(row =>
        Object.keys(row)
            .filter(key => key.startsWith(KEY_PREFIX))
            .reduce((obj, key) => {
                const newKey = key.replace(KEY_PREFIX, "");
                const camelCaseIdx = lowerCasedColumns.indexOf(newKey);
                const data = row[key][VALUE_PREFIX];
                if (camelCaseIdx >= 0) obj[NON_CAMEL_CASE_COLUMNS[camelCaseIdx]] = data;
                else if (camelCaseIdx === -1) obj[newKey] = data;
                return obj;
            }, {})
    );
    return parsedData;
};

// Cash
let loadedDolls = [];
let loadedNotes = [];
let loadedFilters = [];

const getAndParseData = async (sheetNum = 1) => {
    const response = await createdAxios.get(sheetNum + URL_END);
    return parseSpreadSheet(response);
}

export const getDolls = async () => {
    const SHEET_NUM = "1";
    if (loadedDolls.length === 0) {
        loadedDolls = await getAndParseData(SHEET_NUM);
    }
    return loadedDolls;
};

export const getFilters = async () => {
    const SHEET_NUM = "2";
    if (loadedFilters.length === 0) {
        loadedFilters = await getAndParseData(SHEET_NUM);
    }

    const parsedFilters = loadedFilters.reduce((obj, filter) => {
        const { type, code, name } = filter;
        if (typeof obj[type] === "undefined") obj[type] = [];
        obj[type].push({ code, name });
        return obj;
    }, {});

    return parsedFilters;
};

export const getNotes = async () => {
    const SHEET_NUM = "3";
    if (loadedNotes.length === 0) {
        loadedNotes = await getAndParseData(SHEET_NUM);
    }
    return loadedNotes;
};