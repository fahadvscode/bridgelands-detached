export const SITE_URL = "https://bridgelandsdetached.com";
export const SITE_NAME = "Bridgelands Detached Homes";
export const SITE_ORG_NAME = "Bridgelands Detached Homes — Independent Project Information";
export const PROJECT_NAME = "Bridgelands";
export const PROJECT_ALT_NAME = "Bridgelands Homes";
export const CITY = "Vaughan (Woodbridge)";
export const CITY_SHORT = "Woodbridge";
export const MUNICIPALITY = "City of Vaughan";
export const REGION = "York Region";
export const PROVINCE = "Ontario";
export const INTERSECTION = "Weston Road & Teston Road";
export const BUILDERS_LINE = "Arista Homes, Deco Homes, and Opus Homes";
export const BUILDERS_SHORT = "Arista, Deco & Opus Homes";
export const STATUS = "Coming Soon";
export const STATUS_BADGE = "Coming Soon — VIP Registration Open";
/** Hardcoded insert value for bridgelands_leads.site_source. Never accept from the client. */
export const SITE_SOURCE = SITE_URL;
export const LAST_UPDATED = "August 29, 2026";
export const LAST_UPDATED_ISO = "2026-08-29";
export const WORDMARK = "Bridgelands Detached";
export const WORDMARK_LOCATOR = "Woodbridge, Vaughan";
export const CTA_LABEL = "Register for VIP Access";
export const CTA_NAV_LABEL = "Register";
export const HERO_CTA_LABEL = "Get VIP Access — Free.";
export const FORM_HEADING = "VIP registration";
export const FORM_LEDE =
  "Free to register. Priority notice when detached-home floor plans and pricing are released. No purchase obligation and no phone call required.";
export const CONTACT_EMAIL = "privacy@bridgelandsdetached.com";
export const HERO_EYEBROW = "Coming Soon · Woodbridge, Vaughan";
export const HERO_SUBHEAD =
  "A potential detached-home collection at the Bridgelands master-planned community, by Arista Homes, Deco Homes, and Opus Homes.";
export const HUB_URL = "https://bridgelands-woodbridge.ca";
export const HUB_LOCATION_URL = "https://bridgelands-woodbridge.ca/location";
export const TOWNS_URL = "https://bridgelandstowns.ca";

export const INDEPENDENCE_DISCLAIMER =
  "This is an independent information and registration website focused on Bridgelands' potential detached-home collection. It is not the official website of Arista Homes, Deco Homes, or Opus Homes, and is not affiliated with or endorsed by any of them. All information is for illustration only and subject to change without notice. E.&O.E.";

export const SPECS_DISCLAIMER =
  "Prices, sizes, specifications, and availability are subject to change without notice. E.&O.E. Information current as of August 29, 2026.";

export const CASL_CONSENT =
  "I consent to receive electronic communications about Bridgelands and similar pre-construction opportunities. I understand I can withdraw consent at any time using the unsubscribe link in any message.";

export const UNVERIFIED_NOTE = "[UNVERIFIED — CONFIRM BEFORE LAUNCH]";

export const MAPS_EMBED_SRC =
  "https://maps.google.com/maps?q=Weston%20Road%20and%20Teston%20Road%2C%20Vaughan%2C%20Ontario&t=&z=14&ie=UTF8&iwloc=&output=embed";

export const ADDRESS_LINE = "Near Weston Road & Teston Road, Woodbridge, Vaughan, Ontario";

export const HERO_IMAGE = {
  src: "/images/bridgelands-detached-rendering.jpg",
  width: 1536,
  height: 1024,
  alt: "Illustrative detached-home streetscape related to the expected Bridgelands detached-home collection in Woodbridge, Vaughan. Not an official builder rendering.",
} as const;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  h1: string;
  robots?: { index: boolean; follow: boolean };
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "Bridgelands Detached Homes — Woodbridge, Vaughan",
    description:
      "Expected detached-home collection at Bridgelands by Arista, Deco & Opus Homes. Register for VIP access.",
    h1: "Bridgelands Detached Homes — Woodbridge, Vaughan",
  },
  collections: {
    path: "/collections",
    title: "Bridgelands Detached Home Collection",
    description: "What's known about the expected Bridgelands detached-home collection.",
    h1: "The Expected Bridgelands Detached Home Collection",
  },
  pricing: {
    path: "/pricing",
    title: "Bridgelands Detached Home Prices",
    description: "Pricing status for a potential Bridgelands detached-home collection.",
    h1: "Bridgelands Detached Home Pricing Status",
  },
  location: {
    path: "/location",
    title: "Bridgelands Detached Homes Location",
    description: "Weston Rd & Teston Rd location, transit, and comparable detached-home communities.",
    h1: "Bridgelands Detached Homes Location — Weston Road & Teston Road",
  },
  faq: {
    path: "/faq",
    title: "Bridgelands Detached Homes FAQ",
    description: "Answers about Bridgelands' potential detached-home collection.",
    h1: "Bridgelands Detached Homes — Frequently Asked Questions",
  },
  register: {
    path: "/register",
    title: "Register — Bridgelands Detached VIP",
    description: "Free VIP registration for Bridgelands detached-home updates.",
    h1: "Register for VIP Access — Bridgelands Detached Homes",
  },
  thankYou: {
    path: "/thank-you",
    title: "Registration received — Bridgelands Detached Homes",
    description:
      "Your Bridgelands detached-home VIP registration has been received. You will be notified when floor plans and pricing are released.",
    h1: "You are on the Bridgelands detached VIP list",
    robots: { index: false, follow: true },
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy — Bridgelands Detached Homes",
    description:
      "How this independent Bridgelands detached-home information site collects, stores, and uses registration information.",
    h1: "Privacy Policy",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use — Bridgelands Detached Homes",
    description:
      "Terms of use for this independent Bridgelands detached-home information and registration website.",
    h1: "Terms of Use",
  },
} as const satisfies Record<string, PageMeta>;

export const NAV = [
  { href: "/collections", label: "Collection" },
  { href: "/pricing", label: "Pricing" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
] as const;

/** Keep `public/sitemap.xml` and `public/sitemap/sitemap.xml` in sync. */
export const SITEMAP_ROUTES: {
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/collections", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/location", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "weekly", priority: 0.8 },
  { path: "/register", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
  { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
];

export const HOME_ANSWER =
  "A detached-home collection at Bridgelands has not been officially confirmed by Arista Homes, Deco Homes, or Opus Homes as of August 2026. Based on the same builder trio's other joint communities — SouthCal in Caledon and The Castle Mile in Brampton, both of which include detached homes alongside townhomes — a comparable detached collection at Bridgelands is a reasonable expectation pending official confirmation.";

export const HOME_WHAT_IS_ANSWER =
  "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, developed by Arista Homes, Deco Homes, and Opus Homes — the same trio behind SouthCal in Caledon and The Castle Mile in Brampton.";

export const QUICK_FACTS: { field: string; value: string }[] = [
  { field: "Builders", value: "Arista Homes, Deco Homes, Opus Homes" },
  { field: "Product Focus", value: "Detached-home collection (expected, unconfirmed)" },
  { field: "Intersection", value: "Weston Road & Teston Road" },
  { field: "City", value: "Vaughan (Woodbridge), Ontario" },
  { field: "Ownership Structure", value: "Freehold expected, based on comparable builder projects" },
  { field: "Starting Price", value: "To be announced" },
  { field: "Status", value: "Coming Soon — VIP Registration Open" },
];

export const HOME_OVERVIEW: string[] = [
  "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, a neighbourhood within the City of Vaughan, Ontario, developed by a partnership of Arista Homes, Deco Homes, and Opus Homes. This site focuses specifically on what is known — and not yet known — about a potential detached-home collection within the community.",
  "While Bridgelands' exact home types have not been officially confirmed, the same three-builder partnership has a track record of including detached homes alongside townhomes in its other joint GTA communities. SouthCal, near Hurontario Street and Highway 410 in Caledon, and The Castle Mile, at 9491 The Gore Road in Brampton's Castlemore area, both feature detached-home offerings, with The Castle Mile in particular noted for expansive ravine lots.",
  "The Castle Mile's mixed detached and townhome collection ranged from 1,583 to 4,050 square feet, which offers a rough sense of the scale these builders typically work at — though this is general context, not a confirmed size range for any future Bridgelands detached-home product.",
  "As of August 2026, no detached-home floor plans, lot widths, or pricing have been released for Bridgelands. Buyers interested specifically in the detached format can register here for priority notification the moment the builders confirm what's included in the community's product mix.",
];

export const HOME_WHY_DETACHED: string[] = [
  "Pages that treat Bridgelands as one undifferentiated “new community in Woodbridge” leave a single-family buyer without a place to stand. The question that actually matters on a detached search is whether a lot — not a townhome block — is likely to appear in the mix, and what this builder trio has already done with detached product elsewhere in the GTA.",
  "This site exists for that question. It does not impersonate Arista Homes, Deco Homes, or Opus Homes. It does not invent lot widths, garage counts, or a price list. It gathers the sourced facts that apply to a detached-home buyer at Weston Road and Teston Road, labels what remains unverified, and sends readers to bridgelands-woodbridge.ca whenever the answer is about builders, townhomes, or the wider Vaughan area rather than the single-family line.",
  "For a household comparing new detached homes across the north-west GTA in 2026, the public pattern is this: the same three builders have already put detached houses on the ground — or into pre-construction registration — at SouthCal in Caledon and at The Castle Mile in Brampton. A third-party source describes The Castle Mile's mixed collection as 1,583 to 4,050 square feet, with some homes on expansive ravine lots and a completion window in 2025. None of those figures is a Bridgelands specification.",
  "What a Woodbridge detached buyer can do today is narrow. Register for notice. Read the comparable product context. Treat every lot width, square-footage band, and occupancy date that does not come from the builders as unconfirmed. That is the honest state of the market as of August 29, 2026.",
];

export const HOME_BUYER_NOTES: string[] = [
  "A detached lot at a master-planned community is a different purchase from a townhome even when both sit on the same street grid. Single-family product typically trades a higher entry price for a private lot, no party wall, and a garage configuration that a move-up household often treats as non-negotiable. Bridgelands has not confirmed the detached product, the lot widths, or the tenure. Freehold is the working assumption only because SouthCal and The Castle Mile used it for their single-family lines.",
  "VIP registration on this site does not reserve a lot, lock a price, or collect a deposit. It records a name, email, phone number, whether the registrant is a licensed real estate agent, and CASL consent, so that a detached-interested buyer can be notified if and when floor plans are released. There is no phone number on this site and no named salesperson.",
  "Buyers who already know they want attached product should not treat this page as the last word. Townhome-specific coverage lives at bridgelandstowns.ca. The comprehensive project hub — builders, general location, and the full area guide — lives at bridgelands-woodbridge.ca. This domain is the detached-collection spotlight, and it stays inside that brief.",
];

export const COLLECTIONS_ANSWER =
  "A specific detached-home collection has not yet been confirmed for Bridgelands. Based on the builder trio's comparable communities, a detached offering — potentially spanning multiple lot widths or configurations — is a reasonable expectation pending official release.";

export const COLLECTIONS_SIZE_ANSWER =
  "Exact sizes for a Bridgelands detached-home collection have not been released. For general context, The Castle Mile's mixed detached and townhome product from the same builder trio ranged from 1,583 to 4,050 square feet, with some homes on expansive ravine lots — this is general context, not a confirmed size range for Bridgelands.";

export const COLLECTIONS_LOTS_ANSWER =
  "Lot widths for a Bridgelands detached-home collection have not been officially confirmed. The builder trio's other joint communities have offered a range of detached lot widths, but no specific figures have been published for Bridgelands.";

export const COLLECTION_CARD = {
  slug: "detached-homes",
  name: "Detached Home Collection (expected)",
  status: "Lot widths, sizes, and pricing not yet confirmed",
  body: "Comparable product from the same builder trio at The Castle Mile ranged 1,583–4,050 sq ft across its full mixed collection, with some homes on expansive ravine lots. Register for release notification.",
};

export const COLLECTIONS_BODY: string[] = [
  "Arista Homes, Deco Homes, and Opus Homes have not published a Bridgelands detached brochure, elevation set, lot schedule, or site plan that names single-family homes as of August 29, 2026. Third-party project pages that describe the community as Coming Soon also leave home types, sizes, and lot widths as to be announced. Anyone stating a confirmed Bridgelands detached lineup is ahead of the builders.",
  "The reason this page still discusses a detached collection is the trio's other joint work. SouthCal, near Hurontario Street and Highway 410 in Caledon, includes detached homes in an active pre-construction registration alongside freehold townhomes. The Castle Mile, at 9491 The Gore Road in Brampton's Castlemore area, included detached homes in a mixed collection, with some of those homes described by a third-party source as sitting on expansive ravine lots. Those two communities are not Bridgelands. Their plans are not transferable. They are the only public pattern available for how this partnership has treated single-family product.",
  "When a three-builder community does include detached homes, the offering is often split by lot width — 36-foot, 40-foot, 43-foot, 50-foot and similar bands are common language in GTA single-family launches — or by which partner constructs which street. That division has been visible at the group's other joint sites. It has not been disclosed for Bridgelands. Until a site plan names which builder is responsible for the detached portion, if a detached portion is confirmed at all, treat any “Arista singles” or “Opus lots” claim as speculation.",
  "Square footage is the number buyers ask for first and the number this page cannot give. The Castle Mile range of 1,583 to 4,050 square feet covers both detached homes and townhomes in one mixed collection. It is not a Bridgelands detached size band. A 20-foot town and a 50-foot detached lot can both sit inside that span. Registering here is how a single-family-focused buyer gets the actual numbers if they are released, rather than borrowing Brampton figures.",
  "Garage configuration, basement options, ravine or premium-lot premiums, and which elevations are included in the base price are likewise unpublished. GTA detached product from this builder group has historically included a mix of two-storey singles with double-car garages on a range of lot widths, but that history is not a specification for Woodbridge. This page will replace “expected” language with confirmed collections the moment the builders publish them.",
];

export const COLLECTIONS_WHAT_TO_WATCH: { title: string; body: string }[] = [
  {
    title: "A published lot schedule",
    body: "The first document that turns this page from expectation into fact is a Bridgelands collection list that names detached homes as a product line, with lot widths or model names. Until that list exists, the detached collection remains expected, not confirmed.",
  },
  {
    title: "Lot width bands, not just square footage",
    body: "A 36-foot lot and a 50-foot lot are different purchases even when both are labelled detached. SouthCal and The Castle Mile have offered a range of detached lot widths in other municipalities. No specific figures have been published for Bridgelands.",
  },
  {
    title: "Which builder constructs the singles",
    body: "Multi-builder communities sometimes assign towns to one partner and detached homes to another. That assignment is unpublished for Bridgelands. Builder-spotlight sites at bridgelandsarista.ca, bridgelandsdeco.ca, and bridgelandsopus.ca cover each firm in more depth without answering this site-specific question.",
  },
];

export const COLLECTIONS_HOW_TO_READ: string[] = [
  "Read “expected” as a statement about pattern, not a promise about Bridgelands. The pattern is that Arista Homes, Deco Homes, and Opus Homes have put detached houses into their other joint GTA communities. The promise would be a Bridgelands site plan. Only the builders can issue that.",
  "If a detached line is confirmed, the next documents that matter are the lot fabric (widths, depths, premium positions), the model matrix (storeys, garage, included square footage), and the allocation between the three partners. None of those documents is public as of August 29, 2026. A registration on this site is a request to be told when they are.",
];

export const PRICING_ANSWER =
  "Pricing for Bridgelands detached homes has not yet been announced. As comparable context only, The Castle Mile — from the same builder trio — offered a mixed detached and townhome collection ranging from 1,583 to 4,050 square feet; this is not a price or size guarantee for Bridgelands.";

export const PRICING_DEPOSIT_ANSWER =
  "No deposit structure has been published for Bridgelands, including for a potential detached-home collection, as of August 2026. Registered buyers are typically notified of deposit terms once VIP pricing is released.";

export const PRICING_ROWS: { field: string; status: string }[] = [
  { field: "Starting Price", status: "To be announced" },
  { field: "Deposit Structure", status: "To be announced" },
  { field: "Maintenance Fees", status: "To be announced" },
  { field: "Tentative Occupancy", status: "To be announced" },
  { field: "Incentives", status: "To be announced" },
  { field: "Lot Widths / Sizes", status: "To be announced" },
];

export const PRICING_BODY: string[] = [
  "A price for a Bridgelands detached home cannot be stated because Arista Homes, Deco Homes, and Opus Homes have not released one. Coming Soon, in this context, means the sales package — a price list, a deposit schedule, model names, lot premiums, and a launch date — has not been published. This page records that absence in public rather than hiding it behind a “call for pricing” wall.",
  "Comparable communities are useful for scale and useless for a budget. The Castle Mile's mixed detached and townhome collection from the same trio spanned 1,583 to 4,050 square feet. That is a size observation from a Brampton project, not a Woodbridge sticker price. SouthCal's Caledon detached homes are in active pre-construction registration with their own, separate commercial terms. Neither project's pricing should be copied onto Bridgelands.",
  "Deposit structure is equally unpublished. GTA freehold-detached launches often use a staged deposit payable over months after a firm agreement, sometimes with an extended schedule offered during a VIP window. None of those mechanics have been confirmed for Bridgelands. A third-party source discussing the community in general terms has mentioned VIP-access categories such as early floor-plan access and a potential extended deposit, without dollar amounts or a detached-specific schedule. That claim is unverified for this product line.",
  "Maintenance fees on a true freehold detached lot are typically limited to municipal taxes and any parcel-of-tied-land or common-element arrangement the plan of subdivision creates for shared streets or stormwater. If Bridgelands detached homes are freehold in the same sense as the trio's other joint communities, monthly condominium fees in the stacked-town sense would not apply. Until tenure is published, any fee figure is invented.",
  "Occupancy is to be announced. The Castle Mile has been described by a third-party source as set to complete in 2025, which would place that Brampton community later in its cycle than a Coming Soon Woodbridge launch. That timeline does not describe Bridgelands. Incentives, lot premiums, assignment credits, and design-studio allowances are likewise unpublished. This site will not fabricate urgency or a “starting from” number to fill the table.",
];

export const PRICING_HOW_TO_READ: string[] = [
  "Read every “to be announced” cell as a current fact, not a missing graphic. The honest commercial status of a potential Bridgelands detached home as of August 29, 2026 is that there is no public price, no public deposit, and no public occupancy. Registration does not lock any of those terms.",
  "When a price list appears, detached buyers should compare it against the townhome line at the same community — if a townhome line is confirmed — rather than against SouthCal or The Castle Mile. Lot width, included finishes, development charges, and ravine or corner premiums can move single-family pricing in a different direction from attached product even on the same street. Until that list exists, the only action this site offers is a free VIP registration with no phone call.",
];

export const LOCATION_ANSWER =
  "Bridgelands is located near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, roughly a 10–13 minute drive from Maple GO Station.";

export const LOCATION_TRANSIT =
  "A third-party source places Bridgelands roughly a 10–13 minute drive from Maple GO Station, with a GO train ride to Toronto's Union Station of approximately 34 minutes, and close to Highways 400, 407, and 427.";

export const LOCATION_TRANSIT_BODY: string[] = [
  "For a detached-home household, the commute question is usually whether two cars remain a requirement. At Weston Road and Teston Road, the working answer from a third-party source is a 10–13 minute drive to Maple GO Station, then about 34 minutes on the Barrie line to Union Station. That is a drive-to-GO pattern, not a published walk-to-platform promise. Bridgelands has not released a site plan showing pedestrian connections, a shuttle, or parking for the GO lot.",
  "Highways 400, 407, and 427 sit within reach of the same intersection, which is how many Woodbridge and Maple households already move toward Brampton, Pearson Airport, and midtown Toronto. A single-family buyer who already drives those corridors can treat the highway access as an existing regional fact. A buyer who needs a station at the end of a sidewalk should wait for a plan; this page will not invent one.",
];

export const LOCATION_SHOPPING =
  "Vaughan Mills Mall is cited by a third-party source as roughly an 8–11 minute drive away, and Cortellucci Vaughan Hospital as roughly a 7-minute drive away.";

export const LOCATION_SCHOOLS =
  "Nearby schools cited by a third-party source include Tommy Douglas Secondary School, Johnny Lombardi Public School, Teston Village Public School, Maple High School, and St. Joan of Arc Catholic High School. Exact catchment boundaries for Bridgelands have not been independently confirmed. For the full location breakdown including parks, recreation, and the complete school and healthcare context, see bridgelands-woodbridge.ca/location.";

export const LOCATION_COMPARE_ANSWER =
  "Bridgelands and SouthCal are separate communities from the same builder trio — Arista Homes, Deco Homes, and Opus Homes — in different cities (Vaughan vs. Caledon). SouthCal's detached offering is in active pre-construction registration; a Bridgelands detached collection has not yet been confirmed or priced.";

export const LOCATION_RECREATION =
  "Nearby recreational areas cited by a third-party source for the Weston Road and Teston Road area include North Maple Regional Park, Eagles Nest Golf Club, Copper Creek Golf Club, Chatfield District Park, Nashville Conservation Reserve, Maple Downs Golf & Country Club, Mackenzie Glen District Park, Wildberry Pond, Cold Creek Conservation Area, and Maple Nature Reserve Trail. Those amenities sit in the same part of Vaughan as the proposed community; they are not Bridgelands amenities until a site plan says so.";

export const COMPARISON_INTRO =
  "Bridgelands, SouthCal, and The Castle Mile share a builder partnership — Arista Homes, Deco Homes, and Opus Homes — and nothing else that a detached-home buyer can rely on. They sit in three municipalities, follow three timelines, and will not share a price list or a floor-plan book.";

export const COMPARISON_ROWS: {
  community: string;
  location: string;
  status: string;
  highlight?: boolean;
}[] = [
  {
    community: "Bridgelands",
    location: "Weston Rd & Teston Rd, Woodbridge",
    status: "Expected, unconfirmed",
    highlight: true,
  },
  {
    community: "SouthCal",
    location: "Hurontario St & Hwy 410, Caledon",
    status: "Active — detached homes in pre-construction",
  },
  {
    community: "The Castle Mile",
    location: "9491 The Gore Rd, Castlemore (Brampton)",
    status: "Detached homes on ravine lots, 1,583–4,050 sq ft mixed collection, completing 2025",
  },
];

export const LOCATION_AREA_BODY: string[] = [
  "Woodbridge is a neighbourhood inside the City of Vaughan, in York Region. The Weston Road and Teston Road intersection sits toward the north of that neighbourhood, closer to Maple's GO station and hospital cluster than to Woodbridge's older retail strips. A detached home here, if confirmed, would be a Vaughan purchase with York Region taxes, York Region school boards, and a Woodbridge mailing identity — not a Caledon or Brampton purchase wearing the same builder names.",
  "Vaughan Mills Mall, cited at roughly 8–11 minutes' drive by a third-party source, is the large enclosed retail node most often attached to this geography. Cortellucci Vaughan Hospital, cited at roughly seven minutes, is the acute-care anchor that earlier generations of Woodbridge buyers did not have nearby. Everyday grocery and plaza retail along Weston Road and Major Mackenzie Drive is already built; it is not a future amenity on a Bridgelands brochure.",
];

export const LOCATION_COMPARE_BODY: string[] = [
  "SouthCal is the live comparable for a buyer who wants detached product from this trio today. It is in Caledon, near Hurontario Street and Highway 410, and its detached offering is in active pre-construction registration. Bridgelands is in Vaughan. The two sites do not share a price list, a lot fabric, or a launch date. Borrowing SouthCal's commercial terms and pasting them onto Weston Road would be a category error.",
  "The Castle Mile is the size-and-lot comparable, not the timeline comparable. A third-party source describes a mixed detached and townhome collection of 1,583 to 4,050 square feet, with some homes on expansive ravine lots, at 9491 The Gore Road in Brampton's Castlemore area, set to complete in 2025. That is a Brampton community later in its cycle. It is not a preview of Bridgelands lot premiums, and it is not a guarantee that Woodbridge will have ravine lots at all.",
];

export const REGISTER_ANSWER =
  "Buyers can register for VIP access by submitting their name, email, and phone number through this site's registration form. Registration is free, requires no phone call, and provides priority notification when detached-home floor plans and pricing are released.";

export const REGISTER_PAGE_ANSWER =
  "Registering for VIP access to Bridgelands detached-home updates is free, takes under a minute, and requires no phone call.";

export const FAQ_INTRO =
  "Answers below reflect the most current publicly available information as of August 29, 2026.";

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Will Bridgelands have detached homes?",
    a: "A detached-home collection at Bridgelands has not been officially confirmed by Arista Homes, Deco Homes, or Opus Homes as of August 2026. Based on the same builder trio's other joint communities — SouthCal in Caledon and The Castle Mile in Brampton, both of which include detached homes alongside townhomes — a comparable detached collection at Bridgelands is a reasonable expectation pending official confirmation.",
  },
  {
    q: "How much do Bridgelands detached homes cost?",
    a: "Pricing for Bridgelands detached homes has not yet been announced. As comparable context only, The Castle Mile — from the same builder trio — offered a mixed detached and townhome collection ranging from 1,583 to 4,050 square feet; this is not a price or size guarantee for Bridgelands.",
  },
  {
    q: "How big are Bridgelands detached homes expected to be?",
    a: "Exact sizes for a Bridgelands detached-home collection have not been released. For general context, The Castle Mile's mixed detached and townhome product from the same builder trio ranged from 1,583 to 4,050 square feet, with some homes on expansive ravine lots — this is general context, not a confirmed size range for Bridgelands.",
  },
  {
    q: "What lot sizes will Bridgelands detached homes have?",
    a: "Lot widths for a Bridgelands detached-home collection have not been officially confirmed. The builder trio's other joint communities have offered a range of detached lot widths, but no specific figures have been published for Bridgelands.",
  },
  {
    q: "What is Bridgelands and who is building it?",
    a: "Bridgelands is a “Coming Soon” master-planned community near Weston Road and Teston Road in Woodbridge, Vaughan, Ontario, developed by Arista Homes, Deco Homes, and Opus Homes — the same trio behind SouthCal in Caledon and The Castle Mile in Brampton.",
  },
  {
    q: "When will Bridgelands detached homes launch?",
    a: "No public launch date has been announced for any Bridgelands product, including a potential detached-home collection, as of August 2026. The community is listed as “Coming Soon.” Registered buyers are typically notified first when floor plans and pricing are released.",
  },
  {
    q: "How do Bridgelands detached homes compare to SouthCal's?",
    a: "Bridgelands and SouthCal are separate communities from the same builder trio — Arista Homes, Deco Homes, and Opus Homes — in different cities (Vaughan vs. Caledon). SouthCal's detached offering is in active pre-construction registration; a Bridgelands detached collection has not yet been confirmed or priced.",
  },
  {
    q: "What schools are near Bridgelands detached homes?",
    a: "A third-party source lists nearby schools including Tommy Douglas Secondary School, Johnny Lombardi Public School, Teston Village Public School, Maple High School, and St. Joan of Arc Catholic High School for the Weston Road and Teston Road area.",
  },
  {
    q: "What transit is near Bridgelands detached homes?",
    a: "Bridgelands is positioned roughly a 10–13 minute drive from Maple GO Station, with a GO train ride to Toronto's Union Station of approximately 34 minutes, and close to Highways 400, 407, and 427.",
  },
  {
    q: "How do I register for VIP access to Bridgelands detached homes?",
    a: "Buyers can register for VIP access by submitting their name, email, and phone number through this site's registration form. Registration is free, requires no phone call, and provides priority notification when detached-home floor plans and pricing are released.",
  },
  {
    q: "Is there a deposit structure for Bridgelands detached homes?",
    a: "No deposit structure has been published for Bridgelands, including for a potential detached-home collection, as of August 2026. Registered buyers are typically notified of deposit terms once VIP pricing is released.",
  },
  {
    q: "What is the assignment policy for Bridgelands detached homes?",
    a: "No assignment policy has been published for Bridgelands as of August 2026. Assignment terms are typically disclosed in the Agreement of Purchase and Sale at VIP launch.",
  },
  {
    q: "Is there a cost to register for Bridgelands detached-home updates?",
    a: "No. Registration is free and creates no purchase obligation — no phone call required.",
  },
  {
    q: "Who is building Bridgelands?",
    a: "Arista Homes, Deco Homes, and Opus Homes, in partnership.",
  },
  {
    q: "How is this website related to the builders?",
    a: "This is an independent information resource focused on Bridgelands' potential detached-home product. It is not affiliated with or endorsed by Arista Homes, Deco Homes, or Opus Homes.",
  },
];

export const SIBLING_SITES: { domain: string; angle: string; url: string }[] = [
  {
    domain: "bridgelands-woodbridge.ca",
    angle: "Comprehensive project hub",
    url: "https://bridgelands-woodbridge.ca",
  },
  {
    domain: "bridgelandscommunities.ca",
    angle: "Woodbridge and Vaughan-area community guide",
    url: "https://bridgelandscommunities.ca",
  },
  {
    domain: "bridgelandscommunity.ca",
    angle: "Life within the planned Bridgelands community",
    url: "https://bridgelandscommunity.ca",
  },
  {
    domain: "bridgelandstowns.ca",
    angle: "Townhome collection",
    url: "https://bridgelandstowns.ca",
  },
  {
    domain: "bridgelandsarista.ca",
    angle: "Arista Homes spotlight",
    url: "https://bridgelandsarista.ca",
  },
  {
    domain: "bridgelandsdeco.ca",
    angle: "Deco Homes spotlight",
    url: "https://bridgelandsdeco.ca",
  },
  {
    domain: "bridgelandsopus.ca",
    angle: "Opus Homes spotlight",
    url: "https://bridgelandsopus.ca",
  },
];

export const FOOTER_BLURB =
  "Independent information and VIP registration focused on the potential detached-home collection at Bridgelands, a Coming Soon master-planned community in Woodbridge, Vaughan.";
