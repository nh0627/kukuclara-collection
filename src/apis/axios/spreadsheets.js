import axios from "axios";
import { parseSpreadSheet } from "../../common/util";

const sheetId = process.env.REACT_APP_SPREADSHEET_ID;

const createdAxios = axios.create({
    baseURL: `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/full?alt=json`
});

// Cashing
export let loadedDolls = [];

export const loadDolls = async () => {
    const response = await createdAxios.get();
    const parsedDolls = parseSpreadSheet(response);
    loadedDolls = parsedDolls;
};