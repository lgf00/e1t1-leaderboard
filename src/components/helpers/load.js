import config from "../../resources/config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({
        spreadsheetId: config.spreadsheetId,
        majorDimension: "COLUMNS",
        ranges: ["Points 8/2 (Mirrored)!C17:C73", "Points 8/2 (Mirrored)!AT17:AT73"]
      })
      .then(
        response => {
          let names = response.result.valueRanges[0].values;
          let points = response.result.valueRanges[1].values;
          let objArr = [];
          for (let i = 0; i < names[0].length; i++) {
            objArr.push({name: names[0][i], points: parseInt(points[0][i])});
          }
          const fullSend = objArr || [];
          callback({
            fullSend
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}