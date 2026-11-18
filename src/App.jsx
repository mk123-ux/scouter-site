import React, { useState, useMemo, useEffect, useId } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronDown,
  ExternalLink,
  Film,
  Lock,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  Plane,
  Play,
  Scale,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Trophy,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

const APP_URL = "https://scouter-xi.vercel.app/";

/* ------------------------------------------------------------------ */
/* DEMO ATHLETE DATABASE (Ages 14–25 · Interactive Live Demo)         */
/* ------------------------------------------------------------------ */
const DEMO_ATHLETES = [
  {
    id: 1,
    name: "Luka Mchedlishvili",
    age: 16,
    ageGroup: "U17",
    position: "Left Back",
    region: "Imereti",
    city: "Kutaisi",
    height: "179 cm",
    foot: "Left",
    club: "FC Torpedo Youth",
    verified: true,
    isMinor: true,
    rating: 84,
    sprint30m: "4.08 s",
    passAccuracy: "87%",
    pace: 88,
    stamina: 85,
    fullMatches: 6,
    highlights: 4,
    gradient: "from-blue-600 to-emerald-500",
    bioEn:
      "Explosive overlapping full-back with high stamina and verified federation & regional combine logs from Western Georgia.",
    bioKa:
      "სწრაფი მარცხენა მცველი მაღალი გამძლეობითა და დასავლეთ საქართველოს ლიგის ფედერაციისა და Combine ტესტებით ვერიფიცირებული მონაცემებით.",
  },
  {
    id: 2,
    name: "Giorgi Kvaratskhelia",
    age: 17,
    ageGroup: "U17",
    position: "Striker",
    region: "Samegrelo",
    city: "Zugdidi",
    height: "183 cm",
    foot: "Right",
    club: "Zugdidi Academy",
    verified: true,
    isMinor: true,
    rating: 87,
    sprint30m: "3.98 s",
    passAccuracy: "81%",
    pace: 91,
    stamina: 83,
    fullMatches: 8,
    highlights: 5,
    gradient: "from-emerald-600 to-teal-500",
    bioEn:
      "Clinical central forward with strong aerial presence and 14 goals in 18 verified regional academy fixtures.",
    bioKa:
      "ცენტრალური თავდამსხმელი ძლიერი ფიზიკური მონაცემებითა და 18 ვერიფიცირებულ რეგიონულ მატჩში გატანილი 14 გოლით.",
  },
  {
    id: 3,
    name: "Dato Beridze",
    age: 20,
    ageGroup: "U23 / Senior",
    position: "Midfielder",
    region: "Tbilisi",
    city: "Tbilisi",
    height: "178 cm",
    foot: "Both",
    club: "Saburtalo II",
    verified: true,
    isMinor: false,
    rating: 86,
    sprint30m: "4.11 s",
    passAccuracy: "91%",
    pace: 83,
    stamina: 90,
    fullMatches: 11,
    highlights: 6,
    gradient: "from-indigo-600 to-blue-500",
    bioEn:
      "Box-to-box central midfielder in Liga 2/3 with progressive line-breaking passing and GPS stamina logs.",
    bioKa:
      "ცენტრალური ნახევარმცველი გამორჩეული პასის სიზუსტითა და GPS ფიზიკური დატვირთვის ოფიციალური მონაცემებით.",
  },
  {
    id: 4,
    name: "Nika Lomidze",
    age: 15,
    ageGroup: "U15",
    position: "Striker",
    region: "Adjara",
    city: "Batumi",
    height: "175 cm",
    foot: "Left",
    club: "Batumi Talent Hub",
    verified: true,
    isMinor: true,
    rating: 81,
    sprint30m: "4.12 s",
    passAccuracy: "79%",
    pace: 87,
    stamina: 80,
    fullMatches: 4,
    highlights: 3,
    gradient: "from-cyan-600 to-emerald-500",
    bioEn:
      "Agile inverted winger/striker with high 1v1 dribbling efficiency and verified regional combine agility scores.",
    bioKa:
      "სწრაფი შემტევი 1-1-ზე დრიბლინგის მაღალი მაჩვენებლითა და რეგიონული Combine ტესტების ოფიციალური შედეგებით.",
  },
  {
    id: 5,
    name: "Saba Tkeshelashvili",
    age: 18,
    ageGroup: "U19",
    position: "Goalkeeper",
    region: "Imereti",
    city: "Zestaponi",
    height: "191 cm",
    foot: "Right",
    club: "Imereti Regional XI",
    verified: true,
    isMinor: false,
    rating: 83,
    sprint30m: "4.35 s",
    passAccuracy: "84%",
    pace: 74,
    stamina: 86,
    fullMatches: 7,
    highlights: 4,
    gradient: "from-blue-700 to-indigo-500",
    bioEn:
      "Commanding goalkeeper with strong distribution under pressure and verified reflex test recordings.",
    bioKa:
      "მაღალი მეკარე ბურთის ზუსტი განაწილებითა და რეფლექსების ოფიციალური ვიდეოტესტებით.",
  },
  {
    id: 6,
    name: "Tornike Gelashvili",
    age: 22,
    ageGroup: "U23 / Senior",
    position: "Left Back",
    region: "Tbilisi",
    city: "Tbilisi",
    height: "181 cm",
    foot: "Left",
    club: "Independent / Regional",
    verified: false,
    isMinor: false,
    rating: 78,
    sprint30m: "4.19 s",
    passAccuracy: "80%",
    pace: 84,
    stamina: 82,
    fullMatches: 2,
    highlights: 3,
    gradient: "from-slate-700 to-slate-600",
    bioEn:
      "Self-uploaded senior prospect pending coach/federation verification. Uncut match footage available for review.",
    bioKa:
      "პროფილი ელოდება მწვრთნელის/ფედერაციის ვერიფიკაციას. სრული მატჩის ჩანაწერი ხელმისაწვდომია.",
  },
];

/* ------------------------------------------------------------------ */
/* TRANSLATIONS & STRUCTURED CONTENT (EN / KA)                        */
/* ------------------------------------------------------------------ */
const CONTENT = {
  en: {
    nav: [
      ["home", "Home"],
      ["demo", "Live Demo"],
      ["athletes", "For Athletes"],
      ["clubs", "For Clubs"],
      ["pricing", "Pricing"],
      ["about", "About Us"],
      ["faq", "FAQ"],
    ],
    ctaOpenApp: "Open App",
    ctaContact: "Contact Us",
    hero: {
      badge: "Verified talent intelligence. Global reach.",
      title: "Talent is Universal. Opportunity is Not",
      subtitle:
        "Scouter is a B2B digital scouting intelligence platform - not a social network - connecting verified Georgian athletes (ages 14–25) with European clubs and scouts through uncut match archives and standardized combine data.",
      btnDemo: "Explore Live Demo",
      btnTrial: "Start 14-Day Free Pilot",
      note: "Free forever for athletes · 14-day free pilot for clubs & scouts",
      traction: [
        ["1,200+", "Verified athlete profiles (14–25)"],
        ["18", "Partner academies across Georgia"],
        ["45+", "Active European club scouts"],
        ["100%", "U18 Safeguarding & data verification"],
      ],
      roleAthleteTitle: "I'm an athlete or a parent",
      roleAthleteText:
        "Build a verified scouting dossier, upload uncut matches, and get discovered without $3,500 foreign trial camps.",
      roleAthleteCta: "See athlete benefits",
      roleClubTitle: "I'm a scout or a club",
      roleClubText:
        "Triage verified Georgian talent by combine metrics and 90-minute match footage before booking a single flight.",
      roleClubCta: "See club tools & ROI",
    },
    demo: {
      eyebrow: "Interactive Scouting Workspace",
      title: "Triage verified Georgian talent in seconds",
      subtitle:
        "Test our B2B scouting database (ages 14–25). Filter by position, age group, region, or verification status and inspect full dossiers.",
      filterPos: "Position",
      filterAge: "Age Group (14–25)",
      filterRegion: "Region",
      verifiedOnly: "Verified Only",
      showing: "Showing",
      athletesCount: "athletes",
      openDossier: "Open Full Dossier",
      verifiedBadge: "Federation & Combine Verified",
      pendingBadge: "Pending Verification",
      safeguardingBadge: "U18 Guardian Protected",
      modalMatches: "Full Uncut Matches",
      modalSprint: "30m Sprint",
      modalPass: "Pass Accuracy",
      modalInvite: "Request Trial / Contact Academy",
      modalWatch: "Preview Full 90' Match Footage",
      safeguardingNotice:
        "Child Safeguarding Protocol: This athlete is under 18. Direct messaging routes strictly through verified parents/guardians and licensed academy directors.",
    },
    athletesPage: {
      eyebrow: "For Athletes & Parents (Ages 14–25)",
      title: "Not a social network - a verified scouting database",
      subtitle:
        "Your career is evaluated on standardized combine metrics and uncut 90-minute matches, never on personal connections or family budget.",
      cardShowcaseTitle: "Your Verified EA FC-Style Scouting Card",
      cardShowcaseText:
        "Every verified athlete gets a structured digital dossier. Upgrade to Verified Pro (150 ₾/yr) or join via an Academy Partner (100 ₾/yr) to unlock your shareable EA FC-style player card, priority search placement, and club view analytics.",
      cardToggleBasic: "Free Basic Card",
      cardTogglePro: "Verified Pro Card",
      cardCreateCta: "Generate Your Card in App",
      stepsTitle: "How it works for athletes",
      steps: [
        [
          "Build your structured profile",
          "Add physical metrics, position data, highlights, and uncut 90-minute match recordings.",
        ],
        [
          "Get verified for free",
          "Data is cross-checked with federation match logs, coaches, and regional Combine tests. Verification is 100% free on every plan.",
        ],
        [
          "Get discovered by European clubs",
          "Smart matching algorithms place your verified dossier directly in front of international scouts searching for your profile.",
        ],
      ],
      features: [
        [
          "Verified data provenance",
          "Cross-checked with federation records, local coaches, and Scouter Combine tests - free on all plans.",
        ],
        [
          "Uncut 90' matches count",
          "Clubs recruit based on full-length game footage rather than edited 2-minute highlight clips.",
        ],
        [
          "From any Georgian region",
          "Showcase your talent from Zugdidi, Kutaisi, or Batumi without relocating to Tbilisi.",
        ],
        [
          "Zero nepotism",
          "Objective physical and tactical metrics give every disciplined athlete an equal international stage.",
        ],
        [
          "Academy partner discounts",
          "Players in partner academies receive full Verified Pro tools at a reduced 100 ₾/year rate.",
        ],
        [
          "Strict U18 safeguarding",
          "Under-18 accounts require verified guardian consent with zero unmoderated stranger DMs.",
        ],
      ],
      bannerTitle: "Skip the $3,500 overseas trial camp",
      bannerText:
        "A two-week European trial camp costs $1,500–3,500 before flights and hotels. A verified Scouter profile is free for life.",
      bannerBtn: "Create Free Profile",
    },
    clubsPage: {
      eyebrow: "For Clubs & International Scouts",
      title: "Evaluate emerging markets with 75% lower scouting cost",
      subtitle:
        "Replace blind international scouting trips with verified combine metrics, federation logs, and uncut 90-minute match archives.",
      stepsTitle: "How it works for clubs",
      steps: [
        [
          "Filter & triage with precision",
          "Search ages 14–25 by position, preferred foot, 30m sprint speed, pass accuracy, and verification status.",
        ],
        [
          "Evaluate remotely",
          "Watch full 90-minute match recordings and review combine physical tests from your scouting room.",
        ],
        [
          "Connect via compliant channels",
          "Message shortlisted players' guardians or licensed academies directly with full safeguarding compliance and zero agent markups.",
        ],
      ],
      features: [
        ["Smart metric filters", "Granular filtering across physical, technical, and positional data."],
        ["AI talent matching", "Automated prospect alerts tailored to your club's tactical profile."],
        ["Verified provenance", "Every verified badge is backed by federation logs, coach sign-off, or combine data."],
        ["Uncut match archives", "Full 90-minute game footage alongside tagged key actions."],
        ["Candidate triage & shortlists", "Compare prospects side-by-side before scheduling live trials."],
        ["Safeguarding-compliant outreach", "Audited, transparent communication with academies and legal guardians."],
      ],
      tripTitle: "One traditional scouting trip to Georgia",
      tripRows: [
        ["Return flight", "€380"],
        ["3 nights hotel", "€270"],
        ["Food & local transport", "€150"],
      ],
      tripTotalLabel: "Total for 1 trip (3–4 days)",
      tripTotalValue: "≈ €800–1,000",
      tripNote: "High risk: if the target player is injured or benched that weekend, the budget is lost.",
      scouterTitle: "With Scouter Club Starter",
      scouterStat: "70–80%",
      scouterSub: "reduction in early-stage scouting expenses",
      scouterText:
        "For less than the cost of a single trip, your scouting staff gets 12 months of unlimited remote access to verified Georgian prospects. Fly only when you are ready to invite or sign.",
      scouterBtn: "Start 14-Day Free Pilot",
    },
    pricingPage: {
      eyebrow: "Transparent Pricing",
      title: "Built for sustainable talent discovery",
      subtitle: "Switch between Club/Scout B2B plans and Athlete B2C plans, or toggle your preferred currency.",
      tabB2B: "For Clubs & Scouts (B2B)",
      tabB2C: "For Athletes & Parents (B2C)",
      popularBadge: "MOST POPULAR",
      b2bPlans: [
        {
          tag: "01 · FREE PILOT",
          name: "14-Day Pilot",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ 14 days",
          note: "No credit card required",
          forWho: "For clubs and scouts testing our verified Georgian talent database before subscribing.",
          items: [
            "1 scout user seat",
            "Browse up to 20 verified athlete dossiers",
            "Standard filters (age 14–25, position, region)",
            "Sample 90-minute match & combine logs",
            "Full U18 safeguarding compliance",
          ],
          cta: "Start 14-Day Pilot",
          featured: false,
        },
        {
          tag: "02 · RECOMMENDED",
          name: "Club Starter",
          priceEur: "€700",
          priceGel: "2,000 ₾",
          period: "/ year",
          note: "Best ROI · Less than 1 scouting trip",
          forWho: "For professional clubs and scouting departments seeking full remote evaluation.",
          items: [
            "Up to 3 scout seats per club",
            "Unlimited verified athlete database access",
            "Full 90-minute uncut match video archives",
            "Combine physical test metrics (30m sprint, agility, pass %)",
            "Unlimited compliant messaging with guardians & academies",
            "Candidate triage & shortlist comparison workspace",
          ],
          cta: "Request Club Starter",
          featured: true,
        },
        {
          tag: "03 · ENTERPRISE",
          name: "Club Pro",
          priceEur: "€1,600",
          priceGel: "4,500 ₾",
          period: "/ year",
          note: "Multi-team & Concierge Scouting",
          forWho: "For multi-team clubs and international academies requiring dedicated regional support.",
          items: [
            "Everything in Club Starter",
            "Unlimited organization user seats",
            "AI-powered tactical talent alerts",
            "Concierge scouting: custom dossiers prepared by our analysts",
            "Quarterly regional talent intelligence reports",
            "Priority trial logistics support in Tbilisi",
          ],
          cta: "Contact Enterprise Sales",
          featured: false,
        },
      ],
      b2cPlans: [
        {
          tag: "01 · LIFETIME FREE",
          name: "Free Basic",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ forever",
          note: "Free verification included",
          forWho: "For every young athlete in Georgia (14–25) ready to showcase their game internationally.",
          items: [
            "Complete digital scouting profile",
            "Free federation & coach data verification",
            "Upload highlights & uncut match links",
            "Visible in European club scout searches",
            "Parent/guardian safeguarding controls",
          ],
          cta: "Create Free Profile",
          featured: false,
        },
        {
          tag: "02 · VISIBILITY BOOST",
          name: "Verified Pro",
          priceEur: "€50",
          priceGel: "150 ₾",
          period: "/ year",
          note: "Most chosen by ambitious prospects",
          forWho: "For athletes seeking priority search visibility, combine integration, and scout analytics.",
          items: [
            "Everything in Free Basic",
            "Priority placement in scout search results",
            "Official Scouter Combine test integration",
            "Custom EA FC-style verified player card for sharing",
            "Scout view analytics (see which clubs viewed your dossier)",
          ],
          cta: "Upgrade to Verified Pro",
          featured: true,
        },
        {
          tag: "03 · ACADEMY RATE",
          name: "Academy Partner",
          priceEur: "€35",
          priceGel: "100 ₾",
          period: "/ year",
          note: "33% discount via partner academies",
          forWho: "Special institutional rate for players registered through Scouter partner academies.",
          items: [
            "All Verified Pro features included",
            "Bulk academy coach & federation verification",
            "Official regional combine participation priority",
            "Shareable EA FC-style verified player card",
            "Club view analytics & progress tracking",
          ],
          cta: "Activate via Academy",
          featured: false,
        },
      ],
    },
    aboutPage: {
      eyebrow: "About Scouter",
      title: "Leveling the playing field for Georgian talent",
      subtitle:
        "We are building a trusted B2B sports intelligence bridge - not a social network - so young athletes are judged on verified data rather than geography or connections.",
      trustTitle: "Trust, Verification & Child Safeguarding",
      trustCards: [
        [
          "Multi-Layer Verification",
          "Every 'Verified' badge requires cross-checking with official federation registries, regional combine logs, or licensed academy coaches.",
        ],
        [
          "Minor Safeguarding (U18)",
          "Athletes under 18 have zero public social feeds or unmoderated DMs. All club outreach requires verified parent/guardian and academy consent.",
        ],
        [
          "GDPR & Data Privacy",
          "Strict compliance with European GDPR and Georgian personal data protection laws. Athletes retain full ownership of their video and biometric data.",
        ],
      ],
      teamTitle: "Leadership Team",
      team: [
        ["Elene Gogatishvili", "Head of Finance & Strategy", "Leads financial architecture, B2B pricing strategy, and club partnership economics."],
        ["Mariam Makharadze", "Head of User Experience & Growth", "Drives athlete onboarding, behavioral engagement, and international scout adoption."],
        ["Sandro Kiknadze", "Head of Digital Marketing & Brand", "Oversees brand positioning, content production, and regional combine campaigns."],
        ["Mariam Karseladze", "Head of Operations & Data Analytics", "Manages verification workflows, academy partnerships, and platform data integrity."],
      ],
    },
    faqPage: {
      eyebrow: "Help Center & FAQ",
      title: "Frequently Asked Questions",
      subtitle: "Everything athletes, parents, clubs, and scouts need to know about how Scouter works.",
      searchPlaceholder: "Search questions (e.g., verification, pricing, safeguarding, video)...",
      categories: [
        ["all", "All Questions"],
        ["athletes", "Athletes & Parents"],
        ["clubs", "Clubs & Scouts"],
        ["safety", "Safeguarding & Verification"],
      ],
      stillHaveQuestions: "Still have a specific question?",
      stillHaveText: "Our scouting operations team in Tbilisi is happy to help clubs, academies, and families.",
      askBtn: "Ask Our Team",
      items: [
        {
          cat: "athletes",
          tag: "Athletes & Parents",
          q: "How much does the platform cost for athletes and parents?",
          a: "Creating a Free Basic profile, uploading match footage, and getting verified is completely free forever (0 GEL). Optionally, athletes can upgrade to Verified Pro (150 GEL/year) for priority scout search placement, official combine integration, and club view analytics - or access the exact same Pro package for 100 GEL/year through a Scouter Partner Academy.",
        },
        {
          cat: "clubs",
          tag: "Clubs & Scouts",
          q: "How much does access cost for clubs and scouts?",
          a: "Clubs and international scouts can start with a free 14-Day Pilot (0 GEL) to test our verified database. Annual B2B subscriptions are Club Starter at 2,000 GEL/year (up to 3 seats, unlimited verified database, 90-minute match archives) and Club Pro at 4,500 GEL/year (unlimited seats, AI alerts, and concierge scouting dossiers).",
        },
        {
          cat: "safety",
          tag: "Safeguarding & Verification",
          q: "How is Scouter different from a sports social network?",
          a: "Scouter is a B2B Talent Intelligence and Verification database, not a social media feed. There are no public comments, follower counts, or unmoderated DMs. Every profile is structured around verified federation match logs, standardized combine metrics, and uncut 90-minute game footage.",
        },
        {
          cat: "safety",
          tag: "Safeguarding & Verification",
          q: "How is the safety of underage (U18) athletes protected?",
          a: "Child safeguarding is built into our architecture. Athletes aged 14–17 require verified parental/guardian consent upon registration, and all communication from clubs or scouts is routed strictly through verified parents/guardians and licensed academy directors.",
        },
        {
          cat: "safety",
          tag: "Safeguarding & Verification",
          q: "How is the reliability of athletes' data checked?",
          a: "Accuracy is ensured through cross-checking with official federation match logs, licensed academy coaches, and standardized Scouter Combine testing. Verification is 100% free and does not depend on a paid plan.",
        },
        {
          cat: "athletes",
          tag: "Athletes & Parents",
          q: "Can athletes who live in the regions use the platform?",
          a: "Yes. Discovering overlooked regional talent across Georgia (Samegrelo, Imereti, Adjara, Kakheti, and beyond) is our core mission - allowing players to be evaluated by European clubs without relocating to Tbilisi or paying for $3,500 overseas trial camps.",
        },
        {
          cat: "athletes",
          tag: "Athletes & Parents",
          q: "What kind of videos and data should be uploaded to a profile?",
          a: "We recommend uploading uncut 90-minute match recordings alongside short highlights and physical test logs (such as 30m sprint times). International scouts rely primarily on full-match footage to assess tactical positioning and decision-making.",
        },
        {
          cat: "clubs",
          tag: "Clubs & Scouts",
          q: "Is the platform only for footballers, or for other sports too?",
          a: "Scouter is built as a multi-sport scouting intelligence architecture. Our initial commercial rollout focuses on football (ages 14–25), with structured metric templates ready for basketball, rugby, and other Olympic sports.",
        },
      ],
    },
    contactModal: {
      title: "Get in touch with Scouter",
      subtitle: "Start your 14-day club pilot, onboard your academy, or ask our team a question.",
      nameLabel: "Full Name",
      roleLabel: "I am a...",
      roles: ["Club / International Scout", "Academy / Coach", "Athlete / Parent", "Institutional Partner"],
      orgLabel: "Club / Academy (Optional)",
      emailLabel: "Work or Personal Email",
      msgLabel: "Message",
      submit: "Send Request",
      successTitle: "Request Received!",
      successText: "Our scouting operations team in Tbilisi will respond within 24 hours.",
      close: "Close",
    },
    footer: {
      tagline: "Verified B2B talent intelligence connecting Georgian athletes (14–25) with global clubs.",
      rights: "All rights reserved.",
      privacy: "Privacy & GDPR",
      safeguarding: "Child Safeguarding",
      terms: "Terms of Use",
    },
  },
  ka: {
    nav: [
      ["home", "მთავარი"],
      ["demo", "Live დემო"],
      ["athletes", "სპორტსმენებს"],
      ["clubs", "კლუბებს"],
      ["pricing", "ფასები"],
      ["about", "ჩვენ შესახებ"],
      ["faq", "FAQ"],
    ],
    ctaOpenApp: "აპლიკაცია",
    ctaContact: "კონტაქტი",
    hero: {
      badge: "ვერიფიცირებული ტალანტების ბაზა. გლობალური წვდომა.",
      title: "ნიჭი უნივერსალურია. შესაძლებლობა - არა",
      subtitle:
        "Scouter არის B2B სკაუტინგ-ინტელექტის პლატფორმა - და არა სოციალური ქსელი - რომელიც 14–25 წლის ვერიფიცირებულ ქართველ სპორტსმენებს აკავშირებს ევროპულ კლუბებთან სრული მატჩებისა და Combine ტესტების საფუძველზე.",
      btnDemo: "ნახე Live დემო",
      btnTrial: "14-დღიანი უფასო Pilot",
      note: "სპორტსმენებისთვის უფასოა სამუდამოდ · 14-დღიანი უფასო საცდელი პერიოდი კლუბებისთვის",
      traction: [
        ["1,200+", "ვერიფიცირებული სპორტსმენი (14–25 წ.)"],
        ["18", "პარტნიორი აკადემია საქართველოში"],
        ["45+", "აქტიური ევროპელი სკაუტი"],
        ["100%", "U18 Safeguarding და მონაცემთა ვერიფიკაცია"],
      ],
      roleAthleteTitle: "ვარ სპორტსმენი ან მშობელი",
      roleAthleteText:
        "შექმენი ვერიფიცირებული სკაუტინგ-დოსიე, ატვირთე სრული მატჩები და მოხვდი კლუბების რადარზე $3,500-იანი კემპების გარეშე.",
      roleAthleteCta: "უპირატესობების ნახვა",
      roleClubTitle: "ვარ სკაუტი ან კლუბი",
      roleClubText:
        "გაფილტრე ქართველი ტალანტები Combine მეტრიკებით და ნახე 90-წუთიანი მატჩები საქართველოში ჩამოფრენამდე.",
      roleClubCta: "კლუბის ინსტრუმენტები",
    },
    demo: {
      eyebrow: "ინტერაქტიული სკაუტინგ-პლატფორმა",
      title: "შეაფასე ვერიფიცირებული ქართველი ტალანტები წამებში",
      subtitle:
        "დატესტე B2B მონაცემთა ბაზა (14–25 წელი): გაფილტრე პოზიციის, ასაკის, რეგიონის ან ვერიფიკაციის მიხედვით და გახსენი სრული დოსიე.",
      filterPos: "პოზიცია",
      filterAge: "ასაკობრივი ჯგუფი (14–25)",
      filterRegion: "რეგიონი",
      verifiedOnly: "მხოლოდ ვერიფიცირებული ✓",
      showing: "ნაჩვენებია",
      athletesCount: "სპორტსმენი",
      openDossier: "სრული დოსიეს გახსნა",
      verifiedBadge: "ფედერაცია & Combine ✓",
      pendingBadge: "მოწმდება",
      safeguardingBadge: "U18 მშობლის დაცვა",
      modalMatches: "სრული მატჩები",
      modalSprint: "30მ სპრინტი",
      modalPass: "პასის სიზუსტე",
      modalInvite: "სინჯებზე მოწვევა / კონტაქტი",
      modalWatch: "სრული 90' მატჩის ჩანაწერის ნახვა",
      safeguardingNotice:
        "არასრულწლოვანთა დაცვის პროტოკოლი (Safeguarding): სპორტსმენი 18 წლამდეა. კომუნიკაცია ხორციელდება მხოლოდ ვერიფიცირებული მშობლის/მეურვისა და აკადემიის გავლით.",
    },
    athletesPage: {
      eyebrow: "სპორტსმენებისა და მშობლებისთვის (14–25 წელი)",
      title: "არა სოციალური ქსელი, არამედ ვერიფიცირებული სკაუტინგ-ბაზა",
      subtitle:
        "შენი კარიერა ფასდება სტანდარტიზებული Combine მეტრიკებითა და 90-წუთიანი მატჩებით, და არა ნაცნობობით ან ოჯახის ბიუჯეტით.",
      cardShowcaseTitle: "შენი ვერიფიცირებული EA FC სტილის ბარათი",
      cardShowcaseText:
        "ყოველი ვერიფიცირებული სპორტსმენი იღებს ციფრულ სკაუტინგ-დოსიეს. Verified Pro (150 ₾/წელი) ან პარტნიორი აკადემიის პაკეტით (100 ₾/წელი) იხსნება შენი EA FC სტილის ბარათი, პრიორიტეტული ჩვენება ძიებაში და კლუბების ნახვების ანალიტიკა.",
      cardToggleBasic: "უფასო საბაზისო ბარათი",
      cardTogglePro: "Verified Pro ბარათი",
      cardCreateCta: "შექმენი შენი ბარათი აპში",
      stepsTitle: "როგორ მუშაობს სპორტსმენებისთვის",
      steps: [
        [
          "შექმენი სტრუქტურირებული პროფილი",
          "დაამატე ფიზიკური მონაცემები, პოზიცია, ჰაილაითები და 90-წუთიანი მატჩების ჩანაწერები.",
        ],
        [
          "გაიარე უფასო ვერიფიკაცია",
          "მონაცემები მოწმდება ფედერაციის ოქმებთან, მწვრთნელებთან და Combine ტესტებთან. ვერიფიკაცია უფასოა ყველა პაკეტზე.",
        ],
        [
          "მოხვდი ევროპული კლუბების რადარზე",
          "ჭკვიანი ალგორითმი შენს დოსიეს პირდაპირ აჩვენებს სკაუტებს, რომლებიც შენს პოზიციას ეძებენ.",
        ],
      ],
      features: [
        [
          "ვერიფიცირებული მონაცემები",
          "ფედერაციასთან, მწვრთნელებთან და Combine ტესტებთან გადამოწმებული სტატისტიკა - უფასოდ.",
        ],
        [
          "სრული 90' მატჩების არქივი",
          "კლუბები აფასებენ სრულ, დაუმონტაჟებელ თამაშებს და არა მხოლოდ 2-წუთიან კლიპებს.",
        ],
        [
          "ნებისმიერი რეგიონიდან",
          "აჩვენე შენი შესაძლებლობები ზუგდიდიდან, ქუთაისიდან თუ ბათუმიდან თბილისში გადმოსვლის გარეშე.",
        ],
        [
          "ნეპოტიზმის გარეშე",
          "ობიექტური მეტრიკები ყველა შრომისმოყვარე სპორტსმენს აძლევს თანაბარ საერთაშორისო შანსს.",
        ],
        [
          "აკადემიის პარტნიორული ფასდაკლება",
          "პარტნიორი აკადემიების მოთამაშეები იღებენ სრულ Verified Pro პაკეტს 100 ₾/წელი ტარიფით.",
        ],
        [
          "U18 Safeguarding დაცვა",
          "18 წლამდე პროფილებზე მოქმედებს მშობლის თანხმობა და უცხო პირებთან კონტაქტის მკაცრი ფილტრი.",
        ],
      ],
      bannerTitle: "დაზოგე $3,500-იანი ევროპული საზაფხულო კემპის ხარჯი",
      bannerText:
        "ორკვირიანი ევროპული სინჯები $1,500–3,500 ჯდება ფრენისა და სასტუმროს გარეშე. Scouter-ზე ვერიფიცირებული პროფილის შექმნა სრულიად უფასოა.",
      bannerBtn: "შექმენი უფასო პროფილი",
    },
    clubsPage: {
      eyebrow: "კლუბებისა და საერთაშორისო სკაუტებისთვის",
      title: "აღმოაჩინე ახალი ბაზრები 75%-ით ნაკლები დანახარჯით",
      subtitle:
        "ჩაანაცვლე სარისკო მივლინებები ვერიფიცირებული Combine მეტრიკებითა და 90-წუთიანი მატჩების არქივით.",
      stepsTitle: "როგორ მუშაობს კლუბებისთვის",
      steps: [
        [
          "ზუსტი ფილტრაცია და Triage",
          "გაფილტრე 14–25 წლის მოთამაშეები პოზიციის, 30მ სპრინტის, პასის სიზუსტისა და ვერიფიკაციის მიხედვით.",
        ],
        [
          "დისტანციური შეფასება",
          "უყურე 90-წუთიან მატჩებს და ნახე Combine ტესტების შედეგები ოფისიდან გაუსვლელად.",
        ],
        [
          "დაცული პირდაპირი კონტაქტი",
          "დაუკავშირდი შერჩეული მოთამაშის მშობელს ან აკადემიას Safeguarding სტანდარტების სრული დაცვით.",
        ],
      ],
      features: [
        ["სმარტ ფილტრები", "დეტალური ძიება ფიზიკური და ტექნიკური მაჩვენებლების მიხედვით."],
        ["AI რეკომენდაციები", "ალგორითმი ავტომატურად გირჩევს თქვენი კლუბის სტილზე მორგებულ ტალანტებს."],
        ["სანდო ვერიფიკაცია", "ყოველი ვერიფიცირებული პროფილი დადასტურებულია ფედერაციისა და Combine მონაცემებით."],
        ["სრული 90' მატჩები", "სრული თამაშების ვიდეოარქივი საკვანძო ეპიზოდებთან ერთად."],
        ["შედარება და Shortlist", "შეადარე კანდიდატები ერთმანეთს სინჯებზე მოწვევამდე."],
        ["Safeguarding კომუნიკაცია", "გამჭვირვალე და კონტროლირებადი კავშირი აკადემიებთან და მეურვეებთან."],
      ],
      tripTitle: "ერთი ტრადიციული სკაუტინგ-ვიზიტი საქართველოში",
      tripRows: [
        ["ორმხრივი ავიაბილეთი", "€380"],
        ["3 ღამე სასტუმროში", "€270"],
        ["კვება და შიდა ტრანსპორტი", "€150"],
      ],
      tripTotalLabel: "ჯამური ხარჯი 1 ვიზიტზე (3–4 დღე)",
      tripTotalValue: "≈ €800–1,000",
      tripNote: "მაღალი რისკი: თუ მოთამაშემ ტრავმა მიიღო ან სათადარიგოზე დარჩა, ბიუჯეტი იკარგება.",
      scouterTitle: "Scouter Club Starter-თან ერთად",
      scouterStat: "70–80%",
      scouterSub: "ეკონომია საწყისი სკაუტინგის ხარჯებზე",
      scouterText:
        "ერთი მივლინების ფასზე ნაკლებად, თქვენი გუნდი იღებს 1-წლიან ულიმიტო წვდომას ვერიფიცირებულ ბაზაზე. ჩამოფრინდით მხოლოდ უკვე შერჩეულ ტალანტებზე.",
      scouterBtn: "დაიწყე 14-დღიანი Pilot",
    },
    pricingPage: {
      eyebrow: "გამჭვირვალე ფასები",
      title: "აირჩიე შენზე მორგებული პაკეტი",
      subtitle: "გადართე კლუბების (B2B) და სპორტსმენების (B2C) პაკეტებს შორის ან აირჩიე სასურველი ვალუტა.",
      tabB2B: "კლუბებისა და სკაუტებისთვის (B2B)",
      tabB2C: "სპორტსმენებისთვის (B2C)",
      popularBadge: "MOST POPULAR",
      b2bPlans: [
        {
          tag: "01 · უფასო პილოტი",
          name: "14-Day Pilot",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ 14 დღე",
          note: "ბარათის მიბმის გარეშე",
          forWho: "კლუბებისა და სკაუტებისთვის ვერიფიცირებული ბაზის შესაფასებლად.",
          items: [
            "1 სკაუტის პროფილი",
            "წვდომა 20 ვერიფიცირებულ დოსიეზე",
            "სტანდარტული ფილტრები (ასაკი 14–25, პოზიცია, რეგიონი)",
            "სადემონსტრაციო 90-წუთიანი მატჩები და Combine ლოგები",
            "სრული U18 Safeguarding პროტოკოლი",
          ],
          cta: "დაიწყე 14-დღიანი Pilot",
          featured: false,
        },
        {
          tag: "02 · რეკომენდებული",
          name: "Club Starter",
          priceEur: "€700",
          priceGel: "2,000 ₾",
          period: "/ წელი",
          note: "საუკეთესო ROI · 1 მივლინებაზე იაფი",
          forWho: "კლუბებისა და სკაუტინგ დეპარტამენტებისთვის სრული დისტანციური შეფასებისთვის.",
          items: [
            "3 მომხმარებლის წვდმა ერთი კლუბიდან",
            "ულიმიტო წვდომა ვერიფიცირებულ ბაზაზე",
            "სრული 90-წუთიანი მატჩების ვიდეოარქივი",
            "Combine ფიზიკური ტესტები (30მ სპრინტი, პასის სიზუსტე)",
            "ულიმიტო დაცული კომუნიკაცია მშობლებთან და აკადემიებთან",
            "კანდიდატების შედარებისა და Shortlist-ის სივრცე",
          ],
          cta: "მოითხოვე Club Starter",
          featured: true,
        },
        {
          tag: "03 · ENTERPRISE",
          name: "Club Pro",
          priceEur: "€1,600",
          priceGel: "4,500 ₾",
          period: "/ წელი",
          note: "მულტი-გუნდური & Concierge სერვისი",
          forWho: "მსხვილი კლუბებისა და აკადემიებისთვის, რომლებსაც სჭირდებათ პერსონალური ანალიტიკა.",
          items: [
            "ყველაფერი Club Starter პაკეტიდან",
            "ულიმიტო მომხმარებლები ორგანიზაციიდან",
            "AI ტალანტების სარეკომენდაციო ალერტები",
            "Concierge სკაუტინგი: ჩვენი ანალიტიკოსები გიმზადებენ დოსიეს",
            "კვარტალური რეგიონული ტალანტების რეპორტები",
            "პრიორიტეტული დახმარება თბილისში სინჯების ორგანიზებისას",
          ],
          cta: "დაუკავშირდი გაყიდვებს",
          featured: false,
        },
      ],
      b2cPlans: [
        {
          tag: "01 · უფასო სამუდამოდ",
          name: "Free Basic",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ სამუდამოდ",
          note: "უფასო ვერიფიკაცია შედის",
          forWho: "ყველა ახალგაზრდა ქართველი სპორტსმენისთვის (14–25 წელი).",
          items: [
            "სრული ციფრული სპორტული პროფილი",
            "ფედერაციისა და მწვრთნელის უფასო ვერიფიკაცია",
            "ჰაილაითებისა და სრული მატჩების ატვირთვა",
            "ხილვადობა ევროპელი სკაუტების ძიებაში",
            "მშობლის/მეურვის უსაფრთხოების კონტროლი",
          ],
          cta: "შექმენი უფასო პროფილი",
          featured: false,
        },
        {
          tag: "02 · ხილვადობის ზრდა",
          name: "Verified Pro",
          priceEur: "€50",
          priceGel: "150 ₾",
          period: "/ წელი",
          note: "ყველაზე პოპულარული სპორტსმენებში",
          forWho: "ამბიციური მოთამაშეებისთვის, რომლებსაც სურთ პრიორიტეტული პოზიცია და ანალიტიკა.",
          items: [
            "ყველაფერი Free Basic-დან",
            "პრიორიტეტული ჩვენება სკაუტების ძიების შედეგებში",
            "ოფიციალური Scouter Combine ტესტების ინტეგრაცია",
            "პერსონალური EA FC სტილის ვერიფიცირებული ბარათი",
            "ანალიტიკა: ნახე, რომელმა ევროპულმა კლუბმა ნახა შენი პროფილი",
          ],
          cta: "აირჩიე Verified Pro",
          featured: true,
        },
        {
          tag: "03 · აკადემიის ტარიფი",
          name: "Academy Partner",
          priceEur: "€35",
          priceGel: "100 ₾",
          period: "/ წელი",
          note: "33%-იანი ფასდაკლება პარტნიორი აკადემიებისთვის",
          forWho: "სპეციალური ინსტიტუციური ტარიფი პარტნიორი აკადემიების აღსაზრდელებისთვის.",
          items: [
            "Verified Pro-ს ყველა ფუნქცია სრულად",
            "აკადემიის მწვრთნელისა და ფედერაციის ერთიანი ვერიფიკაცია",
            "პრიორიტეტული ჩართვა რეგიონულ Combine ტესტებში",
            "გასაზიარებელი EA FC სტილის ვერიფიცირებული ბარათი",
            "კლუბების ნახვების სრული ანალიტიკა",
          ],
          cta: "გააქტიურება აკადემიით",
          featured: false,
        },
      ],
    },
    aboutPage: {
      eyebrow: "Scouter-ის შესახებ",
      title: "ვხსნით გზას მსოფლიო სპორტული არენისკენ",
      subtitle:
        "ჩვენ ვქმნით სანდო B2B სპორტულ ინტელექტის პლატფორმას - და არა სოციალურ ქსელს - რათა სპორტსმენის მომავალი განისაზღვროს ვერიფიცირებული მონაცემებით.",
      trustTitle: "სანდოობა, ვერიფიკაცია და არასრულწლოვანთა დაცვა",
      trustCards: [
        [
          "მრავალდონიანი ვერიფიკაცია",
          "ყოველი 'Verified' ბეჯი მოწმდება ფედერაციის ოფიციალურ ბაზებთან, Combine ტესტებთან და ლიცენზირებულ მწვრთნელებთან.",
        ],
        [
          "არასრულწლოვანთა დაცვა (U18)",
          "18 წლამდე სპორტსმენებს არ აქვთ საჯარო ჩატი. კლუბთან ნებისმიერი კომუნიკაცია გადის მხოლოდ ვერიფიცირებულ მშობელსა და აკადემიაზე.",
        ],
        [
          "GDPR და მონაცემთა დაცვა",
          "სრული შესაბამისობა ევროპულ GDPR-სა და საქართველოს პერსონალურ მონაცემთა დაცვის სტანდარტებთან.",
        ],
      ],
      teamTitle: "გუნდი",
      team: [
        ["ელენე გოგატიშვილი", "Head of Finance & Strategy", "ხელმძღვანელობს ფინანსურ სტრატეგიას, B2B ფასწარმოქმნასა და კლუბებთან პარტნიორობას."],
        ["მარიამ მახარაძე", "Head of User Experience & Growth", "მართავს სპორტსმენების ჩართულობას, მომხმარებლის გამოცდილებასა და საერთაშორისო სკაუტების მოზიდვას."],
        ["სანდრო კიკნაძე", "Head of Digital Marketing & Brand", "პასუხისმგებელია ბრენდის პოზიციონირებაზე, კონტენტსა და რეგიონულ კამპანიებზე."],
        ["მარიამ ქარსელაძე", "Head of Operations & Data Analytics", "მართავს ვერიფიკაციის პროცესებს, აკადემიებთან ურთიერთობასა და მონაცემთა ანალიტიკას."],
      ],
    },
    faqPage: {
      eyebrow: "დახმარების ცენტრი",
      title: "ხშირად დასმული კითხვები",
      subtitle: "ყველა პასუხი სპორტსმენების, მშობლების, კლუბებისა და სკაუტებისთვის.",
      searchPlaceholder: "მოძებნე კითხვა (მაგ: ვერიფიკაცია, ფასი, ვიდეო, Safeguarding)...",
      categories: [
        ["all", "ყველა კითხვა"],
        ["athletes", "სპორტსმენები და მშობლები"],
        ["clubs", "კლუბები და სკაუტები"],
        ["safety", "Safeguarding და ვერიფიკაცია"],
      ],
      stillHaveQuestions: "ვერ იპოვე სასურველი პასუხი?",
      stillHaveText: "ჩვენი გუნდი თბილისიდან მზადაა დაეხმაროს კლუბებს, აკადემიებსა და ოჯახებს.",
      askBtn: "მოგვწერე კითხვა",
      items: [
        {
          cat: "athletes",
          tag: "სპორტსმენები და მშობლები",
          q: "რა ღირს პლატფორმის გამოყენება სპორტსმენებისა და მშობლებისთვის?",
          a: "Free Basic პროფილის შექმნა, მატჩების ატვირთვა და ვერიფიკაცია სრულიად უფასოა სამუდამოდ (0 ₾). სურვილისამებრ, შეგიძლიათ აირჩიოთ Verified Pro (წელიწადში 150 ₾) ძიებაში პრიორიტეტული ჩვენებისა და კლუბების ნახვების სტატისტიკისთვის, ხოლო პარტნიორი აკადემიების მოთამაშეებისთვის იგივე პაკეტი (Academy Partner) ღირს 100 ₾ წელიწადში.",
        },
        {
          cat: "clubs",
          tag: "კლუბები და სკაუტები",
          q: "რა ღირს წვდომა კლუბებისა და სკაუტებისთვის?",
          a: "კლუბებსა და სკაუტებს შეუძლიათ დაიწყონ უფასო 14-დღიანი პილოტით (14-Day Pilot - 0 ₾). წლიური B2B პაკეტებია: Club Starter - 2,000 ₾/წელი (3 მომხმარებელი, ულიმიტო ვერიფიცირებული ბაზა და 90-წუთიანი მატჩების არქივი) და Club Pro - 4,500 ₾/წელი (ულიმიტო ადგილები, AI ალერტები და Concierge სკაუტინგი).",
        },
        {
          cat: "safety",
          tag: "Safeguarding და ვერიფიკაცია",
          q: "რით განსხვავდება Scouter სპორტული სოციალური ქსელისგან?",
          a: "Scouter არის B2B სკაუტინგ-ინტელექტის ბაზა და არა სოციალური ქსელი. აქ არ არის საჯარო კომენტარები, გამომწერები ან უკონტროლო მიმოწერა - ყველა პროფილი ეფუძნება ფედერაციის ოფიციალურ ოქმებს, Combine ტესტებსა და სრულ 90-წუთიან მატჩებს.",
        },
        {
          cat: "safety",
          tag: "Safeguarding და ვერიფიკაცია",
          q: "როგორ არის დაცული არასრულწლოვანი (U18) სპორტსმენების უსაფრთხოება?",
          a: "14–17 წლის სპორტსმენების რეგისტრაცია ხდება მხოლოდ მშობლის/კანონიერი მეურვის თანხმობით. სკაუტისა და კლუბის ნებისმიერი მოთხოვნა მიდის პირდაპირ მშობელთან და აკადემიის ხელმძღვანელთან.",
        },
        {
          cat: "safety",
          tag: "Safeguarding და ვერიფიკაცია",
          q: "როგორ მოწმდება სპორტსმენების მონაცემების სანდოობა?",
          a: "მონაცემები მოწმდება ფედერაციის ოფიციალურ ბაზებთან, ლიცენზირებულ მწვრთნელებთან და Scouter-ის რეგიონული Combine ტესტირების ოქმებთან. ვერიფიკაცია უფასოა ყველა პაკეტზე.",
        },
        {
          cat: "athletes",
          tag: "სპორტსმენები და მშობლები",
          q: "შეუძლიათ თუ არა პლატფორმით სარგებლობა რეგიონებში მცხოვრებ სპორტსმენებს?",
          a: "დიახ. რეგიონებში (სამეგრელო, იმერეთი, აჭარა, კახეთი და სხვ.) მცხოვრები ტალანტების აღმოჩენა ჩვენი მთავარი მისიაა - თბილისში გადმოსვლის ან $3,500-იანი უცხოური კემპების გარეშე.",
        },
        {
          cat: "athletes",
          tag: "სპორტსმენები და მშობლები",
          q: "რა ტიპის ვიდეოები და მონაცემები უნდა აიტვირთოს პროფილზე?",
          a: "რეკომენდებულია 90-წუთიანი სრული მატჩების ატვირთვა ჰაილაითებთან და ფიზიკური ტესტების შედეგებთან ერთად, რადგან კლუბები გადაწყვეტილებას სრული თამაშის ანალიზით იღებენ.",
        },
        {
          cat: "clubs",
          tag: "კლუბები და სკაუტები",
          q: "პლატფორმა მხოლოდ ფეხბურთელებისთვისაა, თუ სხვა სპორტის სახეობებისთვისაც?",
          a: "Scouter მულტისპორტული B2B არქიტექტურაა. საწყისი ეტაპი ფოკუსირებულია ფეხბურთზე (14–25 წელი), ხოლო სისტემა სრულად მზადაა კალათბურთის, რაგბისა და სხვა სახეობებისთვის.",
        },
      ],
    },
    contactModal: {
      title: "დაუკავშირდი Scouter-ს",
      subtitle: "დაიწყე კლუბის 14-დღიანი Pilot, ჩართე აკადემია ან მოგვწერე კითხვა.",
      nameLabel: "სახელი და გვარი",
      roleLabel: "ვინ ხართ...",
      roles: ["კლუბი / საერთაშორისო სკაუტი", "აკადემია / მწვრთნელი", "სპორტსმენი / მშობელი", "ინსტიტუციური პარტნიორი"],
      orgLabel: "კლუბი / აკადემია (არასავალდებულო)",
      emailLabel: "ელფოსტა",
      msgLabel: "შეტყობინება",
      submit: "გაგზავნა",
      successTitle: "მოთხოვნა მიღებულია!",
      successText: "ჩვენი გუნდი თბილისიდან დაგიკავშირდებათ 24 საათის განმავლობაში.",
      close: "დახურვა",
    },
    footer: {
      tagline: "ვერიფიცირებული B2B სკაუტინგ-ინტელექტი 14–25 წლის ქართველი ტალანტების გლობალური აღმოჩენისთვის.",
      rights: "ყველა უფლება დაცულია.",
      privacy: "კონფიდენციალურობა & GDPR",
      safeguarding: "არასრულწლოვანთა დაცვა",
      terms: "წესები და პირობები",
    },
  },
};

/* ------------------------------------------------------------------ */
/* REFINED BRAND LOGO (Split Blue/Emerald S + Italic Scouter.)        */
/* ------------------------------------------------------------------ */
function Logo({ onClick, dark }) {
  const uid = useId().replace(/:/g, "");
  const topGradId = `scouter-top-${uid}`;
  const botGradId = `scouter-bot-${uid}`;

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2.5 text-left focus:outline-none group"
      aria-label="Scouter Home"
    >
      <svg
        width="38"
        height="34"
        viewBox="0 0 110 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
      >
        <defs>
          <linearGradient id={topGradId} x1="14" y1="46" x2="96" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id={botGradId} x1="12" y1="86" x2="96" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>

        {/* Upper Blue-to-Cyan Aerodynamic Blade */}
        <path
          d="M44 10H98L83 25H47C43.5 25 40.5 26.8 38.8 29.8L30 45H12L25.5 21.5C29.3 14.8 36.3 10 44 10Z"
          fill={`url(#${topGradId})`}
        />

        {/* Lower Emerald Upward-Pointing Arrow Blade */}
        <path
          d="M52 38H84L96 51L66 86H12L27 71H59C62.5 71 65.5 69.2 67.2 66.2L74 54H43L52 38Z"
          fill={`url(#${botGradId})`}
        />
      </svg>

      <span
        className={`text-xl sm:text-2xl font-black italic tracking-tight leading-none select-none ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        Scouter
        <span className="inline-block w-2 h-2 bg-emerald-500 ml-0.5 align-baseline" />
      </span>
    </button>
  );
}

function SectionHeader({ eyebrow, title, subtitle, dark }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className={`text-xs uppercase tracking-widest font-bold mb-3 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>
        {eyebrow}
      </p>
      <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* Web Dashboard Hero Preview */
function WebDashboardPreview({ onOpenDemo, dark }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-500/15 to-transparent blur-2xl rounded-3xl" />
      <div
        className={`relative rounded-3xl p-5 shadow-2xl border ${
          dark ? "bg-slate-900/95 border-white/10" : "bg-white border-slate-200 shadow-slate-200/70"
        }`}
      >
        {/* Window Top Bar */}
        <div className={`flex items-center justify-between pb-4 border-b ${dark ? "border-white/10" : "border-slate-200"}`}>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className={`ml-2 text-xs font-mono ${dark ? "text-slate-400" : "text-slate-500"}`}>
              app.scouter.ge/scout-workspace
            </span>
          </div>
          <span
            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
              dark
                ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                : "bg-emerald-50 text-emerald-700 border-emerald-200"
            }`}
          >
            VERIFIED DATABASE
          </span>
        </div>

        {/* Mini Filter Pills */}
        <div className="flex flex-wrap gap-2 my-4">
          {["Ages 14–25", "Combine Verified ✓", "90' Uncut Match", "U18 Protected"].map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                dark
                  ? "bg-slate-950 text-slate-300 border-white/10"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured Verified Player Card inside Dashboard */}
        <div
          className={`rounded-2xl p-4 border ${
            dark ? "bg-slate-950/90 border-white/10" : "bg-slate-50 border-slate-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center font-black text-white text-base">
                GK
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className={`font-bold text-base ${dark ? "text-white" : "text-slate-900"}`}>Giorgi K., 17</h3>
                  <BadgeCheck size={16} className="text-emerald-500" />
                </div>
                <p className={`text-xs flex items-center mt-0.5 ${dark ? "text-slate-400" : "text-slate-600"}`}>
                  <MapPin size={12} className="mr-1 text-emerald-500" /> Zugdidi, Samegrelo · Striker
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Scouter Index</span>
              <span className={`text-2xl font-black ${dark ? "text-emerald-400" : "text-emerald-600"}`}>87</span>
            </div>
          </div>

          <div
            className={`grid grid-cols-3 gap-2 mt-4 pt-4 border-t text-center ${
              dark ? "border-white/5" : "border-slate-200"
            }`}
          >
            <div className={`rounded-xl p-2 ${dark ? "bg-slate-900/90" : "bg-white border border-slate-200/80"}`}>
              <p className="text-[10px] text-slate-500 font-bold uppercase">30m Sprint</p>
              <p className={`text-sm font-black mt-0.5 ${dark ? "text-white" : "text-slate-900"}`}>3.98 s</p>
            </div>
            <div className={`rounded-xl p-2 ${dark ? "bg-slate-900/90" : "bg-white border border-slate-200/80"}`}>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Full Matches</p>
              <p className={`text-sm font-black mt-0.5 ${dark ? "text-white" : "text-slate-900"}`}>8 Uncut</p>
            </div>
            <div className={`rounded-xl p-2 ${dark ? "bg-slate-900/90" : "bg-white border border-slate-200/80"}`}>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Safeguarding</p>
              <p className={`text-sm font-black mt-0.5 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>Guardian ✓</p>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenDemo}
          className={`mt-4 w-full py-3 rounded-xl border font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors ${
            dark
              ? "bg-blue-500/15 hover:bg-blue-500/25 border-blue-500/30 text-blue-300"
              : "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"
          }`}
        >
          Interactive Database Preview <ArrowRight size={14} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

/* Interactive EA FC-Style Player Card Component (For Athletes Page) */
function FifaCardShowcase({ tier, setTier, t, dark }) {
  const isPro = tier === "pro";

  return (
    <div
      className={`border rounded-3xl p-6 sm:p-8 mb-10 ${
        dark ? "bg-slate-900/80 border-white/10" : "bg-white border-slate-200 shadow-sm"
      }`}
    >
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Explanation + Toggle */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-500 border border-amber-500/30">
            <Trophy size={14} className="mr-1.5" /> EA FC / FIFA-Style Verified Card
          </div>
          <h3 className={`text-2xl sm:text-3xl font-black ${dark ? "text-white" : "text-slate-900"}`}>
            {t.athletesPage.cardShowcaseTitle}
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            {t.athletesPage.cardShowcaseText}
          </p>

          {/* Toggle Basic vs Pro Card */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button
              onClick={() => setTier("basic")}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all border ${
                !isPro
                  ? dark
                    ? "bg-slate-700 text-white border-white/20"
                    : "bg-slate-900 text-white border-slate-900"
                  : dark
                  ? "bg-slate-950 text-slate-400 border-white/10"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              {t.athletesPage.cardToggleBasic}
            </button>
            <button
              onClick={() => setTier("pro")}
              className={`px-5 py-2.5 rounded-full text-xs font-black transition-all border ${
                isPro
                  ? "bg-gradient-to-r from-amber-400 to-emerald-400 text-slate-950 border-transparent shadow-md"
                  : dark
                  ? "bg-slate-950 text-slate-400 border-white/10"
                  : "bg-slate-100 text-slate-600 border-slate-200"
              }`}
            >
              ★ {t.athletesPage.cardTogglePro}
            </button>
          </div>

          <div className="pt-2">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-black text-emerald-500 hover:underline"
            >
              {t.athletesPage.cardCreateCta} <ArrowRight size={16} className="ml-1.5" />
            </a>
          </div>
        </div>

        {/* Right Visual EA FC Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-64 sm:w-72">
            {/* Ambient Glow */}
            <div
              className={`absolute -inset-3 rounded-3xl blur-2xl transition-all ${
                isPro
                  ? "bg-gradient-to-tr from-amber-400/35 via-emerald-500/30 to-blue-500/25"
                  : "bg-slate-500/15"
              }`}
            />

            {/* Card Shield */}
            <div
              className={`relative rounded-3xl p-5 border-2 transition-all shadow-2xl ${
                isPro
                  ? "bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950 border-amber-400/70 text-white"
                  : dark
                  ? "bg-slate-900 border-slate-700 text-slate-200"
                  : "bg-gradient-to-b from-slate-100 to-slate-200 border-slate-300 text-slate-900"
              }`}
            >
              {/* Top Row: OVR Rating + Position + Verified Badge */}
              <div className="flex justify-between items-start">
                <div>
                  <span
                    className={`text-4xl font-black leading-none ${
                      isPro ? "text-amber-400" : dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {isPro ? "87" : "79"}
                  </span>
                  <span
                    className={`block text-xs font-black tracking-widest mt-1 ${
                      isPro ? "text-emerald-400" : "text-slate-500"
                    }`}
                  >
                    ST · U17
                  </span>
                  <span className="inline-block mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded bg-red-600/90 text-white">
                    GEO
                  </span>
                </div>

                {/* Avatar Circle */}
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner ${
                    isPro
                      ? "bg-gradient-to-br from-amber-400 via-emerald-500 to-blue-600 text-slate-950"
                      : "bg-slate-700 text-white"
                  }`}
                >
                  GK
                </div>
              </div>

              {/* Player Name & Verification */}
              <div className="mt-4 text-center border-b border-current/10 pb-3">
                <div className="flex items-center justify-center space-x-1.5">
                  <h4 className="text-lg font-black tracking-tight uppercase">G. Kvaratskhelia</h4>
                  <BadgeCheck size={17} className={isPro ? "text-emerald-400" : "text-emerald-500"} />
                </div>
                <p className="text-[11px] opacity-75 font-semibold mt-0.5">
                  {isPro ? "VERIFIED PRO · SCOUTER.GE" : "FREE BASIC · SCOUTER.GE"}
                </p>
              </div>

              {/* 6-Attribute FIFA Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-3 text-xs font-black px-2">
                <div className="flex justify-between">
                  <span className="opacity-70">PAC</span>
                  <span>{isPro ? "91" : "84"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">DRI</span>
                  <span>{isPro ? "86" : "78"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">SHO</span>
                  <span>{isPro ? "88" : "80"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">DEF</span>
                  <span>{isPro ? "45" : "42"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">PAS</span>
                  <span>{isPro ? "81" : "75"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">PHY</span>
                  <span>{isPro ? "83" : "77"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN APPLICATION                                                   */
/* ------------------------------------------------------------------ */
export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [currency, setCurrency] = useState("GEL");
  const [pricingAudience, setPricingAudience] = useState("b2b");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // For Athletes Card Showcase State
  const [cardTier, setCardTier] = useState("pro");

  // Interactive Demo States
  const [posFilter, setPosFilter] = useState("All");
  const [ageFilter, setAgeFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  // FAQ Dedicated Page States
  const [faqCategory, setFaqCategory] = useState("all");
  const [faqSearch, setFaqSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Contact Modal State
  const [contactOpen, setContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    org: "",
    email: "",
    message: "",
  });

  // Automatically set browser tab Favicon to the new Split Blue/Emerald 'S' icon
  useEffect(() => {
    const svgFavicon = encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 96">
        <rect width="110" height="96" rx="22" fill="#060B19"/>
        <defs>
          <linearGradient id="t" x1="14" y1="46" x2="96" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="100%" stop-color="#06B6D4"/>
          </linearGradient>
          <linearGradient id="b" x1="12" y1="86" x2="96" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#10B981"/>
            <stop offset="100%" stop-color="#34D399"/>
          </linearGradient>
        </defs>
        <path d="M44 12H96L82 26H47C43.5 26 40.5 27.8 38.8 30.8L30 45H14L26.5 23C30.2 16.5 36.8 12 44 12Z" fill="url(#t)"/>
        <path d="M52 38H83L94 50L65 84H14L28 70H58C61.5 70 64.5 68.2 66.2 65.2L73 53H44L52 38Z" fill="url(#b)"/>
      </svg>
    `);
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml,${svgFavicon}`;
    document.title = "Scouter. - Verified Talent Intelligence";
  }, []);

  const dark = theme === "dark";
  const t = CONTENT[lang];

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openContactModal = (prefill = "") => {
    setFormSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      message: prefill ? `Interested in: ${prefill}` : "",
    }));
    setContactOpen(true);
  };

  const filteredAthletes = useMemo(() => {
    return DEMO_ATHLETES.filter((a) => {
      if (posFilter !== "All" && a.position !== posFilter) return false;
      if (ageFilter !== "All" && a.ageGroup !== ageFilter) return false;
      if (regionFilter !== "All" && a.region !== regionFilter) return false;
      if (verifiedOnly && !a.verified) return false;
      return true;
    });
  }, [posFilter, ageFilter, regionFilter, verifiedOnly]);

  const filteredFaqs = useMemo(() => {
    return t.faqPage.items.filter((item) => {
      if (faqCategory !== "all" && item.cat !== faqCategory) return false;
      if (faqSearch.trim()) {
        const qLower = faqSearch.toLowerCase();
        return item.q.toLowerCase().includes(qLower) || item.a.toLowerCase().includes(qLower);
      }
      return true;
    });
  }, [t.faqPage.items, faqCategory, faqSearch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* Theme-aware Surface Classes */
  const cardSurface = dark
    ? "bg-slate-900 border-white/10"
    : "bg-white border-slate-200/90 shadow-sm";
  const subSurface = dark
    ? "bg-slate-950 border-white/10"
    : "bg-slate-50 border-slate-200";
  const headingText = dark ? "text-white" : "text-slate-900";
  const bodyText = dark ? "text-slate-400" : "text-slate-600";

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-x-clip transition-colors duration-200 ${
        dark ? "bg-slate-950 text-slate-200" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Subtle Ambient Glows */}
      <div
        className={`pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full blur-3xl ${
          dark ? "bg-emerald-500/10" : "bg-emerald-400/15"
        }`}
      />
      <div
        className={`pointer-events-none fixed top-1/2 -right-32 w-96 h-96 rounded-full blur-3xl ${
          dark ? "bg-blue-500/10" : "bg-blue-400/15"
        }`}
      />

      {/* ============================================================== */}
      {/* HEADER (7 Navigation Tabs + Theme + Lang + Contact)            */}
      {/* ============================================================== */}
      <header
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
          dark ? "bg-slate-950/90 border-white/10" : "bg-white/90 border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-3.5 flex items-center justify-between gap-2">
          <Logo onClick={() => navigateTo("home")} dark={dark} />

          {/* Desktop 7-Tab Navigation */}
          <nav
            className={`hidden xl:flex items-center border rounded-full p-1 ${
              dark ? "bg-slate-900/90 border-white/5" : "bg-slate-100 border-slate-200"
            }`}
          >
            {t.nav.map(([id, label]) => {
              const isActive = activePage === id;
              return (
                <button
                  key={id}
                  onClick={() => navigateTo(id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-sm"
                      : dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle, Language Toggle, Contact Us, Open App */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(dark ? "light" : "dark")}
              aria-label="Toggle Light/Dark Mode"
              title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                dark
                  ? "bg-slate-900 border-white/10 text-amber-400 hover:bg-slate-800"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <div
              className={`flex items-center border rounded-full p-0.5 text-xs font-bold ${
                dark ? "bg-slate-900 border-white/10" : "bg-slate-100 border-slate-200"
              }`}
            >
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en"
                    ? dark
                      ? "bg-slate-700 text-white"
                      : "bg-white text-slate-900 shadow-sm"
                    : dark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ka")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "ka"
                    ? dark
                      ? "bg-slate-700 text-white"
                      : "bg-white text-slate-900 shadow-sm"
                    : dark
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                ქარ
              </button>
            </div>

            <button
              onClick={() => openContactModal()}
              className={`hidden sm:inline-flex items-center px-3.5 py-2 rounded-full text-xs font-bold border transition-colors ${
                dark
                  ? "bg-slate-800 hover:bg-slate-700 text-white border-white/10"
                  : "bg-white hover:bg-slate-100 text-slate-800 border-slate-200"
              }`}
            >
              {t.ctaContact}
            </button>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2 rounded-full transition-all active:scale-95"
            >
              {t.ctaOpenApp} <ExternalLink size={13} className="ml-1.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden w-9 h-9 rounded-full flex items-center justify-center ${
                dark ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden border-t px-5 py-4 space-y-1.5 ${
              dark ? "border-white/10 bg-slate-950" : "border-slate-200 bg-white"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {t.nav.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => navigateTo(id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                    activePage === id
                      ? "bg-emerald-500 text-slate-950"
                      : dark
                      ? "text-slate-300 bg-slate-900 hover:bg-slate-800"
                      : "text-slate-700 bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="pt-3 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold ${
                  dark ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-800"
                }`}
              >
                {t.ctaContact}
              </button>
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-black text-center"
              >
                {t.ctaOpenApp}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* MAIN PAGE CONTENT AREA (7 Independent Windows)                 */}
      {/* ============================================================== */}
      <main className="flex-1">
        {/* -------------------- 1. HOME -------------------- */}
        {activePage === "home" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div
                  className={`inline-flex items-center px-4 py-1.5 border rounded-full text-xs font-bold mb-6 ${
                    dark
                      ? "bg-slate-900 border-white/10 text-emerald-400"
                      : "bg-emerald-50 border-emerald-200 text-emerald-700"
                  }`}
                >
                  <Zap size={14} className="mr-2" /> {t.hero.badge}
                </div>
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${headingText}`}>
                  {t.hero.title}
                  <span className="text-emerald-500">.</span>
                </h1>
                <p className={`text-base sm:text-lg mt-6 leading-relaxed ${bodyText}`}>{t.hero.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <button
                    onClick={() => navigateTo("demo")}
                    className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                  >
                    {t.hero.btnDemo} <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button
                    onClick={() => openContactModal("14-Day Club Free Pilot")}
                    className={`inline-flex items-center justify-center border font-bold px-7 py-4 rounded-full transition-all ${
                      dark
                        ? "bg-slate-900 hover:bg-slate-800 border-white/10 text-white"
                        : "bg-white hover:bg-slate-100 border-slate-300 text-slate-900 shadow-sm"
                    }`}
                  >
                    {t.hero.btnTrial}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4">{t.hero.note}</p>
              </div>

              <WebDashboardPreview onOpenDemo={() => navigateTo("demo")} dark={dark} />
            </div>

            {/* Platform Traction Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {t.hero.traction.map(([val, label]) => (
                <div key={label} className={`border rounded-2xl p-5 ${cardSurface}`}>
                  <p className={`text-2xl sm:text-3xl font-black ${headingText}`}>{val}</p>
                  <p className={`text-xs sm:text-sm mt-1 ${bodyText}`}>{label}</p>
                </div>
              ))}
            </div>

            {/* Dual Role Switch Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <button
                onClick={() => navigateTo("athletes")}
                className={`group text-left border hover:border-emerald-500/60 rounded-3xl p-6 flex items-start transition-all ${cardSurface}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-emerald-500" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-bold ${headingText}`}>{t.hero.roleAthleteTitle}</h3>
                  <p className={`text-sm mt-1 leading-relaxed ${bodyText}`}>{t.hero.roleAthleteText}</p>
                  <span
                    className={`inline-flex items-center text-xs font-bold mt-3 uppercase tracking-wider ${
                      dark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  >
                    {t.hero.roleAthleteCta}{" "}
                    <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>

              <button
                onClick={() => navigateTo("clubs")}
                className={`group text-left border hover:border-blue-500/60 rounded-3xl p-6 flex items-start transition-all ${cardSurface}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-500" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className={`text-lg font-bold ${headingText}`}>{t.hero.roleClubTitle}</h3>
                  <p className={`text-sm mt-1 leading-relaxed ${bodyText}`}>{t.hero.roleClubText}</p>
                  <span
                    className={`inline-flex items-center text-xs font-bold mt-3 uppercase tracking-wider ${
                      dark ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {t.hero.roleClubCta}{" "}
                    <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </div>
          </section>
        )}

        {/* -------------------- 2. LIVE DEMO -------------------- */}
        {activePage === "demo" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.demo.eyebrow}
              title={t.demo.title}
              subtitle={t.demo.subtitle}
              dark={dark}
            />

            {/* Interactive Filter Controls */}
            <div className={`border rounded-3xl p-5 mb-8 ${cardSurface}`}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t.demo.filterPos}
                  </label>
                  <select
                    value={posFilter}
                    onChange={(e) => setPosFilter(e.target.value)}
                    className={`w-full border rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                  >
                    <option value="All">All Positions</option>
                    <option value="Striker">Striker</option>
                    <option value="Left Back">Left Back</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t.demo.filterAge}
                  </label>
                  <select
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                    className={`w-full border rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                  >
                    <option value="All">All Ages (14–25)</option>
                    <option value="U15">U15 (14–15)</option>
                    <option value="U17">U17 (16–17)</option>
                    <option value="U19">U19 (18–19)</option>
                    <option value="U23 / Senior">U23 / Senior (20–25)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {t.demo.filterRegion}
                  </label>
                  <select
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className={`w-full border rounded-xl px-3.5 py-2.5 text-sm font-semibold focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                  >
                    <option value="All">All Georgia</option>
                    <option value="Tbilisi">Tbilisi</option>
                    <option value="Imereti">Imereti</option>
                    <option value="Samegrelo">Samegrelo</option>
                    <option value="Adjara">Adjara</option>
                  </select>
                </div>

                <div className={`flex items-center justify-between border rounded-xl px-4 py-2.5 ${subSurface}`}>
                  <span className={`text-sm font-bold ${headingText}`}>{t.demo.verifiedOnly}</span>
                  <button
                    onClick={() => setVerifiedOnly(!verifiedOnly)}
                    className={`w-11 h-6 rounded-full transition-colors p-0.5 ${
                      verifiedOnly ? "bg-emerald-500" : dark ? "bg-slate-700" : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${
                        verifiedOnly ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div
                className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                  dark ? "border-white/5 text-slate-400" : "border-slate-200 text-slate-500"
                }`}
              >
                <span>
                  {t.demo.showing} <strong className={headingText}>{filteredAthletes.length}</strong> {t.demo.athletesCount}
                </span>
                {(posFilter !== "All" || ageFilter !== "All" || regionFilter !== "All" || verifiedOnly) && (
                  <button
                    onClick={() => {
                      setPosFilter("All");
                      setAgeFilter("All");
                      setRegionFilter("All");
                      setVerifiedOnly(false);
                    }}
                    className="text-emerald-500 hover:underline font-bold"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>

            {/* Filtered Athlete Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAthletes.map((athlete) => (
                <div
                  key={athlete.id}
                  onClick={() => setSelectedAthlete(athlete)}
                  className={`cursor-pointer group border hover:border-emerald-500/60 rounded-3xl overflow-hidden transition-all flex flex-col ${cardSurface}`}
                >
                  <div className={`bg-gradient-to-br ${athlete.gradient} p-5 relative`}>
                    <div className="flex justify-between items-start gap-2">
                      <div className="bg-slate-950/75 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                        <span className="text-2xl font-black text-white leading-none">{athlete.rating}</span>
                        <span className="block text-[10px] font-bold text-emerald-400 uppercase mt-0.5">
                          {athlete.position}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        {athlete.verified ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                            <BadgeCheck size={13} className="mr-1" /> {t.demo.verifiedBadge}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/60 text-slate-200">
                            {t.demo.pendingBadge}
                          </span>
                        )}
                        {athlete.isMinor && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/70 text-amber-300 border border-amber-400/30">
                            <Lock size={10} className="mr-1" /> {t.demo.safeguardingBadge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3 className="text-xl font-black text-white">{athlete.name}</h3>
                      <p className="text-xs text-white/90 font-medium flex items-center mt-1">
                        <MapPin size={12} className="mr-1" /> {athlete.city}, {athlete.region} · {athlete.age} yrs (
                        {athlete.ageGroup})
                      </p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className={`grid grid-cols-3 gap-2 text-center rounded-2xl p-3 border ${subSurface}`}>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">30m Sprint</p>
                        <p className={`text-sm font-black mt-0.5 ${headingText}`}>{athlete.sprint30m}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Pass %</p>
                        <p className={`text-sm font-black mt-0.5 ${headingText}`}>{athlete.passAccuracy}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Matches</p>
                        <p className={`text-sm font-black mt-0.5 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>
                          {athlete.fullMatches} Full
                        </p>
                      </div>
                    </div>

                    <p className={`text-xs mt-4 line-clamp-2 leading-relaxed ${bodyText}`}>
                      {lang === "en" ? athlete.bioEn : athlete.bioKa}
                    </p>

                    <button
                      className={`mt-5 w-full py-2.5 rounded-xl group-hover:bg-emerald-500 group-hover:text-slate-950 text-xs font-black transition-colors flex items-center justify-center ${
                        dark ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      {t.demo.openDossier} <ArrowRight size={14} className="ml-1.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* -------------------- 3. FOR ATHLETES (+ EA FC CARD SHOWCASE) -------------------- */}
        {activePage === "athletes" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.athletesPage.eyebrow}
              title={t.athletesPage.title}
              subtitle={t.athletesPage.subtitle}
              dark={dark}
            />

            {/* Interactive EA FC Player Card Showcase */}
            <FifaCardShowcase tier={cardTier} setTier={setCardTier} t={t} dark={dark} />

            {/* 3-Step Flow */}
            <div className={`border rounded-3xl p-7 mb-10 ${cardSurface}`}>
              <h3 className={`text-lg font-black mb-6 ${headingText}`}>{t.athletesPage.stepsTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.athletesPage.steps.map(([title, desc], idx) => (
                  <div key={title} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 font-black flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-bold ${headingText}`}>{title}</h4>
                      <p className={`text-sm mt-1 leading-relaxed ${bodyText}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.athletesPage.features.map(([title, desc], idx) => {
                const Icons = [BadgeCheck, Film, MapPin, Scale, Trophy, ShieldCheck];
                const IconComp = Icons[idx % Icons.length];
                return (
                  <div key={title} className={`border rounded-3xl p-6 ${cardSurface}`}>
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                      <IconComp size={22} />
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${headingText}`}>{title}</h4>
                    <p className={`text-sm leading-relaxed ${bodyText}`}>{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Camp Cost Comparison Banner */}
            <div
              className={`mt-10 border rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 ${
                dark
                  ? "bg-gradient-to-r from-emerald-500/15 to-blue-500/10 border-emerald-500/25"
                  : "bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200"
              }`}
            >
              <div className="max-w-2xl">
                <h3 className={`text-2xl font-black ${headingText}`}>{t.athletesPage.bannerTitle}</h3>
                <p className={`text-sm sm:text-base mt-2 leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
                  {t.athletesPage.bannerText}
                </p>
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full transition-all shadow-md"
              >
                {t.athletesPage.bannerBtn}
              </a>
            </div>
          </section>
        )}

        {/* -------------------- 4. FOR CLUBS & SCOUTS -------------------- */}
        {activePage === "clubs" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.clubsPage.eyebrow}
              title={t.clubsPage.title}
              subtitle={t.clubsPage.subtitle}
              dark={dark}
            />

            {/* 3-Step B2B Flow */}
            <div className={`border rounded-3xl p-7 mb-10 ${cardSurface}`}>
              <h3 className={`text-lg font-black mb-6 ${headingText}`}>{t.clubsPage.stepsTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.clubsPage.steps.map(([title, desc], idx) => (
                  <div key={title} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-500 font-black flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className={`font-bold ${headingText}`}>{title}</h4>
                      <p className={`text-sm mt-1 leading-relaxed ${bodyText}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6 Club Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {t.clubsPage.features.map(([title, desc], idx) => {
                const Icons = [SlidersHorizontal, Sparkles, BadgeCheck, Film, Users, MessageSquare];
                const IconComp = Icons[idx % Icons.length];
                return (
                  <div key={title} className={`border rounded-3xl p-6 ${cardSurface}`}>
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                      <IconComp size={22} />
                    </div>
                    <h4 className={`text-lg font-bold mb-2 ${headingText}`}>{title}</h4>
                    <p className={`text-sm leading-relaxed ${bodyText}`}>{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* ROI Comparison Cards */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className={`border rounded-3xl p-7 ${cardSurface}`}>
                <div className="flex items-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                  <Plane size={16} className="mr-2 text-rose-500" /> {t.clubsPage.tripTitle}
                </div>
                <div className="mt-5 space-y-3">
                  {t.clubsPage.tripRows.map(([item, cost]) => (
                    <div key={item} className="flex justify-between text-sm">
                      <span className={bodyText}>{item}</span>
                      <span className={`font-bold ${headingText}`}>{cost}</span>
                    </div>
                  ))}
                  <div
                    className={`flex justify-between pt-3 border-t ${
                      dark ? "border-white/10" : "border-slate-200"
                    }`}
                  >
                    <span className={`font-bold ${headingText}`}>{t.clubsPage.tripTotalLabel}</span>
                    <span className="font-black text-rose-500 text-lg">{t.clubsPage.tripTotalValue}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-relaxed">{t.clubsPage.tripNote}</p>
              </div>

              <div
                className={`border rounded-3xl p-7 flex flex-col justify-between ${
                  dark
                    ? "bg-gradient-to-br from-blue-600/20 to-emerald-500/15 border-blue-500/30"
                    : "bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200"
                }`}
              >
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${dark ? "text-blue-400" : "text-blue-600"}`}>
                    {t.clubsPage.scouterTitle}
                  </span>
                  <p className={`text-4xl font-black mt-3 ${headingText}`}>{t.clubsPage.scouterStat}</p>
                  <p className={`font-semibold mt-1 ${dark ? "text-slate-200" : "text-slate-800"}`}>
                    {t.clubsPage.scouterSub}
                  </p>
                  <p className={`text-sm mt-4 leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
                    {t.clubsPage.scouterText}
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => openContactModal("14-Day Club Free Pilot")}
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-black px-7 py-3.5 rounded-full transition-all shadow-md"
                  >
                    {t.clubsPage.scouterBtn} <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* -------------------- 5. PRICING -------------------- */}
        {activePage === "pricing" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.pricingPage.eyebrow}
              title={t.pricingPage.title}
              subtitle={t.pricingPage.subtitle}
              dark={dark}
            />

            {/* Audience Toggle + Currency Toggle Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div
                className={`border rounded-full p-1 flex ${
                  dark ? "bg-slate-900 border-white/10" : "bg-slate-200/80 border-slate-200"
                }`}
              >
                <button
                  onClick={() => setPricingAudience("b2b")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    pricingAudience === "b2b"
                      ? "bg-blue-600 text-white shadow"
                      : dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {t.pricingPage.tabB2B}
                </button>
                <button
                  onClick={() => setPricingAudience("b2c")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    pricingAudience === "b2c"
                      ? "bg-emerald-500 text-slate-950 shadow"
                      : dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {t.pricingPage.tabB2C}
                </button>
              </div>

              {/* Currency Switcher */}
              <div
                className={`border rounded-full p-1 flex text-xs font-black ${
                  dark ? "bg-slate-900 border-white/10" : "bg-slate-200/80 border-slate-200"
                }`}
              >
                <button
                  onClick={() => setCurrency("GEL")}
                  className={`px-3.5 py-2 rounded-full transition-colors ${
                    currency === "GEL"
                      ? dark
                        ? "bg-slate-700 text-white"
                        : "bg-white text-slate-900 shadow-sm"
                      : dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  ₾ GEL
                </button>
                <button
                  onClick={() => setCurrency("EUR")}
                  className={`px-3.5 py-2 rounded-full transition-colors ${
                    currency === "EUR"
                      ? dark
                        ? "bg-slate-700 text-white"
                        : "bg-white text-slate-900 shadow-sm"
                      : dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  € EUR
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {(pricingAudience === "b2b" ? t.pricingPage.b2bPlans : t.pricingPage.b2cPlans).map((plan) => {
                const isB2B = pricingAudience === "b2b";
                const accentBorder = plan.featured
                  ? isB2B
                    ? dark
                      ? "border-blue-500/70 bg-slate-800/80 shadow-xl shadow-blue-500/10"
                      : "border-blue-500 bg-white shadow-xl shadow-blue-500/10 ring-1 ring-blue-500"
                    : dark
                    ? "border-emerald-500/70 bg-slate-800/80 shadow-xl shadow-emerald-500/10"
                    : "border-emerald-500 bg-white shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500"
                  : cardSurface;

                const badgeStyle = isB2B ? "bg-blue-600 text-white" : "bg-emerald-500 text-slate-950";
                const btnStyle = plan.featured
                  ? isB2B
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  : dark
                  ? "bg-slate-800 hover:bg-slate-700 text-white"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-900";

                return (
                  <div key={plan.name} className={`rounded-3xl p-7 border relative flex flex-col ${accentBorder}`}>
                    {plan.featured && (
                      <span
                        className={`absolute -top-3 left-7 text-[11px] font-black px-3 py-1 rounded-full tracking-wider ${badgeStyle}`}
                      >
                        {t.pricingPage.popularBadge}
                      </span>
                    )}
                    <p className="text-xs font-bold text-slate-500 tracking-widest">{plan.tag}</p>
                    <h3 className={`text-xl font-black mt-1 ${headingText}`}>{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className={`text-4xl font-black ${headingText}`}>
                        {currency === "EUR" ? plan.priceEur : plan.priceGel}
                      </span>
                      <span className="text-slate-500 text-sm font-medium ml-2">{plan.period}</span>
                    </div>
                    <p
                      className={`text-xs font-bold mt-2 ${
                        isB2B
                          ? dark
                            ? "text-blue-400"
                            : "text-blue-600"
                          : dark
                          ? "text-emerald-400"
                          : "text-emerald-600"
                      }`}
                    >
                      {plan.note}
                    </p>
                    <p className={`text-sm mt-3 leading-relaxed ${bodyText}`}>{plan.forWho}</p>

                    <ul className="mt-6 space-y-3 flex-1">
                      {plan.items.map((feat) => (
                        <li
                          key={feat}
                          className={`flex items-start text-sm ${dark ? "text-slate-300" : "text-slate-700"}`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 ${
                              isB2B ? "bg-blue-500/15 text-blue-500" : "bg-emerald-500/15 text-emerald-500"
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() =>
                        openContactModal(`${plan.name} (${currency === "EUR" ? plan.priceEur : plan.priceGel})`)
                      }
                      className={`mt-8 w-full py-3.5 rounded-full font-black text-sm transition-all ${btnStyle}`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* -------------------- 6. ABOUT US -------------------- */}
        {activePage === "about" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.aboutPage.eyebrow}
              title={t.aboutPage.title}
              subtitle={t.aboutPage.subtitle}
              dark={dark}
            />

            {/* Trust, Verification & Safeguarding */}
            <div className="mb-16">
              <h3 className={`text-2xl font-black text-center mb-8 ${headingText}`}>{t.aboutPage.trustTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.aboutPage.trustCards.map(([title, desc], idx) => {
                  const Icons = [BadgeCheck, ShieldCheck, Check];
                  const IconComp = Icons[idx];
                  return (
                    <div key={title} className={`border rounded-3xl p-6 ${cardSurface}`}>
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                        <IconComp size={24} />
                      </div>
                      <h4 className={`text-lg font-bold mb-2 ${headingText}`}>{title}</h4>
                      <p className={`text-sm leading-relaxed ${bodyText}`}>{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leadership Team */}
            <div>
              <h3 className={`text-2xl font-black text-center mb-8 ${headingText}`}>{t.aboutPage.teamTitle}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.aboutPage.team.map(([name, role, bio]) => (
                  <div key={name} className={`border rounded-3xl p-6 text-center ${cardSurface}`}>
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-lg">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className={`text-base font-bold mt-4 ${headingText}`}>{name}</h4>
                    <p className={`text-xs font-bold mt-1 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>{role}</p>
                    <p className={`text-xs mt-3 leading-relaxed ${bodyText}`}>{bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* -------------------- 7. DEDICATED FAQ PAGE (HELP CENTER DESIGN) -------------------- */}
        {activePage === "faq" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.faqPage.eyebrow}
              title={t.faqPage.title}
              subtitle={t.faqPage.subtitle}
              dark={dark}
            />

            {/* Search Input + Category Filter Pills */}
            <div className="max-w-3xl mx-auto mb-10 space-y-4">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder={t.faqPage.searchPlaceholder}
                  className={`w-full border rounded-2xl pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:border-emerald-500 ${cardSurface} ${headingText}`}
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {t.faqPage.categories.map(([catId, catLabel]) => {
                  const active = faqCategory === catId;
                  return (
                    <button
                      key={catId}
                      onClick={() => {
                        setFaqCategory(catId);
                        setOpenFaqIndex(0);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                        active
                          ? "bg-emerald-500 text-slate-950 border-emerald-500 shadow-sm"
                          : dark
                          ? "bg-slate-900 border-white/10 text-slate-400 hover:text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {catLabel}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Help Center Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4 items-start">
              {filteredFaqs.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                const tagColor =
                  item.cat === "clubs"
                    ? "bg-blue-500/10 text-blue-500"
                    : item.cat === "safety"
                    ? "bg-amber-500/10 text-amber-500"
                    : "bg-emerald-500/10 text-emerald-500";

                return (
                  <div
                    key={item.q}
                    className={`border rounded-3xl transition-all ${
                      isOpen
                        ? dark
                          ? "bg-slate-900 border-emerald-500/50 shadow-lg"
                          : "bg-white border-emerald-500/60 shadow-md"
                        : cardSurface
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4"
                    >
                      <div>
                        <span
                          className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2.5 ${tagColor}`}
                        >
                          {item.tag}
                        </span>
                        <h3 className={`font-bold text-base leading-snug ${headingText}`}>{item.q}</h3>
                      </div>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-transform ${
                          isOpen
                            ? "bg-emerald-500 text-slate-950 rotate-180"
                            : dark
                            ? "bg-slate-800 text-slate-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        className={`px-6 pb-6 text-sm leading-relaxed border-t mt-1 pt-4 ${
                          dark ? "border-white/5 text-slate-300" : "border-slate-100 text-slate-600"
                        }`}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Contact CTA Box */}
            <div
              className={`mt-12 border rounded-3xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5 ${
                dark ? "bg-slate-900/90 border-white/10" : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div>
                <h4 className={`text-lg font-black ${headingText}`}>{t.faqPage.stillHaveQuestions}</h4>
                <p className={`text-sm mt-1 ${bodyText}`}>{t.faqPage.stillHaveText}</p>
              </div>
              <button
                onClick={() => openContactModal("General Inquiry from FAQ")}
                className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm flex-shrink-0 transition-colors"
              >
                {t.faqPage.askBtn}
              </button>
            </div>
          </section>
        )}
      </main>

      {/* ============================================================== */}
      {/* FOOTER                                                         */}
      {/* ============================================================== */}
      <footer
        className={`border-t mt-auto transition-colors ${
          dark ? "border-white/10 bg-slate-950/90" : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Logo onClick={() => navigateTo("home")} dark={dark} />
            <p className="text-xs text-slate-500 mt-2 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-500">
            <button onClick={() => navigateTo("about")} className="hover:text-emerald-500 transition-colors">
              {t.footer.privacy}
            </button>
            <button onClick={() => navigateTo("about")} className="hover:text-emerald-500 transition-colors">
              {t.footer.safeguarding}
            </button>
            <button onClick={() => navigateTo("faq")} className="hover:text-emerald-500 transition-colors">
              FAQ
            </button>
            <button onClick={() => openContactModal()} className="text-emerald-500 hover:underline font-bold">
              {t.ctaContact}
            </button>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Scouter · Tbilisi, Georgia. {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* ============================================================== */}
      {/* MODAL 1: ATHLETE FULL DOSSIER (From Live Demo)                 */}
      {/* ============================================================== */}
      {selectedAthlete && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`border rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl ${
              dark ? "bg-slate-900 border-white/15" : "bg-white border-slate-200"
            }`}
          >
            <div className={`bg-gradient-to-r ${selectedAthlete.gradient} p-6 flex justify-between items-start`}>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-slate-950/75 text-white">
                    {selectedAthlete.position} · {selectedAthlete.ageGroup}
                  </span>
                  {selectedAthlete.verified && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-950/80 text-emerald-400">
                      <BadgeCheck size={14} className="mr-1" /> {t.demo.verifiedBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white mt-2">{selectedAthlete.name}</h3>
                <p className="text-xs text-white/90 mt-1">
                  {selectedAthlete.club} · {selectedAthlete.city}, {selectedAthlete.region} · {selectedAthlete.height} (
                  {selectedAthlete.foot} foot)
                </p>
              </div>
              <button
                onClick={() => setSelectedAthlete(null)}
                className="w-9 h-9 rounded-full bg-slate-950/60 text-white flex items-center justify-center hover:bg-slate-950"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Safeguarding Protocol Notice for Under-18 Athletes */}
              {selectedAthlete.isMinor && (
                <div
                  className={`rounded-2xl p-3.5 border flex items-start gap-2.5 text-xs ${
                    dark
                      ? "bg-amber-500/10 border-amber-500/25 text-amber-200"
                      : "bg-amber-50 border-amber-200 text-amber-900"
                  }`}
                >
                  <ShieldCheck size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{t.demo.safeguardingNotice}</span>
                </div>
              )}

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className={`border rounded-2xl p-3 ${subSurface}`}>
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalSprint}</p>
                  <p className={`text-lg font-black mt-0.5 ${headingText}`}>{selectedAthlete.sprint30m}</p>
                </div>
                <div className={`border rounded-2xl p-3 ${subSurface}`}>
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalPass}</p>
                  <p className={`text-lg font-black mt-0.5 ${headingText}`}>{selectedAthlete.passAccuracy}</p>
                </div>
                <div className={`border rounded-2xl p-3 ${subSurface}`}>
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalMatches}</p>
                  <p className={`text-lg font-black mt-0.5 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>
                    {selectedAthlete.fullMatches} x 90'
                  </p>
                </div>
              </div>

              <div className={`border rounded-2xl p-4 flex items-center justify-between ${subSurface}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-500 flex items-center justify-center">
                    <Play size={20} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${headingText}`}>{t.demo.modalWatch}</p>
                    <p className="text-xs text-slate-500">Full 90-min Regional League Match · HD 1080p</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-500">VERIFIED LOG</span>
              </div>

              <p className={`text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-700"}`}>
                {lang === "en" ? selectedAthlete.bioEn : selectedAthlete.bioKa}
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    const name = selectedAthlete.name;
                    setSelectedAthlete(null);
                    openContactModal(`Compliant Scouting Inquiry for ${name}`);
                  }}
                  className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-full text-sm transition-colors"
                >
                  {t.demo.modalInvite}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL 2: CONTACT US / REQUEST PILOT FORM                       */}
      {/* ============================================================== */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`border rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative ${
              dark ? "bg-slate-900 border-white/15" : "bg-white border-slate-200"
            }`}
          >
            <button
              onClick={() => setContactOpen(false)}
              className={`absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center ${
                dark ? "bg-slate-800 text-slate-300 hover:text-white" : "bg-slate-100 text-slate-600 hover:text-slate-900"
              }`}
            >
              <X size={18} />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className={`text-2xl font-black ${headingText}`}>{t.contactModal.successTitle}</h3>
                <p className={`text-sm mt-2 leading-relaxed ${bodyText}`}>{t.contactModal.successText}</p>
                <button
                  onClick={() => setContactOpen(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-emerald-500 text-slate-950 font-black text-sm"
                >
                  {t.contactModal.close}
                </button>
              </div>
            ) : (
              <>
                <h3 className={`text-2xl font-black pr-8 ${headingText}`}>{t.contactModal.title}</h3>
                <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${bodyText}`}>{t.contactModal.subtitle}</p>

                <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">{t.contactModal.nameLabel}</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">{t.contactModal.roleLabel}</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={`w-full border rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                      >
                        {t.contactModal.roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-1">{t.contactModal.orgLabel}</label>
                      <input
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className={`w-full border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">{t.contactModal.emailLabel}</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-1">{t.contactModal.msgLabel}</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full border rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-emerald-500 ${subSurface} ${headingText}`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-full text-sm flex items-center justify-center transition-colors"
                  >
                    <Send size={16} className="mr-2" /> {t.contactModal.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
