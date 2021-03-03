import axios from "axios";

const sheetId = process.env.REACT_APP_SPREADSHEET_ID;

export default axios.create({
    baseURL: `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/full?alt=json`
});