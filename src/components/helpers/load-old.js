import config from "../../resources/config";

export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "apitesting!A2:B22"
      })
      .then(
        response => {
          const data = response.result.values;
          const interns = data.map(intern => ({
            name: intern[0],
            points: intern[1],
          })) || [];
          callback({
            interns
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}