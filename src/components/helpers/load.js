import config from "../../resources/config";

export default function load(callback) {
  console.log(window.location.pathname);
  let sheetName = "Points Cumulative";
  if (window.location.pathname === "/e1t1-leaderboard/current-week") {
    sheetName = "Points Week 8/2";
  }
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({
        spreadsheetId: config.spreadsheetId,
        majorDimension: "COLUMNS",
        ranges: [sheetName + "!C11:C68", sheetName + "!BE11:BE68"]
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
          console.log(response.result.error);
          callback(false, response.result.error);
        }
      );
  });
}