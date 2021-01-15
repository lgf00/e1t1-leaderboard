import config from "../../resources/config";

export default function load(sheetName, nameRange, pointsRange, callback) {
  console.log('sheetname', sheetName);
  console.log('nameRange', nameRange);
  console.log('pointRange', pointsRange);
  sheetName = sheetName + '!';
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({
        spreadsheetId: config.spreadsheetIdMaster,
        majorDimension: "COLUMNS",
        ranges: [sheetName + nameRange, sheetName + pointsRange]
      })
      .then(
        response => {
          let names = response.result.valueRanges[0].values;
          let points = response.result.valueRanges[1].values;
          if (names || points) {
            callback(false, "names/points are undefined, make sure the specified rows are correct");
            return;
          }
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