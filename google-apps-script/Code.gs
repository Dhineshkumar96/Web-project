/**
 * Deepikha & Sri Balaji — Wedding Wishes Collector
 *
 * Deploy this as a Web App (see README.md in this folder) from the
 * Google account that owns the target Sheet (dhinesh.m0607@gmail.com).
 * Every submission from the website becomes one new row.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Wishes')
    || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Wishes');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Side', 'Wish']);
  }

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.name || '',
    data.side || '',
    data.wish || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Wedding wishes endpoint is live' }))
    .setMimeType(ContentService.MimeType.JSON);
}
