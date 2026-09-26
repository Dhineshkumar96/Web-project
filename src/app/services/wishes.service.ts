import { Injectable } from '@angular/core';

export interface WishPayload {
  name: string;
  side: 'bride' | 'groom';
  wish: string;
}

/**
 * Sends a wish to the Google Sheet linked in google-apps-script/Code.gs
 * (owned by dhinesh.m0607@gmail.com). Set SHEET_WEB_APP_URL after deploying
 * the Apps Script as described in google-apps-script/README.md — the browser
 * cannot write to Google Sheets directly, so a small Apps Script "Web App"
 * acts as the bridge and keeps the Google account credentials off the client.
 */
@Injectable({ providedIn: 'root' })
export class WishesService {
  private readonly SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxYi0JoV3lMx8s6Ro9mODA-PPXLpGg8-ovl4JIiOchngov2bv0IyPukHd0SnCFzLR-u/exec';

  async submit(payload: WishPayload): Promise<boolean> {
    if (!this.SHEET_WEB_APP_URL || this.SHEET_WEB_APP_URL.startsWith('PASTE_')) {
      console.warn(
        '[WishesService] SHEET_WEB_APP_URL is not configured yet. ' +
        'Follow google-apps-script/README.md to connect Google Sheets.'
      );
      return false;
    }

    try {
      // Apps Script Web Apps don't return CORS headers for a readable response
      // when called with a simple form-encoded POST, so we use no-cors and
      // treat a non-throwing request as success (the script still writes the row).
      await fetch(this.SHEET_WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: payload.name,
          side: payload.side,
          wish: payload.wish,
        }),
      });
      return true;
    } catch (err) {
      console.error('[WishesService] Failed to submit wish', err);
      return false;
    }
  }
}
