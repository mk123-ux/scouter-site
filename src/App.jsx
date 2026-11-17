import React, { useState, useMemo } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  Film,
  Filter,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Plane,
  Play,
  Scale,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

const APP_URL = "https://scouter-xi.vercel.app/";

/* ------------------------------------------------------------------ */
/* DEMO ATHLETE DATABASE (Interactive Live Demo)                      */
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
    rating: 84,
    sprint30m: "4.08 s",
    passAccuracy: "87%",
    pace: 88,
    stamina: 85,
    fullMatches: 6,
    highlights: 4,
    gradient: "from-blue-600 to-emerald-500",
    bioEn: "Explosive overlapping full-back with high stamina and verified federation match logs from Western Georgia Youth League.",
    bioKa: "სწრაფი მარცხენა მცველი მაღალი გამძლეობითა და დასავლეთ საქართველოს ლიგის ფედერაციის მიერ ვერიფიცირებული მატჩებით.",
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
    rating: 87,
    sprint30m: "3.98 s",
    passAccuracy: "81%",
    pace: 91,
    stamina: 83,
    fullMatches: 8,
    highlights: 5,
    gradient: "from-emerald-600 to-teal-500",
    bioEn: "Clinical central forward with strong aerial presence and 14 goals in 18 regional academy fixtures.",
    bioKa: "ცენტრალური თავდამსხმელი ძლიერი ფიზიკური მონაცემებითა და 18 რეგიონულ მატჩში გატანილი 14 გოლით.",
  },
  {
    id: 3,
    name: "Dato Beridze",
    age: 16,
    ageGroup: "U17",
    position: "Midfielder",
    region: "Tbilisi",
    city: "Tbilisi",
    height: "176 cm",
    foot: "Both",
    club: "Saburtalo Youth",
    verified: true,
    rating: 85,
    sprint30m: "4.15 s",
    passAccuracy: "91%",
    pace: 82,
    stamina: 89,
    fullMatches: 9,
    highlights: 6,
    gradient: "from-indigo-600 to-blue-500",
    bioEn: "Box-to-box central midfielder known for progressive line-breaking passes and tactical discipline.",
    bioKa: "ცენტრალური ნახევარმცველი გამორჩეული პასის სიზუსტითა და ტაქტიკური დისციპლინით.",
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
    rating: 81,
    sprint30m: "4.12 s",
    passAccuracy: "79%",
    pace: 87,
    stamina: 80,
    fullMatches: 4,
    highlights: 3,
    gradient: "from-cyan-600 to-emerald-500",
    bioEn: "Agile inverted winger/striker with high dribbling success rate in 1v1 situations.",
    bioKa: "სწრაფი შემტევი 1-1-ზე დრიბლინგის მაღალი მაჩვენებლითა და ოფიციალური ფიზიკური ტესტებით.",
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
    rating: 83,
    sprint30m: "4.35 s",
    passAccuracy: "84%",
    pace: 74,
    stamina: 86,
    fullMatches: 7,
    highlights: 4,
    gradient: "from-blue-700 to-indigo-500",
    bioEn: "Commanding goalkeeper with strong distribution under pressure and verified reflex test recordings.",
    bioKa: "მაღალი მეკარე ბურთის ზუსტი განაწილებითა და რეფლექსების ოფიციალური ვიდეოტესტებით.",
  },
  {
    id: 6,
    name: "Tornike Gelashvili",
    age: 17,
    ageGroup: "U17",
    position: "Left Back",
    region: "Tbilisi",
    city: "Tbilisi",
    height: "180 cm",
    foot: "Left",
    club: "Independent / Regional",
    verified: false,
    rating: 78,
    sprint30m: "4.20 s",
    passAccuracy: "80%",
    pace: 83,
    stamina: 81,
    fullMatches: 2,
    highlights: 3,
    gradient: "from-slate-700 to-slate-600",
    bioEn: "Self-uploaded profile pending coach confirmation. Full match footage available for remote review.",
    bioKa: "პროფილი ელოდება მწვრთნელის ვერიფიკაციას. სრული მატჩის ჩანაწერი ხელმისაწვდომია.",
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
      ["clubs", "For Clubs & Scouts"],
      ["pricing", "Pricing"],
      ["about", "About Us"],
    ],
    ctaOpenApp: "Open App",
    ctaContact: "Contact Us",
    hero: {
      badge: "Talent is universal. Opportunity is not.",
      title: "Young talent. Global opportunities",
      subtitle:
        "Scouter is the digital scouting intelligence platform connecting verified young Georgian athletes with international clubs, academies, and scouts — removing geographical and financial barriers.",
      btnDemo: "Explore Live Demo",
      btnTrial: "Start 30-Day Free Trial",
      note: "Free forever for athletes · 30-day free trial for clubs & scouts",
      traction: [
        ["1,200+", "Verified athlete profiles"],
        ["18", "Partner academies across Georgia"],
        ["45+", "Active European scouts"],
        ["100%", "Federation & coach data sync"],
      ],
      roleAthleteTitle: "I'm an athlete or a parent",
      roleAthleteText: "Build a verified profile, upload full matches, and get discovered without expensive foreign camps.",
      roleAthleteCta: "See athlete benefits",
      roleClubTitle: "I'm a scout or a club",
      roleClubText: "Filter verified Georgian talent by metrics and watch uncut match archives before flying in.",
      roleClubCta: "See club tools & ROI",
    },
    demo: {
      eyebrow: "Interactive Scouting Workspace",
      title: "Discover verified Georgian talent in seconds",
      subtitle: "Test our B2B scouting database. Filter by position, age group, region, or verification status and open full dossiers.",
      filterPos: "Position",
      filterAge: "Age Group",
      filterRegion: "Region",
      verifiedOnly: "Verified Only",
      showing: "Showing",
      athletesCount: "athletes",
      openDossier: "Open Full Dossier",
      verifiedBadge: "Federation Verified",
      pendingBadge: "Pending Verification",
      modalMatches: "Full Uncut Matches",
      modalSprint: "30m Sprint",
      modalPass: "Pass Accuracy",
      modalInvite: "Invite to Trial / Contact",
      modalWatch: "Preview Full Match Footage",
    },
    athletesPage: {
      eyebrow: "For Athletes & Parents",
      title: "Not a social network — a professional scouting tool",
      subtitle: "Your talent should be judged on verified metrics and full matches, not personal connections or family budget.",
      stepsTitle: "How it works for athletes",
      steps: [
        ["Build your profile", "Add physical metrics, statistics, and upload highlights, full matches, and physical test recordings."],
        ["Get verified for free", "Data is cross-checked with federation logs and local coaches. Verified profiles get a trust badge on every plan."],
        ["Get discovered globally", "Smart matching algorithms place your profile directly in front of European scouts searching for your exact profile."],
      ],
      features: [
        ["Verified data", "Integration with federation records and local coaches. Verification is 100% free on every plan."],
        ["Full matches count", "Scouts rely on uncut, full-length game footage rather than edited 2-minute highlight reels."],
        ["From any region", "Showcase your talent from Zugdidi, Kutaisi, or Batumi without relocating to the capital."],
        ["Zero nepotism", "Objective physical and game metrics give every hardworking athlete an equal international stage."],
        ["Sponsor visibility", "Sports brands and private supporters use Scouter to back standout youth athletes."],
        ["Protection for minors", "Under-18 accounts require guardian consent with strictly moderated communication rules."],
      ],
      bannerTitle: "Skip the $3,500 overseas trial camp",
      bannerText:
        "A two-week European trial camp costs $1,500–3,500 before flights and hotels — often exceeding months of family income. A verified Scouter profile is free for life.",
      bannerBtn: "Create Free Profile",
    },
    clubsPage: {
      eyebrow: "For Clubs & Scouts",
      title: "Evaluate emerging markets with 75% lower scouting cost",
      subtitle: "Replace blind international scouting trips with verified data, physical test logs, and uncut match archives.",
      stepsTitle: "How it works for clubs",
      steps: [
        ["Filter with precision", "Search by position, age, preferred foot, sprint speed, and pass accuracy across all Georgian regions."],
        ["Evaluate remotely", "Watch full 90-minute match recordings and review coach-verified physical tests from your office."],
        ["Connect directly", "Message shortlisted players and their guardians or academies directly with zero intermediary fees."],
      ],
      features: [
        ["Smart filters", "Granular filtering across physical, technical, and positional metrics."],
        ["AI recommendations", "Automated talent alerts tailored to your club's tactical profile."],
        ["Verified provenance", "Every verified badge is backed by federation data or academy coach confirmation."],
        ["Full match archives", "Complete game footage alongside tagged key actions."],
        ["Shortlists & comparison", "Compare multiple candidates side-by-side before scheduling live trials."],
        ["Direct communication", "Transparent, compliant messaging with guardians and academies."],
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
      scouterTitle: "With Scouter Pro Club",
      scouterStat: "70–80%",
      scouterSub: "reduction in early-stage scouting expenses",
      scouterText:
        "For less than the cost of a single trip, your entire scouting staff gets 12 months of unlimited remote access to verified Georgian prospects. Fly only when you are ready to sign.",
      scouterBtn: "Request 30-Day Free Trial",
    },
    pricingPage: {
      eyebrow: "Transparent Pricing",
      title: "Built for sustainable talent discovery",
      subtitle: "Switch between Club/Scout B2B plans and Athlete B2C plans, or toggle your preferred currency.",
      tabB2B: "For Clubs & Scouts (B2B)",
      tabB2C: "For Athletes & Parents (B2C)",
      popularBadge: "MOST POPULAR",
      trialNote: "Includes 30-day free trial",
      freeNote: "Free forever · No credit card",
      b2bPlans: [
        {
          tag: "01 · STARTER",
          name: "Scout Starter",
          priceEur: "€400",
          priceGel: "1,200 ₾",
          period: "/ year",
          note: "30-day free trial",
          forWho: "For independent scouts and regional academies starting remote scouting.",
          items: [
            "1 scout user seat",
            "Core verified athlete database access",
            "Standard filters (age, position, region)",
            "Up to 5 direct athlete contacts / month",
            "Highlight video access",
          ],
          cta: "Start 30-Day Trial",
          featured: false,
        },
        {
          tag: "02 · RECOMMENDED",
          name: "Pro Club",
          priceEur: "€700",
          priceGel: "2,000 ₾",
          period: "/ year",
          note: "30-day free trial · Best ROI",
          forWho: "For professional clubs and scouting departments seeking full remote evaluation.",
          items: [
            "Everything in Scout Starter",
            "Up to 3 user seats per club",
            "Unlimited verified database access",
            "Full 90-minute match video archives",
            "Physical test metrics (30m sprint, agility, pass %)",
            "Unlimited direct messaging with guardians & academies",
            "Candidate comparison & shortlist workspace",
          ],
          cta: "Start 30-Day Trial",
          featured: true,
        },
        {
          tag: "03 · ENTERPRISE",
          name: "Elite Academy",
          priceEur: "€1,700",
          priceGel: "5,000 ₾",
          period: "/ year",
          note: "30-day free trial · Dedicated support",
          forWho: "For multi-team clubs and international academies requiring concierge scouting.",
          items: [
            "Everything in Pro Club",
            "Unlimited organization user seats",
            "AI-powered talent match alerts",
            "Concierge scouting: custom dossiers prepared by our team",
            "Exclusive quarterly regional talent reports",
            "Priority trial coordination in Tbilisi",
          ],
          cta: "Contact Enterprise Sales",
          featured: false,
        },
      ],
      b2cPlans: [
        {
          tag: "01 · LIFETIME FREE",
          name: "Basic Profile",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ forever",
          note: "Free verification included",
          forWho: "For every young athlete in Georgia ready to showcase their game internationally.",
          items: [
            "Complete digital athlete profile",
            "Free federation & coach data verification",
            "Upload highlights & full match links",
            "Visible in international scout searches",
            "Parent/guardian safety controls",
          ],
          cta: "Create Free Profile",
          featured: false,
        },
        {
          tag: "02 · VISIBILITY BOOST",
          name: "Pro Athlete",
          priceEur: "€50",
          priceGel: "150 ₾",
          period: "/ year",
          note: "Most chosen by academy players",
          forWho: "For ambitious athletes who want priority ranking and scout engagement analytics.",
          items: [
            "Everything in Basic Profile",
            "Priority placement in scout search results",
            "Custom EA FC-style verified player card for social sharing",
            "Scout view analytics (see which clubs viewed your profile)",
            "Extended physical & match performance charts",
          ],
          cta: "Upgrade to Pro",
          featured: true,
        },
        {
          tag: "03 · FULL PORTFOLIO",
          name: "Elite Athlete",
          priceEur: "€85",
          priceGel: "250 ₾",
          period: "/ year",
          note: "Includes video editing support",
          forWho: "For players preparing an international academy application package.",
          items: [
            "Everything in Pro Athlete",
            "Professional highlight reel editing by our media team",
            "Official physical test benchmarking report",
            "Featured spotlight in monthly scout newsletters",
            "Priority support for trial documentation",
          ],
          cta: "Choose Elite",
          featured: false,
        },
      ],
    },
    aboutPage: {
      eyebrow: "About Scouter",
      title: "Leveling the playing field for Georgian talent",
      subtitle:
        "We believe a young athlete's future should be determined by verified performance and hard work — never by geography or personal connections.",
      trustTitle: "Trust, Verification & Child Safeguarding",
      trustCards: [
        [
          "Multi-Layer Verification",
          "Every 'Verified' badge requires cross-checking with official federation registries or direct confirmation from licensed academy coaches.",
        ],
        [
          "Minor Safeguarding (U18)",
          "Athletes under 18 cannot activate public messaging without verified parental/guardian consent. All club outreach is logged and moderated.",
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
      faqTitle: "Frequently Asked Questions",
      faq: [
        [
          "How is athlete data verified?",
          "We cross-reference match appearances and statistics with official federation logs and partner academy coaches. Verification is completely free for all athletes.",
        ],
        [
          "How are underage athletes protected on Scouter?",
          "Accounts for players under 18 require parent or legal guardian approval. Direct messages from scouts are routed through guardian-monitored channels.",
        ],
        [
          "Can clubs test the platform before paying?",
          "Yes. Every B2B plan includes a full 30-day free trial so scouts can explore verified profiles and match archives risk-free.",
        ],
        [
          "Is Scouter only for football?",
          "Our initial launch focuses on football, with structured expansion to basketball and rugby already built into our multi-sport data architecture.",
        ],
      ],
    },
    contactModal: {
      title: "Get in touch with Scouter",
      subtitle: "Request a 30-day club trial, partner your academy, or ask our team a question.",
      nameLabel: "Full Name",
      roleLabel: "I am a...",
      roles: ["Club / International Scout", "Academy / Coach", "Athlete / Parent", "Sponsor / Partner"],
      orgLabel: "Club / Organization (Optional)",
      emailLabel: "Work or Personal Email",
      msgLabel: "Message",
      submit: "Send Request",
      successTitle: "Request Received!",
      successText: "Our scouting operations team in Tbilisi will respond within 24 hours.",
      close: "Close",
    },
    footer: {
      tagline: "Verified sports intelligence connecting Georgian talent with global clubs.",
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
      ["athletes", "სპორტსმენებისთვის"],
      ["clubs", "კლუბებისთვის"],
      ["pricing", "ფასები"],
      ["about", "ჩვენ შესახებ"],
    ],
    ctaOpenApp: "აპლიკაცია",
    ctaContact: "კონტაქტი",
    hero: {
      badge: "ნიჭი უნივერსალურია. შესაძლებლობა — არა.",
      title: "ახალგაზრდა ტალანტები. გლობალური შესაძლებლობები",
      subtitle:
        "Scouter არის ციფრული სკაუტინგ-პლატფორმა, რომელიც ვერიფიცირებულ ქართველ სპორტსმენებს აკავშირებს საერთაშორისო კლუბებთან, აკადემიებთან და სკაუტებთან — გეოგრაფიული და ფინანსური ბარიერების გარეშე.",
      btnDemo: "ნახე Live დემო",
      btnTrial: "30-დღიანი უფასო Trial",
      note: "სპორტსმენებისთვის უფასოა სამუდამოდ · 30-დღიანი უფასო საცდელი პერიოდი კლუბებისთვის",
      traction: [
        ["1,200+", "ვერიფიცირებული სპორტსმენი"],
        ["18", "პარტნიორი აკადემია საქართველოში"],
        ["45+", "აქტიური ევროპელი სკაუტი"],
        ["100%", "ფედერაციისა და მწვრთნელების ვერიფიკაცია"],
      ],
      roleAthleteTitle: "ვარ სპორტსმენი ან მშობელი",
      roleAthleteText: "შექმენი ვერიფიცირებული პროფილი, ატვირთე სრული მატჩები და მოხვდი სკაუტების რადარზე ძვირადღირებული კემპების გარეშე.",
      roleAthleteCta: "უპირატესობების ნახვა",
      roleClubTitle: "ვარ სკაუტი ან კლუბი",
      roleClubText: "გაფილტრე ქართველი ტალანტები მეტრიკებით და ნახე სრული მატჩები საქართველოში ჩამოფრენამდე.",
      roleClubCta: "კლუბის ინსტრუმენტები",
    },
    demo: {
      eyebrow: "ინტერაქტიული სკაუტინგ-პლატფორმა",
      title: "აღმოაჩინე ვერიფიცირებული ქართველი ტალანტები წამებში",
      subtitle: "დატესტე B2B მონაცემთა ბაზა: გაფილტრე პოზიციის, ასაკის, რეგიონის ან ვერიფიკაციის მიხედვით და გახსენი სრული დოსიე.",
      filterPos: "პოზიცია",
      filterAge: "ასაკი",
      filterRegion: "რეგიონი",
      verifiedOnly: "მხოლოდ ვერიფიცირებული ✓",
      showing: "ნაჩვენებია",
      athletesCount: "სპორტსმენი",
      openDossier: "სრული დოსიეს გახსნა",
      verifiedBadge: "ვერიფიცირებულია",
      pendingBadge: "მოწმდება",
      modalMatches: "სრული მატჩები",
      modalSprint: "30მ სპრინტი",
      modalPass: "პასის სიზუსტე",
      modalInvite: "სინჯებზე მოწვევა / კონტაქტი",
      modalWatch: "სრული მატჩის ჩანაწერის ნახვა",
    },
    athletesPage: {
      eyebrow: "სპორტსმენებისა და მშობლებისთვის",
      title: "არა სოციალური ქსელი, არამედ პროფესიონალური სკაუტინგ-ინსტრუმენტი",
      subtitle: "შენი კარიერა უნდა განისაზღვროს ვერიფიცირებული მონაცემებითა და სრული მატჩებით, და არა ნაცნობობით ან ოჯახის ბიუჯეტით.",
      stepsTitle: "როგორ მუშაობს სპორტსმენებისთვის",
      steps: [
        ["შექმენი პროფილი", "დაამატე ფიზიკური მონაცემები, სტატისტიკა, ჰაილაითები, სრული მატჩები და ფიზიკური ტესტების ვიდეოები."],
        ["გაიარე უფასო ვერიფიკაცია", "მონაცემები მოწმდება ფედერაციის ბაზებსა და მწვრთნელებთან. ვერიფიკაციის ნიშანი უფასოა ყველა პაკეტზე."],
        ["გახდი ხილვადი გლობალურად", "ჭკვიანი ალგორითმი შენს პროფილს პირდაპირ აჩვენებს ევროპელ სკაუტებს, რომლებიც შენს პოზიციას ეძებენ."],
      ],
      features: [
        ["ვერიფიცირებული მონაცემები", "ფედერაციასთან და მწვრთნელებთან გადამოწმებული სტატისტიკა — სრულიად უფასოდ."],
        ["სრული მატჩების არქივი", "სკაუტები აფასებენ სრულ, დაუმონტაჟებელ თამაშებს და არა მხოლოდ 2-წუთიან კლიპებს."],
        ["ნებისმიერი რეგიონიდან", "აჩვენე შენი შესაძლებლობები ზუგდიდიდან, ქუთაისიდან თუ ბათუმიდან თბილისში გადმოსვლის გარეშე."],
        ["ნეპოტიზმის გარეშე", "ობიექტური მეტრიკები ყველა შრომისმოყვარე სპორტსმენს აძლევს თანაბარ საერთაშორისო შანსს."],
        ["სპონსორების მოზიდვა", "სპორტული ბრენდები და მხარდამჭერები პლატფორმაზე ეძებენ წარმატებულ ახალგაზრდებს."],
        ["არასრულწლოვანთა დაცვა", "18 წლამდე სპორტსმენების პროფილები იმართება მშობლის თანხმობით და მკაცრი კონტროლით."],
      ],
      bannerTitle: "დაზოგე $3,500-იანი ევროპული საზაფხულო კემპის ხარჯი",
      bannerText:
        "ორკვირიანი ევროპული სინჯები $1,500–3,500 ჯდება ფრენისა და სასტუმროს გარეშე. Scouter-ზე ვერიფიცირებული პროფილის შექმნა სრულიად უფასოა.",
      bannerBtn: "შექმენი უფასო პროფილი",
    },
    clubsPage: {
      eyebrow: "კლუბებისა და სკაუტებისთვის",
      title: "აღმოაჩინე ახალი ბაზრები 75%-ით ნაკლები დანახარჯით",
      subtitle: "ჩაანაცვლე ძვირადღირებული და სარისკო მივლინებები ვერიფიცირებული მონაცემებითა და სრული მატჩების არქივით.",
      stepsTitle: "როგორ მუშაობს კლუბებისთვის",
      steps: [
        ["ზუსტი ფილტრაცია", "მოძებნე მოთამაშეები პოზიციის, ასაკის, სპრინტის დროისა და პასის სიზუსტის მიხედვით."],
        ["დისტანციური შეფასება", "უყურე 90-წუთიან მატჩებს და ნახე მწვრთნელის მიერ დადასტურებული ტესტები ოფისიდან გაუსვლელად."],
        ["პირდაპირი კონტაქტი", "დაუკავშირდი შერჩეულ მოთამაშეებს, მშობლებსა და აკადემიებს შუამავლების გარეშე."],
      ],
      features: [
        ["სმარტ ფილტრები", "დეტალური ძიება ფიზიკური და ტექნიკური მაჩვენებლების მიხედვით."],
        ["AI რეკომენდაციები", "ალგორითმი ავტომატურად გირჩევს თქვენი კლუბის სტილზე მორგებულ ტალანტებს."],
        ["სანდო ვერიფიკაცია", "ყოველი ვერიფიცირებული პროფილი დადასტურებულია ოფიციალური წყაროებით."],
        ["სრული მატჩები", "სრული თამაშების ვიდეოარქივი საკვანძო ეპიზოდებთან ერთად."],
        ["შედარება და Shortlist", "შეადარე კანდიდატები ერთმანეთს სინჯებზე მოწვევამდე."],
        ["პირდაპირი კომუნიკაცია", "უსაფრთხო და გამჭვირვალე კავშირი აკადემიებთან და მშობლებთან."],
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
      scouterTitle: "Scouter Pro Club-თან ერთად",
      scouterStat: "70–80%",
      scouterSub: "ეკონომია საწყისი სკაუტინგის ხარჯებზე",
      scouterText:
        "ერთი მივლინების ფასზე ნაკლებად, თქვენი გუნდი იღებს 1-წლიან ულიმიტო წვდომას ვერიფიცირებულ ბაზაზე. ჩამოფრინდით მხოლოდ უკვე შერჩეულ ტალანტებზე.",
      scouterBtn: "მოითხოვე 30-დღიანი Trial",
    },
    pricingPage: {
      eyebrow: "გამჭვირვალე ფასები",
      title: "აირჩიე შენზე მორგებული პაკეტი",
      subtitle: "გადართე კლუბების (B2B) და სპორტსმენების (B2C) პაკეტებს შორის ან აირჩიე სასურველი ვალუტა.",
      tabB2B: "კლუბებისა და სკაუტებისთვის (B2B)",
      tabB2C: "სპორტსმენებისთვის (B2C)",
      popularBadge: "MOST POPULAR",
      trialNote: "მოყვება 30-დღიანი უფასო Trial",
      freeNote: "უფასოა სამუდამოდ",
      b2bPlans: [
        {
          tag: "01 · STARTER",
          name: "Scout Starter",
          priceEur: "€400",
          priceGel: "1,200 ₾",
          period: "/ წელი",
          note: "30-დღიანი უფასო Trial",
          forWho: "ინდივიდუალური სკაუტებისა და მცირე აკადემიებისთვის.",
          items: [
            "1 სკაუტის პროფილი",
            "წვდომა ვერიფიცირებულ საბაზისო ბაზაზე",
            "სტანდარტული ფილტრები (ასაკი, პოზიცია, რეგიონი)",
            "თვეში 5 სპორტსმენთან კონტაქტი",
            "ჰაილაით ვიდეოების ნახვა",
          ],
          cta: "დაიწყე 30-დღიანი Trial",
          featured: false,
        },
        {
          tag: "02 · RECOMMENDED",
          name: "Pro Club",
          priceEur: "€700",
          priceGel: "2,000 ₾",
          period: "/ წელი",
          note: "30-დღიანი Trial · საუკეთესო არჩევანი",
          forWho: "კლუბებისა და სკაუტინგ დეპარტამენტებისთვის სრული დისტანციური შეფასებისთვის.",
          items: [
            "ყველაფერი Scout Starter პაკეტიდან",
            "3 მომხმარებლის წვდომა ერთი კლუბიდან",
            "ულიმიტო წვდომა ვერიფიცირებულ ბაზაზე",
            "სრული 90-წუთიანი მატჩების ვიდეოარქივი",
            "ფიზიკური ტესტები (30მ სპრინტი, პასის სიზუსტე)",
            "ულიმიტო პირდაპირი მესიჯები მშობლებთან და აკადემიებთან",
            "კანდიდატების შედარებისა და Shortlist-ის სივრცე",
          ],
          cta: "დაიწყე 30-დღიანი Trial",
          featured: true,
        },
        {
          tag: "03 · ENTERPRISE",
          name: "Elite Academy",
          priceEur: "€1,700",
          priceGel: "5,000 ₾",
          period: "/ წელი",
          note: "30-დღიანი Trial · პერსონალური მენეჯერი",
          forWho: "მსხვილი აკადემიებისა და კლუბებისთვის, რომლებსაც სჭირდებათ Concierge სერვისი.",
          items: [
            "ყველაფერი Pro Club პაკეტიდან",
            "ულიმიტო მომხმარებლები ორგანიზაციიდან",
            "AI ტალანტების სარეკომენდაციო ალერტები",
            "Concierge სერვისი: ჩვენი გუნდი ხელით გიმზადებთ ტალანტების დოსიეს",
            "ექსკლუზიური კვარტალური რეგიონული რეპორტები",
            "პრიორიტეტული მხარდაჭერა თბილისში სინჯების ორგანიზებისას",
          ],
          cta: "დაუკავშირდი გაყიდვებს",
          featured: false,
        },
      ],
      b2cPlans: [
        {
          tag: "01 · უფასო",
          name: "Basic Profile",
          priceEur: "€0",
          priceGel: "0 ₾",
          period: "/ სამუდამოდ",
          note: "უფასო ვერიფიკაცია შედის",
          forWho: "ყველა ახალგაზრდა ქართველი სპორტსმენისთვის.",
          items: [
            "სრული ციფრული სპორტული პროფილი",
            "ფედერაციისა და მწვრთნელის უფასო ვერიფიკაცია",
            "ჰაილაითებისა და სრული მატჩების ატვირთვა",
            "ხილვადობა საერთაშორისო სკაუტების ძიებაში",
            "მშობლის/მეურვის უსაფრთხოების კონტროლი",
          ],
          cta: "შექმენი უფასო პროფილი",
          featured: false,
        },
        {
          tag: "02 · ხილვადობის ზრდა",
          name: "Pro Athlete",
          priceEur: "€50",
          priceGel: "150 ₾",
          period: "/ წელი",
          note: "ყველაზე პოპულარული სპორტსმენებში",
          forWho: "ამბიციური მოთამაშეებისთვის, რომლებსაც სურთ პრიორიტეტული პოზიცია ძიებაში.",
          items: [
            "ყველაფერი Basic Profile-დან",
            "პრიორიტეტული ჩვენება სკაუტების ძიების შედეგებში",
            "პერსონალური EA FC სტილის ვერიფიცირებული ბარათი",
            "ანალიტიკა: ნახე, რომელმა ევროპულმა კლუბმა ნახა შენი პროფილი",
            "ფიზიკური და სათამაშო პროგრესის გრაფიკები",
          ],
          cta: "აირჩიე Pro",
          featured: true,
        },
        {
          tag: "03 · სრული პორტფოლიო",
          name: "Elite Athlete",
          priceEur: "€85",
          priceGel: "250 ₾",
          period: "/ წელი",
          note: "მოყვება ვიდეომონტაჟის სერვისი",
          forWho: "სპორტსმენებისთვის, რომლებიც ემზადებიან საერთაშორისო აკადემიაში გასაგზავნად.",
          items: [
            "ყველაფერი Pro Athlete-დან",
            "ჰაილაით ვიდეოს პროფესიონალური მონტაჟი ჩვენი გუნდისგან",
            "ოფიციალური ფიზიკური ტესტირების რეპორტი",
            "გამორჩეული პოზიცია სკაუტების ყოველთვიურ დაიჯესტში",
            "პრიორიტეტული დახმარება სინჯების დოკუმენტაციაში",
          ],
          cta: "აირჩიე Elite",
          featured: false,
        },
      ],
    },
    aboutPage: {
      eyebrow: "Scouter-ის შესახებ",
      title: "ვხსნით გზას მსოფლიო სპორტული არენისკენ",
      subtitle:
        "ჩვენ გვჯერა, რომ ახალგაზრდა სპორტსმენის მომავალი უნდა განისაზღვროს ვერიფიცირებული შედეგებითა და შრომით — და არა გეოგრაფიით ან პირადი კავშირებით.",
      trustTitle: "სანდოობა, ვერიფიკაცია და არასრულწლოვანთა დაცვა",
      trustCards: [
        [
          "მრავალდონიანი ვერიფიკაცია",
          "ყოველი 'Verified' ბეჯი მოწმდება ფედერაციის ოფიციალურ ბაზებსა და ლიცენზირებულ მწვრთნელებთან.",
        ],
        [
          "არასრულწლოვანთა დაცვა (U18)",
          "18 წლამდე სპორტსმენების კომუნიკაცია აქტიურდება მხოლოდ მშობლის/მეურვის თანხმობით და მკაცრი მოდერაციით.",
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
      faqTitle: "ხშირად დასმული კითხვები",
      faq: [
        [
          "როგორ მოწმდება სპორტსმენის მონაცემები?",
          "მონაცემები და სტატისტიკა მოწმდება ფედერაციის ოფიციალურ ბაზებსა და პარტნიორი აკადემიების მწვრთნელებთან. ვერიფიკაცია სრულიად უფასოა.",
        ],
        [
          "როგორ არის დაცული 18 წლამდე სპორტსმენების უსაფრთხოება?",
          "არასრულწლოვანთა რეგისტრაცია და სკაუტებთან კომუნიკაცია ხდება მხოლოდ მშობლის ან კანონიერი მეურვის თანხმობითა და კონტროლით.",
        ],
        [
          "შეუძლია თუ არა კლუბს პლატფორმის უფასოდ დატესტვა?",
          "დიახ, ყველა B2B პაკეტს მოყვება 30-დღიანი უფასო საცდელი პერიოდი (Free Trial).",
        ],
        [
          "პლატფორმა მხოლოდ ფეხბურთელებისთვისაა?",
          "საწყისი ფოკუსი ფეხბურთია, თუმცა არქიტექტურა სრულად მზადაა კალათბურთის, რაგბისა და სხვა სპორტის სახეობებისთვის.",
        ],
      ],
    },
    contactModal: {
      title: "დაუკავშირდი Scouter-ს",
      subtitle: "მოითხოვე კლუბის 30-დღიანი Trial, ჩართე აკადემია ან მოგვწერე ნებისმიერი კითხვა.",
      nameLabel: "სახელი და გვარი",
      roleLabel: "ვინ ხართ...",
      roles: ["კლუბი / საერთაშორისო სკაუტი", "აკადემია / მწვრთნელი", "სპორტსმენი / მშობელი", "სპონსორი / პარტნიორი"],
      orgLabel: "კლუბი / ორგანიზაცია (არასავალდებულო)",
      emailLabel: "ელფოსტა",
      msgLabel: "შეტყობინება",
      submit: "გაგზავნა",
      successTitle: "მოთხოვნა მიღებულია!",
      successText: "ჩვენი გუნდი თბილისიდან დაგიკავშირდებათ 24 საათის განმავლობაში.",
      close: "დახურვა",
    },
    footer: {
      tagline: "ვერიფიცირებული სპორტული მონაცემები ქართველი ტალანტების გლობალური აღმოჩენისთვის.",
      rights: "ყველა უფლება დაცულია.",
      privacy: "კონფიდენციალურობა & GDPR",
      safeguarding: "არასრულწლოვანთა დაცვა",
      terms: "წესები და პირობები",
    },
  },
};

/* ------------------------------------------------------------------ */
/* UI COMPONENTS                                                      */
/* ------------------------------------------------------------------ */
function Logo({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center space-x-3 text-left focus:outline-none">
      <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center rotate-12 shadow-md shadow-emerald-500/20">
        <Activity size={20} className="text-slate-950 -rotate-12" />
      </div>
      <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
        Scouter<span className="text-emerald-500">.</span>
      </span>
    </button>
  );
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-xs text-emerald-400 uppercase tracking-widest font-bold mb-3">{eyebrow}</p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">{title}</h1>
      {subtitle && <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* Web Dashboard Hero Preview (Replaces Mobile Phone Mockup) */
function WebDashboardPreview({ onOpenDemo }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-500/15 to-transparent blur-2xl rounded-3xl" />
      <div className="relative bg-slate-900/95 border border-white/10 rounded-3xl p-5 shadow-2xl">
        {/* Window Top Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">app.scouter.ge/scout-workspace</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            LIVE DATABASE
          </span>
        </div>

        {/* Mini Filter Pills */}
        <div className="flex flex-wrap gap-2 my-4">
          {["U17", "Striker / Left Back", "Verified Only ✓", "Full Match Video"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950 text-slate-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured Verified Player Card inside Dashboard */}
        <div className="bg-slate-950/90 border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center font-black text-white text-base">
                GK
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h3 className="font-bold text-white text-base">Giorgi K., 17</h3>
                  <BadgeCheck size={16} className="text-emerald-400" />
                </div>
                <p className="text-xs text-slate-400 flex items-center mt-0.5">
                  <MapPin size={12} className="mr-1 text-emerald-400" /> Zugdidi, Samegrelo · Striker
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block">Scouter Index</span>
              <span className="text-2xl font-black text-emerald-400">87</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/5 text-center">
            <div className="bg-slate-900/90 rounded-xl p-2">
              <p className="text-[10px] text-slate-500 font-bold uppercase">30m Sprint</p>
              <p className="text-sm font-black text-white mt-0.5">3.98 s</p>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2">
              <p className="text-[10px] text-slate-500 font-bold uppercase">Full Matches</p>
              <p className="text-sm font-black text-white mt-0.5">8 Uncut</p>
            </div>
            <div className="bg-slate-900/90 rounded-xl p-2">
              <p className="text-[10px] text-slate-500 font-bold uppercase">Goals (U17)</p>
              <p className="text-sm font-black text-emerald-400 mt-0.5">14 / 18</p>
            </div>
          </div>
        </div>

        <button
          onClick={onOpenDemo}
          className="mt-4 w-full py-3 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
        >
          Interactive Database Preview <ArrowRight size={14} className="ml-2" />
        </button>
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
  const [currency, setCurrency] = useState("EUR");
  const [pricingAudience, setPricingAudience] = useState("b2b");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Demo States
  const [posFilter, setPosFilter] = useState("All");
  const [ageFilter, setAgeFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  // Contact Modal State
  const [contactOpen, setContactOpen] = useState(false);
  const [contactContext, setContactContext] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    org: "",
    email: "",
    message: "",
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const t = CONTENT[lang];

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openContactModal = (prefill = "") => {
    setContactContext(prefill);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col relative overflow-x-clip">
      {/* Subtle Ambient Glows */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none fixed top-1/2 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* ============================================================== */}
      {/* HEADER (Multi-Page Navigation + Lang Switch + Contact)         */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
          <Logo onClick={() => navigateTo("home")} />

          {/* Desktop Page Tabs */}
          <nav className="hidden lg:flex items-center bg-slate-900/90 border border-white/5 rounded-full p-1">
            {t.nav.map(([id, label]) => {
              const isActive = activePage === id;
              return (
                <button
                  key={id}
                  onClick={() => navigateTo(id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Language Toggle, Contact Us, Open App */}
          <div className="flex items-center gap-2.5">
            {/* EN / KA Toggle */}
            <div className="flex items-center bg-slate-900 border border-white/10 rounded-full p-0.5 text-xs font-bold">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ka")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "ka" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                ქარ
              </button>
            </div>

            <button
              onClick={() => openContactModal()}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors"
            >
              {t.ctaContact}
            </button>

            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2 rounded-full transition-all active:scale-95"
            >
              {t.ctaOpenApp} <ArrowUpRight size={14} className="ml-1" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-slate-800 text-white flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-slate-950 px-5 py-4 space-y-2">
            {t.nav.map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigateTo(id)}
                className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold ${
                  activePage === id ? "bg-emerald-500/15 text-emerald-400" : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold"
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
      {/* MAIN PAGE CONTENT AREA (Renders Active Window Only)            */}
      {/* ============================================================== */}
      <main className="flex-1">
        {/* -------------------- PAGE 1: HOME -------------------- */}
        {activePage === "home" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-1.5 bg-slate-900 border border-white/10 rounded-full text-xs font-bold text-emerald-400 mb-6">
                  <Zap size={14} className="mr-2" /> {t.hero.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  {t.hero.title}
                  <span className="text-emerald-500">.</span>
                </h1>
                <p className="text-slate-400 text-base sm:text-lg mt-6 leading-relaxed">{t.hero.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
                  <button
                    onClick={() => navigateTo("demo")}
                    className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full shadow-lg shadow-emerald-500/20 transition-all active:scale-95"
                  >
                    {t.hero.btnDemo} <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button
                    onClick={() => openContactModal("30-Day Club Free Trial")}
                    className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 border border-white/10 text-white font-bold px-7 py-4 rounded-full transition-all"
                  >
                    {t.hero.btnTrial}
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4">{t.hero.note}</p>
              </div>

              <WebDashboardPreview onOpenDemo={() => navigateTo("demo")} />
            </div>

            {/* Platform Traction Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {t.hero.traction.map(([val, label]) => (
                <div key={label} className="bg-slate-900/70 border border-white/5 rounded-2xl p-5">
                  <p className="text-2xl sm:text-3xl font-black text-white">{val}</p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">{label}</p>
                </div>
              ))}
            </div>

            {/* Dual Role Switch Cards */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              <button
                onClick={() => navigateTo("athletes")}
                className="group text-left bg-slate-900/70 border border-white/5 hover:border-emerald-500/40 rounded-3xl p-6 flex items-start transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <User className="text-emerald-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{t.hero.roleAthleteTitle}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{t.hero.roleAthleteText}</p>
                  <span className="inline-flex items-center text-xs font-bold text-emerald-400 mt-3 uppercase tracking-wider">
                    {t.hero.roleAthleteCta} <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>

              <button
                onClick={() => navigateTo("clubs")}
                className="group text-left bg-slate-900/70 border border-white/5 hover:border-blue-500/40 rounded-3xl p-6 flex items-start transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-white">{t.hero.roleClubTitle}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{t.hero.roleClubText}</p>
                  <span className="inline-flex items-center text-xs font-bold text-blue-400 mt-3 uppercase tracking-wider">
                    {t.hero.roleClubCta} <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </div>
          </section>
        )}

        {/* -------------------- PAGE 2: LIVE DEMO -------------------- */}
        {activePage === "demo" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader eyebrow={t.demo.eyebrow} title={t.demo.title} subtitle={t.demo.subtitle} />

            {/* Interactive Filter Controls */}
            <div className="bg-slate-900 border border-white/10 rounded-3xl p-5 mb-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {t.demo.filterPos}
                  </label>
                  <select
                    value={posFilter}
                    onChange={(e) => setPosFilter(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="All">All Positions</option>
                    <option value="Striker">Striker</option>
                    <option value="Left Back">Left Back</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {t.demo.filterAge}
                  </label>
                  <select
                    value={ageFilter}
                    onChange={(e) => setAgeFilter(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="All">All Ages (U15–U19)</option>
                    <option value="U15">U15</option>
                    <option value="U17">U17</option>
                    <option value="U19">U19</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {t.demo.filterRegion}
                  </label>
                  <select
                    value={regionFilter}
                    onChange={(e) => setRegionFilter(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white font-semibold focus:outline-none focus:border-emerald-500"
                  >
                    <option value="All">All Georgia</option>
                    <option value="Tbilisi">Tbilisi</option>
                    <option value="Imereti">Imereti</option>
                    <option value="Samegrelo">Samegrelo</option>
                    <option value="Adjara">Adjara</option>
                  </select>
                </div>

                <div className="flex items-center justify-between bg-slate-950 border border-white/10 rounded-xl px-4 py-2.5">
                  <span className="text-sm font-bold text-white">{t.demo.verifiedOnly}</span>
                  <button
                    onClick={() => setVerifiedOnly(!verifiedOnly)}
                    className={`w-11 h-6 rounded-full transition-colors p-0.5 ${
                      verifiedOnly ? "bg-emerald-500" : "bg-slate-700"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        verifiedOnly ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>
                  {t.demo.showing} <strong className="text-white">{filteredAthletes.length}</strong> {t.demo.athletesCount}
                </span>
                {(posFilter !== "All" || ageFilter !== "All" || regionFilter !== "All" || verifiedOnly) && (
                  <button
                    onClick={() => {
                      setPosFilter("All");
                      setAgeFilter("All");
                      setRegionFilter("All");
                      setVerifiedOnly(false);
                    }}
                    className="text-emerald-400 hover:underline font-bold"
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
                  className="cursor-pointer group bg-slate-900 border border-white/10 hover:border-emerald-500/50 rounded-3xl overflow-hidden transition-all flex flex-col"
                >
                  {/* Card Top Banner (EA FC Style Header) */}
                  <div className={`bg-gradient-to-br ${athlete.gradient} p-5 relative`}>
                    <div className="flex justify-between items-start">
                      <div className="bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
                        <span className="text-2xl font-black text-white leading-none">{athlete.rating}</span>
                        <span className="block text-[10px] font-bold text-emerald-400 uppercase mt-0.5">
                          {athlete.position}
                        </span>
                      </div>
                      {athlete.verified ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-emerald-400 border border-emerald-500/30">
                          <BadgeCheck size={13} className="mr-1" /> {t.demo.verifiedBadge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/60 text-slate-300">
                          {t.demo.pendingBadge}
                        </span>
                      )}
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-black text-white">{athlete.name}</h3>
                      <p className="text-xs text-white/90 font-medium flex items-center mt-1">
                        <MapPin size={12} className="mr-1" /> {athlete.city}, {athlete.region} · {athlete.age} yrs ({athlete.ageGroup})
                      </p>
                    </div>
                  </div>

                  {/* Card Metrics Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="grid grid-cols-3 gap-2 text-center bg-slate-950/80 rounded-2xl p-3 border border-white/5">
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">30m Sprint</p>
                        <p className="text-sm font-black text-white mt-0.5">{athlete.sprint30m}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Pass %</p>
                        <p className="text-sm font-black text-white mt-0.5">{athlete.passAccuracy}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">Matches</p>
                        <p className="text-sm font-black text-emerald-400 mt-0.5">{athlete.fullMatches} Full</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 mt-4 line-clamp-2 leading-relaxed">
                      {lang === "en" ? athlete.bioEn : athlete.bioKa}
                    </p>

                    <button className="mt-5 w-full py-2.5 rounded-xl bg-slate-800 group-hover:bg-emerald-500 group-hover:text-slate-950 text-white text-xs font-black transition-colors flex items-center justify-center">
                      {t.demo.openDossier} <ArrowRight size={14} className="ml-1.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* -------------------- PAGE 3: FOR ATHLETES -------------------- */}
        {activePage === "athletes" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.athletesPage.eyebrow}
              title={t.athletesPage.title}
              subtitle={t.athletesPage.subtitle}
            />

            {/* 3-Step Flow */}
            <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-7 mb-10">
              <h3 className="text-lg font-black text-white mb-6">{t.athletesPage.stepsTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.athletesPage.steps.map(([title, desc], idx) => (
                  <div key={title} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 font-black flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="text-sm text-slate-400 mt-1 leading-relaxed">{desc}</p>
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
                  <div key={title} className="bg-slate-900 border border-white/5 rounded-3xl p-6">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                      <IconComp size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Camp Cost Comparison Banner */}
            <div className="mt-10 bg-gradient-to-r from-emerald-500/15 to-blue-500/10 border border-emerald-500/25 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-black text-white">{t.athletesPage.bannerTitle}</h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">{t.athletesPage.bannerText}</p>
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex-shrink-0 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full transition-all"
              >
                {t.athletesPage.bannerBtn}
              </a>
            </div>
          </section>
        )}

        {/* -------------------- PAGE 4: FOR CLUBS & SCOUTS -------------------- */}
        {activePage === "clubs" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader eyebrow={t.clubsPage.eyebrow} title={t.clubsPage.title} subtitle={t.clubsPage.subtitle} />

            {/* 3-Step B2B Flow */}
            <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-7 mb-10">
              <h3 className="text-lg font-black text-white mb-6">{t.clubsPage.stepsTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.clubsPage.steps.map(([title, desc], idx) => (
                  <div key={title} className="flex items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 font-black flex items-center justify-center flex-shrink-0">
                      0{idx + 1}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{title}</h4>
                      <p className="text-sm text-slate-400 mt-1 leading-relaxed">{desc}</p>
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
                  <div key={title} className="bg-slate-900 border border-white/5 rounded-3xl p-6">
                    <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                      <IconComp size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* ROI Comparison Cards */}
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-white/10 rounded-3xl p-7">
                <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <Plane size={16} className="mr-2 text-rose-400" /> {t.clubsPage.tripTitle}
                </div>
                <div className="mt-5 space-y-3">
                  {t.clubsPage.tripRows.map(([item, cost]) => (
                    <div key={item} className="flex justify-between text-sm">
                      <span className="text-slate-400">{item}</span>
                      <span className="font-bold text-white">{cost}</span>
                    </div>
                  ))}
                  <div className="flex justify-between pt-3 border-t border-white/10">
                    <span className="font-bold text-white">{t.clubsPage.tripTotalLabel}</span>
                    <span className="font-black text-rose-400 text-lg">{t.clubsPage.tripTotalValue}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-4 leading-relaxed">{t.clubsPage.tripNote}</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/20 to-emerald-500/15 border border-blue-500/30 rounded-3xl p-7 flex flex-col justify-between">
                <div>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{t.clubsPage.scouterTitle}</span>
                  <p className="text-4xl font-black text-white mt-3">{t.clubsPage.scouterStat}</p>
                  <p className="text-slate-200 font-semibold mt-1">{t.clubsPage.scouterSub}</p>
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed">{t.clubsPage.scouterText}</p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => openContactModal("Pro Club 30-Day Trial")}
                    className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white font-black px-7 py-3.5 rounded-full transition-all"
                  >
                    {t.clubsPage.scouterBtn} <ArrowRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* -------------------- PAGE 5: PRICING -------------------- */}
        {activePage === "pricing" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader
              eyebrow={t.pricingPage.eyebrow}
              title={t.pricingPage.title}
              subtitle={t.pricingPage.subtitle}
            />

            {/* Audience Toggle + Currency Toggle Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="bg-slate-900 border border-white/10 rounded-full p-1 flex">
                <button
                  onClick={() => setPricingAudience("b2b")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    pricingAudience === "b2b" ? "bg-blue-500 text-white shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.pricingPage.tabB2B}
                </button>
                <button
                  onClick={() => setPricingAudience("b2c")}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    pricingAudience === "b2c" ? "bg-emerald-500 text-slate-950 shadow" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {t.pricingPage.tabB2C}
                </button>
              </div>

              {/* Currency Switcher */}
              <div className="bg-slate-900 border border-white/10 rounded-full p-1 flex text-xs font-black">
                <button
                  onClick={() => setCurrency("EUR")}
                  className={`px-3.5 py-2 rounded-full transition-colors ${
                    currency === "EUR" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  € EUR
                </button>
                <button
                  onClick={() => setCurrency("GEL")}
                  className={`px-3.5 py-2 rounded-full transition-colors ${
                    currency === "GEL" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  ₾ GEL
                </button>
              </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {(pricingAudience === "b2b" ? t.pricingPage.b2bPlans : t.pricingPage.b2cPlans).map((plan) => {
                const isB2B = pricingAudience === "b2b";
                const accentBorder = plan.featured
                  ? isB2B
                    ? "border-blue-500/70 bg-slate-800/80 shadow-xl shadow-blue-500/10"
                    : "border-emerald-500/70 bg-slate-800/80 shadow-xl shadow-emerald-500/10"
                  : "border-white/10 bg-slate-900";
                const badgeStyle = isB2B ? "bg-blue-500 text-white" : "bg-emerald-500 text-slate-950";
                const btnStyle = plan.featured
                  ? isB2B
                    ? "bg-blue-500 hover:bg-blue-400 text-white"
                    : "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                  : "bg-slate-800 hover:bg-slate-700 text-white";

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
                    <h3 className="text-xl font-black text-white mt-1">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-4xl font-black text-white">
                        {currency === "EUR" ? plan.priceEur : plan.priceGel}
                      </span>
                      <span className="text-slate-400 text-sm font-medium ml-2">{plan.period}</span>
                    </div>
                    <p className={`text-xs font-bold mt-2 ${isB2B ? "text-blue-400" : "text-emerald-400"}`}>
                      {plan.note}
                    </p>
                    <p className="text-sm text-slate-400 mt-3 leading-relaxed">{plan.forWho}</p>

                    <ul className="mt-6 space-y-3 flex-1">
                      {plan.items.map((feat) => (
                        <li key={feat} className="flex items-start text-sm text-slate-300">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 ${
                              isB2B ? "bg-blue-500/15 text-blue-400" : "bg-emerald-500/15 text-emerald-400"
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openContactModal(`${plan.name} (${currency === "EUR" ? plan.priceEur : plan.priceGel})`)}
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

        {/* -------------------- PAGE 6: ABOUT US -------------------- */}
        {activePage === "about" && (
          <section className="max-w-6xl mx-auto px-5 pt-12 pb-20">
            <SectionHeader eyebrow={t.aboutPage.eyebrow} title={t.aboutPage.title} subtitle={t.aboutPage.subtitle} />

            {/* Trust, Verification & Safeguarding */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-white text-center mb-8">{t.aboutPage.trustTitle}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {t.aboutPage.trustCards.map(([title, desc], idx) => {
                  const Icons = [BadgeCheck, ShieldCheck, CheckCircle2];
                  const IconComp = Icons[idx];
                  return (
                    <div key={title} className="bg-slate-900 border border-white/10 rounded-3xl p-6">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                        <IconComp size={24} />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leadership Team (No external LinkedIn links) */}
            <div className="mb-16">
              <h3 className="text-2xl font-black text-white text-center mb-8">{t.aboutPage.teamTitle}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.aboutPage.team.map(([name, role, bio]) => (
                  <div key={name} className="bg-slate-900 border border-white/10 rounded-3xl p-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-lg">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className="text-base font-bold text-white mt-4">{name}</h4>
                    <p className="text-xs font-bold text-emerald-400 mt-1">{role}</p>
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">{bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-black text-white text-center mb-8">{t.aboutPage.faqTitle}</h3>
              <div className="space-y-3">
                {t.aboutPage.faq.map(([q, a], idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={q}
                      className={`bg-slate-900/80 border rounded-2xl transition-colors ${
                        isOpen ? "border-emerald-500/40" : "border-white/5"
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        className="w-full flex items-center justify-between text-left p-5"
                      >
                        <span className="font-bold text-white text-sm sm:text-base pr-4">{q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-slate-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-emerald-400" : ""}`}
                        />
                      </button>
                      {isOpen && <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{a}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* ============================================================== */}
      {/* FOOTER                                                         */}
      {/* ============================================================== */}
      <footer className="border-t border-white/10 bg-slate-950/90 mt-auto">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Logo onClick={() => navigateTo("home")} />
            <p className="text-xs text-slate-500 mt-2 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-400">
            <button onClick={() => navigateTo("about")} className="hover:text-white">
              {t.footer.privacy}
            </button>
            <button onClick={() => navigateTo("about")} className="hover:text-white">
              {t.footer.safeguarding}
            </button>
            <button onClick={() => openContactModal()} className="text-emerald-400 hover:underline font-bold">
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl">
            <div className={`bg-gradient-to-r ${selectedAthlete.gradient} p-6 flex justify-between items-start`}>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-slate-950/70 text-white">
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
                  {selectedAthlete.club} · {selectedAthlete.city}, {selectedAthlete.region} · {selectedAthlete.height} ({selectedAthlete.foot} foot)
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
              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-950 border border-white/5 rounded-2xl p-3">
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalSprint}</p>
                  <p className="text-lg font-black text-white mt-0.5">{selectedAthlete.sprint30m}</p>
                </div>
                <div className="bg-slate-950 border border-white/5 rounded-2xl p-3">
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalPass}</p>
                  <p className="text-lg font-black text-white mt-0.5">{selectedAthlete.passAccuracy}</p>
                </div>
                <div className="bg-slate-950 border border-white/5 rounded-2xl p-3">
                  <p className="text-[11px] text-slate-500 font-bold uppercase">{t.demo.modalMatches}</p>
                  <p className="text-lg font-black text-emerald-400 mt-0.5">{selectedAthlete.fullMatches} x 90'</p>
                </div>
              </div>

              {/* Video Match Footage Placeholder */}
              <div className="bg-slate-950 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                    <Play size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.demo.modalWatch}</p>
                    <p className="text-xs text-slate-500">Full 90-min Regional League Match · HD 1080p</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400">VERIFIED LOG</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === "en" ? selectedAthlete.bioEn : selectedAthlete.bioKa}
              </p>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => {
                    const name = selectedAthlete.name;
                    setSelectedAthlete(null);
                    openContactModal(`Trial / Scouting Inquiry for ${name}`);
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
      {/* MODAL 2: CONTACT US / REQUEST DEMO FORM                        */}
      {/* ============================================================== */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/15 rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-black text-white">{t.contactModal.successTitle}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{t.contactModal.successText}</p>
                <button
                  onClick={() => setContactOpen(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-emerald-500 text-slate-950 font-black text-sm"
                >
                  {t.contactModal.close}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-white pr-8">{t.contactModal.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">{t.contactModal.subtitle}</p>

                <form onSubmit={handleFormSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">{t.contactModal.nameLabel}</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">{t.contactModal.roleLabel}</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500"
                      >
                        {t.contactModal.roles.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 mb-1">{t.contactModal.orgLabel}</label>
                      <input
                        type="text"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">{t.contactModal.emailLabel}</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-1">{t.contactModal.msgLabel}</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
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
