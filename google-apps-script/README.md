# Connecting the Wishes form to Google Sheets

A browser app can't write to Google Sheets directly without exposing an API
key or OAuth secret to every visitor, so the standard, credential-free way to
do this is a small **Google Apps Script Web App** that sits between the site
and the Sheet. Follow these steps signed in as **dhinesh.m0607@gmail.com**:

1. Go to **sheets.google.com** and create a new spreadsheet, e.g.
   "Deepikha & Sri Balaji – Wedding Wishes".
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the placeholder code and paste the contents of `Code.gs`
   (in this same folder) into the editor. Save the project (e.g. name it
   "Wedding Wishes API").
4. Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Description: "Wedding wishes form".
   - Execute as: **Me (dhinesh.m0607@gmail.com)**.
   - Who has access: **Anyone**.
   - Click **Deploy**, then **Authorize access** and approve the permissions
     (you'll see an "unverified app" warning — click Advanced → Go to
     Wedding Wishes API (unsafe), since this is your own script).
5. Copy the generated **Web app URL** (ends in `/exec`).
6. Open `src/app/services/wishes.service.ts` in the project and paste that
   URL into `SHEET_WEB_APP_URL`.
7. Rebuild/redeploy the site. Every submitted wish will now appear as a new
   row in the **Wishes** tab of your spreadsheet, with Timestamp, Name,
   Side, and Wish columns.

If you ever need to change which spreadsheet receives the data, just open a
different spreadsheet's Apps Script editor and repeat steps 2–6 — the script
always writes to whichever spreadsheet it is bound to.
