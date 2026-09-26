export type Lang = 'en' | 'ta';

export interface Bilingual {
  en: string;
  ta: string;
}

export const content = {
  brideName: { en: 'Deepikha', ta: 'தீபிகா' } as Bilingual,
  groomName: { en: 'Sri Balaji', ta: 'ஸ்ரீ பாலாஜி' } as Bilingual,
  brideFull: { en: 'R. Deepikha, B.Com., CS (WNS)', ta: 'R. தீபிகா, B.Com., CS (WNS)' } as Bilingual,
  groomFull: { en: 'E. Sri Balaji, B.Tech., EEE (NPCI)', ta: 'E. ஸ்ரீ பாலாஜி, B.Tech., EEE (NPCI)' } as Bilingual,

  brideParents: { en: 'Daughter of (Late) B. Ramesh Kumar & (Late) R. Sarala', ta: 'மறைந்த B. இரமேஷ்குமார் – மறைந்த R. சரளா அவர்களின் அருமை மகள்' } as Bilingual,
  groomParents: { en: 'Son of P. Elango & E. Usha', ta: 'P. இளங்கோ – E. உஷா அவர்களின் அருமை மகன்' } as Bilingual,

  eyebrow: { en: 'Together with our families', ta: 'குடும்பத்தினருடன் இணைந்து' } as Bilingual,
  heroInvite: {
    en: 'request the honour of your presence at the wedding of',
    ta: 'எங்கள் மகிழ்ச்சியான திருமண நிகழ்ச்சியில் கலந்து சிறப்பிக்குமாறு அன்புடன் அழைக்கிறோம்'
  } as Bilingual,

  dateLabel: { en: '14th December 2026 · Monday', ta: '14.12.2026, திங்கட்கிழமை' } as Bilingual,
  muhurtamLabel: {
    en: 'Karthigai Masam, Sashti Thithi · Muhurtham 6:00 AM – 7:15 AM',
    ta: 'கார்த்திகை மாதம், சஷ்டி திதி · சுப முகூர்த்த நேரம் காலை 6:00 – 7:15'
  } as Bilingual,

  venueName: { en: 'V.M.A. Hall', ta: 'V.M.A. ஹால்' } as Bilingual,
  venueAddress: {
    en: 'No. 34, Srinivasa Iyer St, Aryagowda Road, Vivekanandapuram, West Mambalam, Chennai – 600 033',
    ta: 'எண். 34, ஸ்ரீநிவாச ஐயர் தெரு, ஆர்யகவுடா ரோடு, விவேகானந்தபுரம், மேற்கு மாம்பலம், சென்னை – 600 033'
  } as Bilingual,

  coupleSectionTitle: { en: 'The Wedding Couple', ta: 'மணமக்கள்' } as Bilingual,
  brideLabel: { en: 'The Bride', ta: 'மணமகள்' } as Bilingual,
  groomLabel: { en: 'The Groom', ta: 'மணமகன்' } as Bilingual,

  scheduleTitle: { en: 'Wedding Schedule', ta: 'திருமண நிகழ்வு' } as Bilingual,
  scheduleEvent: { en: 'Marriage Ceremony', ta: 'திருமண வைபவம்' } as Bilingual,

  venueTitle: { en: 'Venue', ta: 'இடம்' } as Bilingual,
  directionsCta: { en: 'Get Directions', ta: 'வழி காட்டு' } as Bilingual,

  blessingTitle: { en: 'Ring the Temple Bell', ta: 'மணி அடித்து ஆசி வழங்குங்கள்' } as Bilingual,
  blessingSubtitle: {
    en: 'Tap the bell to send your blessings to Deepikha & Sri Balaji',
    ta: 'தீபிகா – ஸ்ரீ பாலாஜிக்கு உங்கள் ஆசிகளை வழங்க மணியைத் தொடவும்'
  } as Bilingual,
  blessingCount: { en: 'blessings received', ta: 'ஆசிகள் பெறப்பட்டது' } as Bilingual,

  wishesTitle: { en: 'Send Your Wishes', ta: 'உங்கள் வாழ்த்துக்களை அனுப்புங்கள்' } as Bilingual,
  wishesSubtitle: {
    en: 'We would love to hear your blessings for the new couple',
    ta: 'புதுமணத் தம்பதியருக்கு உங்கள் ஆசிகளை பதிவு செய்யுங்கள்'
  } as Bilingual,
  formName: { en: 'Your Name', ta: 'உங்கள் பெயர்' } as Bilingual,
  formSide: { en: 'You belong to', ta: 'நீங்கள் சார்ந்தவர்' } as Bilingual,
  formSideBride: { en: 'Bride\'s Side', ta: 'மணமகள் தரப்பு' } as Bilingual,
  formSideGroom: { en: 'Groom\'s Side', ta: 'மணமகன் தரப்பு' } as Bilingual,
  formWish: { en: 'Your Wishes', ta: 'உங்கள் வாழ்த்து' } as Bilingual,
  formSubmit: { en: 'Send Wishes', ta: 'அனுப்பு' } as Bilingual,
  formSuccess: { en: 'Thank you! Your wishes have been sent with love.', ta: 'நன்றி! உங்கள் வாழ்த்து அன்புடன் அனுப்பப்பட்டது.' } as Bilingual,
  formError: { en: 'Something went wrong. Please try again.', ta: 'ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.' } as Bilingual,

  errRequired: { en: 'This field is required', ta: 'இந்தப் புலம் அவசியம்' } as Bilingual,
  errMinName: { en: 'Please enter at least 2 characters', ta: 'குறைந்தது 2 எழுத்துகள் தேவை' } as Bilingual,
  errMinWish: { en: 'Please write at least 5 characters', ta: 'குறைந்தது 5 எழுத்துகள் தேவை' } as Bilingual,

  downloadCta: { en: 'Download Invitation', ta: 'அழைப்பிதழை பதிவிறக்கவும்' } as Bilingual,
  footerNote: { en: 'With love, Entire Family', ta: 'அன்புடன், குடும்பத்தினர் அனைவரும்' } as Bilingual,
  footerBlessing: {
    en: 'Your presence will make our celebration more special and memorable',
    ta: 'உங்கள் வருகை எங்கள் விழாவை மேலும் சிறப்பிக்கும்'
  } as Bilingual,
};
