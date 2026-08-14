// Central demo data for the FoundrX platform.
// In production these would come from CIPC, SARS, and the credit bureaus.

export const company = {
  name: "Lebo Textiles (Pty) Ltd",
  director: "Lebogang Mokoena",
  cipc: "2021 / 448210 / 07",
  sector: "Manufacturing — Apparel",
  province: "Gauteng",
  stage: 2, // 1 Formalized, 2 Investment Ready, 3 Incubated, 4 Commercial Supply Chain
};

// Dual credit intelligence
export const credit = {
  personal: {
    label: "Director Personal Score",
    score: 648,
    min: 0,
    max: 850,
    band: "Fair",
    change: +18,
    factors: [
      { name: "Payment history", value: 72, note: "1 late payment in last 12 months" },
      { name: "Credit utilisation", value: 44, note: "58% of available limit used" },
      { name: "Credit age", value: 66, note: "Oldest account 6y 2m" },
      { name: "Recent enquiries", value: 81, note: "2 enquiries in 6 months" },
      { name: "Public records", value: 90, note: "No judgements on file" },
    ],
  },
  business: {
    label: "Business Commercial Score",
    score: 512,
    min: 0,
    max: 750,
    band: "Building",
    change: +34,
    factors: [
      { name: "Trade payment record", value: 58, note: "2 suppliers paid 30+ days late" },
      { name: "Financial ratios", value: 47, note: "Thin operating margin" },
      { name: "Business age", value: 40, note: "Trading 3y 1m" },
      { name: "Credit exposure", value: 61, note: "R120k facility, 33% drawn" },
      { name: "Compliance filings", value: 74, note: "CIPC annual return up to date" },
    ],
  },
};

// 12-month score trend for the chart
export const scoreTrend = [
  { month: "Sep", personal: 601, business: 442 },
  { month: "Oct", personal: 605, business: 451 },
  { month: "Nov", personal: 612, business: 458 },
  { month: "Dec", personal: 618, business: 470 },
  { month: "Jan", personal: 624, business: 478 },
  { month: "Feb", personal: 622, business: 486 },
  { month: "Mar", personal: 630, business: 491 },
  { month: "Apr", personal: 634, business: 495 },
  { month: "May", personal: 639, business: 500 },
  { month: "Jun", personal: 641, business: 504 },
  { month: "Jul", personal: 645, business: 508 },
  { month: "Aug", personal: 648, business: 512 },
];

export const fundingReadiness = {
  overall: 63,
  breakdown: [
    { model: "Grant / Pre-Seed", readiness: 88 },
    { model: "Blended Finance", readiness: 66 },
    { model: "Debt", readiness: 54 },
    { model: "Equity / Venture", readiness: 41 },
  ],
};

// Credit repair action plan — how to improve
export const repairPlan = [
  {
    id: 1,
    title: "Clear the 2 overdue supplier accounts",
    impact: "High",
    lift: "+40 business pts",
    detail:
      "Two trade accounts are 30+ days overdue. Settling these and requesting an updated status removes the strongest negative marker on the commercial profile.",
    done: false,
  },
  {
    id: 2,
    title: "Bring utilisation below 30%",
    impact: "High",
    lift: "+25 personal pts",
    detail:
      "The director revolving facility is 58% drawn. Paying it down under 30% of the limit is the fastest lever on the personal score.",
    done: false,
  },
  {
    id: 3,
    title: "Dispute the duplicate enquiry",
    impact: "Medium",
    lift: "+8 personal pts",
    detail:
      "A hard enquiry from March appears twice. Raise a dispute with the bureau; duplicates are removed within 20 business days.",
    done: true,
  },
  {
    id: 4,
    title: "Set up debit-order autopay",
    impact: "Medium",
    lift: "protects history",
    detail:
      "Automating minimum payments prevents future late marks, which are the single largest factor in both scores.",
    done: false,
  },
  {
    id: 5,
    title: "File the outstanding SARS provisional return",
    impact: "Medium",
    lift: "unlocks funding checks",
    detail:
      "A current Tax Clearance / PIN is required by most funders. Filing now keeps the compliance index green.",
    done: false,
  },
];

// FoundrVault — what the user needs to submit
export const documents = [
  {
    id: "cipc",
    name: "CIPC Registration (CoR 14.3)",
    why: "Proves the company is legally formalised.",
    status: "verified",
    required: true,
  },
  {
    id: "tax",
    name: "SARS Tax Clearance / PIN",
    why: "Confirms tax compliance — required by nearly every funder.",
    status: "expiring",
    required: true,
  },
  {
    id: "bbbee",
    name: "B-BBEE Affidavit or Certificate",
    why: "Unlocks preferential procurement and ESD spend.",
    status: "verified",
    required: true,
  },
  {
    id: "bank",
    name: "6 Months Bank Statements",
    why: "Used for affordability and cash-flow assessment.",
    status: "missing",
    required: true,
  },
  {
    id: "id",
    name: "Director ID Document",
    why: "Identity verification and personal credit consent.",
    status: "verified",
    required: true,
  },
  {
    id: "fin",
    name: "Latest Financial Statements",
    why: "Drives the commercial credit and readiness scoring.",
    status: "missing",
    required: false,
  },
  {
    id: "sabs",
    name: "SABS / Product Compliance",
    why: "Needed for corporate supply-chain onboarding.",
    status: "missing",
    required: false,
  },
];

// Partner / incubator cohorts
export const cohorts = [
  {
    id: "gauteng",
    name: "Gauteng e-Gov Cohort",
    smmes: 42,
    funded: 18,
    completion: 61,
    stages: { formalized: 42, investmentReady: 27, incubated: 14, supplyChain: 6 },
  },
  {
    id: "youth",
    name: "Youth Business Stream",
    smmes: 30,
    funded: 9,
    completion: 48,
    stages: { formalized: 30, investmentReady: 16, incubated: 7, supplyChain: 2 },
  },
  {
    id: "women",
    name: "Women-Led Enterprise",
    smmes: 24,
    funded: 12,
    completion: 72,
    stages: { formalized: 24, investmentReady: 20, incubated: 11, supplyChain: 5 },
  },
  {
    id: "township",
    name: "Township Tech",
    smmes: 36,
    funded: 14,
    completion: 53,
    stages: { formalized: 36, investmentReady: 21, incubated: 10, supplyChain: 3 },
  },
];

// Capital curve — SMMEs moving across funding models over time
export const capitalCurve = [
  { quarter: "Q1", grant: 40, blended: 12, debt: 5, equity: 1 },
  { quarter: "Q2", grant: 34, blended: 19, debt: 9, equity: 2 },
  { quarter: "Q3", grant: 28, blended: 24, debt: 14, equity: 4 },
  { quarter: "Q4", grant: 21, blended: 27, debt: 19, equity: 7 },
];

export const impact = [
  { label: "Jobs created", value: "1,284" },
  { label: "Revenue growth (YoY)", value: "+38%" },
  { label: "Compliance milestones", value: "3,110" },
  { label: "Program completion", value: "60%" },
];

export const feed = [
  {
    id: 1,
    author: "FoundrX Programs",
    role: "Announcement",
    time: "2h ago",
    text: "Gauteng e-Gov procurement window opens Monday — SMMEs at Stage 2+ can now apply for the R500k supply-chain pilot.",
  },
  {
    id: 2,
    author: "Lebo Textiles",
    role: "Founder update",
    time: "1d ago",
    text: "Just cleared our SARS filing 🎉 Compliance index back to green. Looking for a packaging partner in Gauteng — DM me.",
  },
  {
    id: 3,
    author: "Naledi Advisory",
    role: "Mentor",
    time: "3d ago",
    text: "New office-hours slots this week for anyone working on their funding readiness pack. Book via the Advisory panel.",
  },
];

export const mentors = [
  { name: "Naledi Dlamini", focus: "Funding readiness & pitch", next: "Thu 14:00", slotsAvailable: 3, slotsTotal: 5 },
  { name: "Sipho Khumalo", focus: "Supply-chain onboarding", next: "Fri 10:30", slotsAvailable: 1, slotsTotal: 4 },
  { name: "Aisha Patel", focus: "Financial governance", next: "Mon 09:00", slotsAvailable: 0, slotsTotal: 4 },
];

export const stageLabels = [
  "Formalized",
  "Investment Ready",
  "Incubated",
  "Commercial Supply Chain",
];

// ---- Credit utilisation (personal revolving credit) ----
export const utilisation = {
  used: 6960, // R
  limit: 12000, // R
  get ratio() {
    return Math.round((this.used / this.limit) * 100);
  },
  healthyMax: 30, // %
  whatMakesItBad: [
    "You're using 58% of your available limit — anything above 30% signals risk to lenders.",
    "High balances carried month to month suggest you may be over-reliant on credit.",
    "A single maxed-out card hurts more than the same balance spread across several accounts.",
    "Utilisation is recalculated on every statement, so a high balance drags the score every month it stays up.",
  ],
  howToFix: [
    "Pay the balance down below R3,600 (30% of your R12,000 limit) — this is the single fastest lift.",
    "Make a mid-cycle payment before the statement date so a lower balance is what gets reported.",
    "Ask your provider for a limit increase (without spending more) to lower the ratio automatically.",
    "Spread spending across accounts instead of maxing one; keep each below 30%.",
  ],
};

// ---- Debt composition (for the pie chart) ----
export const debtComposition = [
  { name: "Revolving / credit card", value: 45 },
  { name: "Vehicle finance", value: 26 },
  { name: "Overdraft", value: 17 },
  { name: "Store accounts", value: 12 },
];

// ---- Monthly revenue vs expenses (bar graph) ----
export const revenueVsExpenses = [
  { month: "Mar", revenue: 82, expenses: 61 },
  { month: "Apr", revenue: 90, expenses: 64 },
  { month: "May", revenue: 88, expenses: 66 },
  { month: "Jun", revenue: 104, expenses: 70 },
  { month: "Jul", revenue: 118, expenses: 74 },
  { month: "Aug", revenue: 131, expenses: 79 },
];

// ---- Radar / spider: common credit dimensions, personal vs business record ----
export const radarFactors = [
  { dimension: "Payment behaviour", personal: 72, business: 58 },
  { dimension: "Utilisation / exposure", personal: 44, business: 61 },
  { dimension: "Account age", personal: 66, business: 40 },
  { dimension: "Enquiries", personal: 81, business: 70 },
  { dimension: "Public records", personal: 90, business: 74 },
  { dimension: "Financial strength", personal: 60, business: 47 },
];
