// Operator-only outreach material for /outreach. Not prospect-facing.
// Facts checked against dolcemd.com on 2026-10-24.
import { demoUrl } from "./site";

export { demoUrl };
export const checkedOn = "2026-10-24";

export const snapshot = [
  ["Business", "Dolce MD (Laguna Beach, CA): concierge primary care plus medical dermatology and med spa"],
  ["Lead provider", "Dr. John Sanguedolce, board-certified family physician (dolcemd.com/about/dr-john-sanguedolce/)"],
  ["Second provider", "Lilly Sanguedolce, PA-C, medical dermatology and aesthetics (dolcemd.com/about/lilly-sanguedolce/)"],
  ["Address", "310 Glenneyre St, Laguna Beach, CA 92651 (dolcemd.com/contact/; Google Business Profile and Laguna Beach Chamber listing match)"],
  ["Phone", "(949) 209-9266 (dolcemd.com header, footer and contact page; Google Business Profile matches). Fax (949) 209-9267 (contact page)"],
  ["Hours", "Mon-Fri 8:00 AM - 6:00 PM on dolcemd.com/contact/. Google Business Profile shows Mon-Fri 8-5, Sat 9-12, Sun closed. Conflict noted below"],
  ["Pricing on original site", "Concierge $225/mo billed annually; med spa memberships $199 / $299 / $325 per month (dolcemd.com/membership/)"],
  ["Current site", "WordPress, with a service menu, patient portal link, Healow booking link and a Google-review carousel"],
] as const;

export const links = [
  { label: "Original site", href: "https://dolcemd.com/" },
  { label: "Redesign (root)", href: demoUrl },
  { label: "GitHub repo", href: "https://github.com/Novenworks/dolce-md" },
] as const;

export const contactBlock = [
  {
    channel: "Email: contact@dolcemd.com (best)",
    status: "First-party",
    source:
      "Decoded from the obfuscated mailto: link in the page source of https://dolcemd.com/contact/ (also home, privacy-policy, special-offers and weight-loss pages). Not visible text: the page displays it masked as co*****@*****md.com. Checked 2026-10-24.",
  },
  {
    channel: "Phone (949) 209-9266",
    status: "First-party + Google Business Profile",
    source: "https://dolcemd.com/contact/ (office phone) and Google Business Profile via Places search. Checked 2026-10-24.",
  },
  {
    channel: "Website contact form (name, email, phone, message)",
    status: "First-party",
    source: "https://dolcemd.com/contact/ . Checked 2026-10-24. Not submitted.",
  },
  {
    channel: "Fax (949) 209-9267",
    status: "First-party",
    source: "https://dolcemd.com/contact/ . Not useful for outreach.",
  },
  {
    channel: "Facebook / Instagram / LinkedIn",
    status: "First-party links (profiles not opened)",
    source:
      "Linked from dolcemd.com: facebook.com/DolceMD.CA, instagram.com/dolcemd_/, linkedin.com/in/john-sanguedolce-827571203. Profile bios were not checked (social sites rate-limit automation).",
  },
  {
    channel: "Laguna Beach Chamber listing",
    status: "Third-party",
    source: "https://www.lagunabeachchamber.org/list/member/dolce-md-7145 lists the address and categories only; no email or phone for the business. Checked 2026-10-24.",
  },
  {
    channel: "Yelp, BBB, Medical Board of California",
    status: "Not checked",
    source: "Yelp page blocked automated access (robots disallowed). BBB and Medical Board license lookup were not checked.",
  },
] as const;

export const contact = {
  recipient: "contact@dolcemd.com",
  phone: "(949) 209-9266",
  greeting: "Hi Dr. Sanguedolce,",
  note: "Dr. Sanguedolce is named first-party as the physician and practice founder. The contact@ inbox is a general office inbox, so confirm who reads it before addressing him directly if you prefer a neutral “Hi,”.",
};

export const observations = [
  "The header menu carries about 42 links (services, dermatology, medical spa, products, programs, about) before the page content begins.",
  "The email address is shown masked on the page (co*****@*****md.com); only the hidden mailto link holds the full address.",
  "Office hours appear only on the Contact page. The homepage footer shows phone, masked email and address but no hours. Google lists different hours (Mon-Fri 8-5, Sat 9-12).",
  "The homepage concierge card shows “Members only”, “Insurance Accepted” and “Limited Availability” side by side; the accepted-insurance list is only on the concierge page.",
  "The homepage <title> is “Primary Care Provider in Laguna Beach | Dolce MD”, which does not mention concierge care or the medical spa.",
  "Memberships and prices are on a separate page from the concierge and med spa service pages.",
];

export const improvements = [
  "Two clear paths on the first screen: concierge primary care and medical dermatology / med spa, plus the Executive Physical.",
  "Call and Book buttons on the first screen, and a sticky Call / Book bar on phones.",
  "Address and hours on the page itself, with directions.",
  "Concierge membership, accepted insurances, and the med spa credit system laid out in one place.",
  "Both providers' credentials from the original site shown together.",
  "Every service links back to the practice's own page, so nothing is duplicated or out of date.",
  "No photos or patient content were reused; the design relies on type and color.",
];

export const talkingPoints = [
  "The site has a lot of substance. The redesign is about getting a new visitor to the right path (concierge care or med spa) in one screen.",
  "Mobile first screen now has the practice name, location, who leads it, and call / book buttons.",
  "Hours and accepted insurances are easy to miss on the current site; they are surfaced here.",
  "Everything on the redesign comes from dolcemd.com, so it is easy to keep in sync.",
];

export const doNotSay = [
  "No promises about patient volume, rankings, calls or revenue.",
  "No medical or outcome claims, and do not discuss specific treatments' effectiveness.",
  "Do not imply Novenworks was hired, or that the redesign is the official website.",
  "Do not criticize the current site or its builder; frame observations as a friendly heads-up.",
  "Do not quote Google hours as correct; the practice's own site and Google disagree, so ask.",
  "Do not mention patient reviews or testimonials; none were reused.",
];

export const subjectLines = [
  "Made something for Dolce MD",
  "An idea for the Dolce MD homepage",
  "Quick note about the Dolce MD website",
];

export const coldEmail = `Hi Dr. Sanguedolce,

I came across Dolce MD and spent some time on dolcemd.com. The range is impressive: concierge primary care, the Executive Physical, and the dermatology and med spa side with Lilly.

A couple of small things I noticed as a first-time visitor: the menu has a lot of links before the page content, the office hours only appear on the Contact page, and Google lists slightly different hours than your site.

Rather than send a list of suggestions, I built a version of the homepage that puts concierge care and the med spa on two clear paths, with call and book buttons visible on phones. It only uses information from your own site.

${demoUrl}

Happy to walk you through what I changed and why, or to drop it if it isn't useful.

Vincent
Novenworks`;

export const followUp = `Hi Dr. Sanguedolce,

Just bumping this once in case it got buried. I put together a homepage redesign for Dolce MD and wanted to make sure you saw it.

${demoUrl}

No pressure either way.

Vincent
Novenworks`;

export const phoneScript = `Hi, this is Vincent with Novenworks. Is Dr. Sanguedolce or the office manager available for a quick moment?

I built a redesigned homepage for Dolce MD using the information on your site, and I noticed your hours are listed differently on your site and on Google. I sent the link to the contact@ email. Happy to walk someone through it whenever is convenient. Thanks.`;

export const voicemail = `Hi, this is Vincent with Novenworks. I put together a redesigned homepage for Dolce MD using the information from dolcemd.com, and I sent the link to the contact@dolcemd.com email. There's also a quick note about your office hours showing differently on Google. No pressure, just wanted you to have it. Thanks.`;

export const stillToVerify = [
  "Office hours: dolcemd.com says Mon-Fri 8-6; Google Business Profile says Mon-Fri 8-5, Sat 9-12. Ask the practice; the redesign shows the first-party hours with a call-to-confirm note.",
  "Who reads contact@dolcemd.com, and whether Dr. Sanguedolce or an office manager is the right person.",
  "Whether the Healow booking link (healow.com/apps/practice/dolce-md-28675) works for new visitors; it blocked automated checks.",
  "Yelp, BBB and Medical Board of California listings were not checked.",
  "Prices and membership terms are copied from dolcemd.com/membership/ and may change; confirm before sending if they matter.",
  "That the original site still shows the same menu, masked email and hours on the day of sending.",
  "Photos and the official logo were deliberately not reused (licensing unknown); ask whether they can be used if a photo version is wanted.",
];
