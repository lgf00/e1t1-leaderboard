import config from "../../resources/config";

export default function load(callback) {
  let sheetName = "Cum Points 1/15/21";
  let nameRange = "!C11:C52";
  let pointsRange = "!BQ11:BQ52";
  if (window.location.pathname === "/e1t1-leaderboard/current-week") {
    sheetName = "Points 1/15/21";
  } else if (window.location.pathname === "/e1t1-leaderboard/team-leaders") {
    nameRange = "!C53:C68";
    pointsRange = "!BQ53:BQ68";
  }
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({
        spreadsheetId: config.spreadsheetId,
        majorDimension: "COLUMNS",
        ranges: [sheetName + nameRange, sheetName + pointsRange]
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