import axios from "axios";
import { parseSpreadSheet } from "../../common/util";

const SHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const URL_END = "/public/full?alt=json";

const createdAxios = axios.create({
    baseURL: `https://spreadsheets.google.com/feeds/list/${SHEET_ID}/`
});

// Cash
let loadedDolls = [];
let loadedNotes = [];

const getAndParseData = async (sheetNum = 1) => {
    const response = await createdAxios.get(sheetNum + URL_END);
    return parseSpreadSheet(response);
}

export const getDolls = async () => {
    const SHEET_NUM = "1";
    if (loadedDolls.length === 0) {
        loadedDolls = getAndParseData(SHEET_NUM);
    } 
    return loadedDolls;
};

export const getNotes = async () => {
    const SHEET_NUM = "3";
    if (loadedNotes.length === 0) {
        loadedNotes = getAndParseData(SHEET_NUM);
    } 
    return loadedNotes;
};