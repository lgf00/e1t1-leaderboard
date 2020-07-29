import config from "../../resources/config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Points 8/2 (Mirrored)!C17:C74"
      })
      .then(
        response => {
          const data = response.result.values
          const names = data || [];
          callback({
            names
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}