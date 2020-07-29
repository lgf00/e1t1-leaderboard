import config from "../../resources/config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Points 8/2 (Mirrored)!AT17:AT74"
      })
      .then(
        response => {
          const data = response.result.values;
          const points = data || [];
          callback({
            points
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}