import config from "../../resources/config";

export default function loadRange(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetIdData,
        majorDimension: "COLUMNS",
        range: ['B1:B6']
      })
      .then(
        response => {
          const fullSend = response.result.values[0] || [];
          callback({
            fullSend
          });
        },
        response => {
          console.log(response.result.error);
          callback(false, response.result.error);
        }
      );
  });
}