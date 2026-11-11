import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Ban,
  Check,
  ChevronDown,
  CircleDollarSign,
  Film,
  MapPin,
  Menu,
  MessageSquare,
  Plane,
  Scale,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Trophy,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Link to the Scouter app (Vercel)                                   */
/* ------------------------------------------------------------------ */
const APP_URL = "https://scouter-xi.vercel.app/";

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */
const NAV = [
  ["home", "Home"],
  ["how-it-works", "How It Works"],
  ["athletes", "For Athletes"],
  ["clubs", "For Clubs & Scouts"],
  ["pricing", "Pricing"],
  ["about", "About Us"],
];

const STEPS_ATHLETE = [
  {
    title: "Build your profile",
    text: "Add your physical data, statistics and achievements, then upload highlights, full matches and physical test recordings.",
  },
  {
    title: "Get verified, for free",
    text: "Your data is checked against federation databases and with local coaches. Verified profiles receive a special badge on every plan.",
  },
  {
    title: "Get discovered",
    text: "Recommendation algorithms put your profile in front of international scouts who are looking for your position and metrics.",
  },
];

const STEPS_SCOUT = [
  {
    title: "Search with smart filters",
    text: "Filter the athlete database by age, position, region and physical or performance metrics.",
  },
  {
    title: "Evaluate remotely",
    text: "Review verified profiles, statistics and full match archives from your office instead of flying in.",
  },
  {
    title: "Connect directly",
    text: "Contact shortlisted athletes and their representatives directly, without intermediaries.",
  },
];

const ATHLETE_FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified data",
    text: "Integration with federation databases and cooperation with local coaches. Verified profiles get a special badge, and verification is free on every plan.",
    color: "emerald",
  },
  {
    icon: Film,
    title: "Full matches count",
    text: "Scouts pay special attention to uncut, full-length videos. Upload highlights, full matches and physical tests.",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "From any region",
    text: "Show what you can do to foreign scouts without having to travel to the capital.",
    color: "emerald",
  },
  {
    icon: Scale,
    title: "No nepotism",
    text: "You are judged on your hard work, physical data and performance, not on who you know.",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "Sponsors",
    text: "Besides scouts, sports brands and private supporters are on the platform. Athletes with strong academic or sporting records can receive individual sponsorship.",
    color: "emerald",
  },
  {
    icon: ShieldCheck,
    title: "Protection for minors",
    text: "Accounts of athletes under 18 are managed with parent or guardian consent, and communication rules are strictly controlled.",
    color: "blue",
  },
];

const CLUB_FEATURES = [
  {
    icon: SlidersHorizontal,
    title: "Smart filters",
    text: "Search by age, position, region and metrics such as speed, sprint and passing accuracy.",
  },
  {
    icon: Sparkles,
    title: "Smart recommendations",
    text: "Filtering and recommendation algorithms suggest athletes who match the positions and metrics you need.",
  },
  {
    icon: BadgeCheck,
    title: "Verified data",
    text: "Profiles are checked against federation databases and by local coaches, so you can trust the numbers.",
  },
  {
    icon: Film,
    title: "Full match archives",
    text: "Watch highlights and complete, uncut matches, not just a two-minute edit.",
  },
  {
    icon: Users,
    title: "Shortlists & comparison",
    text: "Select and compare candidates side by side before deciding who to see in person.",
  },
  {
    icon: MessageSquare,
    title: "Direct contact",
    text: "Reach athletes and their representatives directly, without intermediaries.",
  },
];

const TRIP_COSTS = [
  ["Return flight", "€350–400"],
  ["3 nights in a hotel", "€250–300"],
  ["Food & local transport", "€150"],
];

const PLANS_ATHLETE = [
  {
    tag: "01",
    name: "Basic Profile",
    price: "0 GEL",
    period: "/ lifetime",
    note: "Free plan",
    forWho: "For young athletes who want to create their own sports profile.",
    items: [
      "Personal sports profile",
      "Core physical data and statistics",
      "Highlight video uploads",
      "Sports achievements and experience",
      "Visible to international scouts",
      "Free profile verification",
    ],
    cta: "Create free profile",
    featured: false,
  },
  {
    tag: "02",
    name: "Pro Athlete",
    price: "150 GEL",
    period: "/ year",
    forWho: "For athletes who want more visibility and more attention from scouts.",
    items: [
      "Everything in Basic Profile",
      "Priority placement in search results",
      "Extended analytics of results and physical data",
      "Profile view and activity statistics",
      "EA FC-style personalized player card",
      "Additional profile personalization",
      "Extra promotion opportunities",
    ],
    cta: "Choose Pro",
    featured: true,
  },
  {
    tag: "03",
    name: "Elite Athlete",
    price: "250 GEL",
    period: "/ year",
    forWho: "For ambitious athletes who want to present themselves as professionally as possible.",
    items: [
      "Everything in Pro Athlete",
      "Advanced profile personalization",
      "Detailed analysis of progress and results",
      "Extended statistical reports",
      "Professional video editing and metric refinement support",
      "Additional advertising opportunities",
      "Priority customer support",
    ],
    cta: "Choose Elite",
    featured: false,
  },
];

const PLANS_CLUB = [
  {
    tag: "01",
    name: "Scout Starter",
    price: "1,200 GEL",
    period: "/ year",
    note: "30-day free trial",
    forWho: "For individual scouts and small academies.",
    items: [
      "1 scout user account",
      "Access to the core athlete database",
      "Basic search and filters (age, position, region)",
      "Standard athlete profiles",
      "Direct contact with up to 5 athletes per month",
      "Core scouting tools",
    ],
    cta: "Start free trial",
    featured: false,
  },
  {
    tag: "02",
    name: "Pro Club",
    price: "2,000 GEL",
    period: "/ year",
    note: "30-day free trial",
    forWho: "For small and mid-sized clubs and professional scouting departments.",
    items: [
      "Everything in Scout Starter",
      "Up to 3 user accounts per organization",
      "Unlimited access to the verified athlete database",
      "Advanced search and filters",
      "Detailed sports profiles and statistics",
      "Match video archive and highlights",
      "Physical and performance metrics (speed, sprint, passing accuracy and more)",
      "Unlimited direct messaging with athletes and their representatives",
      "Candidate shortlisting and comparison tools",
      "Priority technical support",
    ],
    cta: "Start free trial",
    featured: true,
  },
  {
    tag: "03",
    name: "Elite Academy",
    price: "5,000 GEL",
    period: "/ year",
    note: "30-day free trial",
    forWho: "For large academies and the scouting departments of professional clubs.",
    items: [
      "Everything in Pro Club",
      "Unlimited user accounts across the organization",
      "AI-based talent recommendations",
      "Predictive analytics of athlete potential",
      "Advanced analytics and custom reporting",
      "Extra team and academy management tools",
      "Concierge service: a personal manager and hand-picked talent",
      "Exclusive regional reports",
      "Priority alerts on new talent",
      "Priority customer support",
    ],
    cta: "Start free trial",
    featured: false,
  },
];

const STATS = [
  ["170,616", "active athletes in Georgia"],
  ["< 1%", "of them compete on the international stage"],
  ["530,000+", "young people aged 15–25 in Georgia"],
  ["$119.6B", "projected global sports tech market by 2033"],
];

const MODEL = [
  {
    icon: User,
    title: "Free for athletes",
    text: "Athletes create profiles, upload videos and get verified for free. A large, diverse talent database is what makes the platform valuable to scouts. Optional Pro and Elite plans add visibility and analytics.",
  },
  {
    icon: CircleDollarSign,
    title: "Annual subscriptions for clubs",
    text: "Clubs and scouts pay a predictable annual fee for search, filtering and recommendation tools. Plans grow with the number of user seats and features, and match clubs' budget cycles.",
  },
  {
    icon: Ban,
    title: "No commission on transfers",
    text: "Taking a cut of transfers or contracts means heavy legal barriers, especially with minors, long deal cycles and a high risk of deals moving off the platform. We deliberately don't do it.",
  },
];

const TEAM = [
  ["Elene Gogatishvili", "Finance & Sales", "Business model, pricing tiers and the path to break-even."],
  ["Mariam Makharadze", "Sales & User Psychology", "Customer behavior, sales and engagement strategy."],
  ["Sandro Kiknadze", "Digital Marketing", "Content, social media, marketing strategy and brand awareness."],
  ["Mariam Karseladze", "Operations, Data & HR", "Internal processes, data analytics, cost optimization and hiring."],
];

const FAQ = [
  {
    q: "How much does the platform cost for athletes and parents?",
    a: "Creating a basic profile and uploading data and videos is completely free, for life. Optionally, you can choose Pro Athlete (150 GEL per year) for priority placement in search results, extended analytics and profile-view statistics, or Elite Athlete (250 GEL per year), which adds detailed progress analysis and professional video editing support.",
  },
  {
    q: "How much does access cost for clubs and scouts?",
    a: "Clubs, academies and scouts pay an annual subscription (B2B): Scout Starter costs 1,200 GEL, Pro Club 2,000 GEL and Elite Academy 5,000 GEL per year. Every plan starts with a 30-day free trial.",
  },
  {
    q: "How is the reliability of athletes' data checked?",
    a: "Accuracy is ensured through integration with official federation databases and cooperation with local coaches. Profiles with verified data receive a special verified badge. Verification is free and does not depend on the plan.",
  },
  {
    q: "Can athletes who live in the regions use the platform?",
    a: "Of course. One of Scouter's main goals is to discover talented athletes in the regions. The platform lets you show your abilities to foreign scouts without having to travel to the capital.",
  },
  {
    q: "How is the safety of underage athletes protected?",
    a: "Registration and account management for athletes under 18 happen with the consent of a parent or legal guardian. Personal data and the rules for direct communication with strangers are strictly controlled on the platform.",
  },
  {
    q: "What kind of videos and data should be uploaded to a profile?",
    a: "For the most effective profile, we recommend uploading highlights, full matches and recordings of official physical tests. Scouts pay particular attention to uncut, full-length videos.",
  },
  {
    q: "Does the platform help athletes find sponsors?",
    a: "Yes. Besides scouts, sports brands and private supporters are registered on Scouter. Athletes with strong academic or sporting results have a chance to receive individual sponsorship.",
  },
  {
    q: "Is the platform only for footballers, or for other sports too?",
    a: "Scouter is a multi-sport platform built for both team and individual sports. The initial focus is football, but the system fully serves basketball players, rugby players and other athletes.",
  },
  {
    q: "How does the platform make sure a scout actually notices my child or my profile?",
    a: "Scouter uses smart filtering and recommendation algorithms that proactively suggest athletes with the positions and metrics scouts are looking for. Regularly updated data, full match videos and verified status also push a profile to the top of search results.",
  },
];

/* ------------------------------------------------------------------ */
/* SMALL PIECES                                                       */
/* ------------------------------------------------------------------ */
const accentBox = {
  emerald: "bg-emerald-500/10 text-emerald-500",
  blue: "bg-blue-500/10 text-blue-500",
};

function Logo() {
  return (
    <a href="#home" className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center rotate-12">
        <Activity size={22} className="text-slate-950 -rotate-12" />
      </div>
      <span className="text-2xl font-extrabold tracking-tight text-white">
        Scouter<span className="text-emerald-500">.</span>
      </span>
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-7 py-4 rounded-full shadow-lg transition-all active:scale-95"
    >
      {children}
    </a>
  );
}

function GhostButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center bg-slate-800/60 hover:bg-slate-800 border border-white/10 text-white font-bold px-7 py-4 rounded-full transition-all"
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p className="text-xs text-emerald-500 uppercase tracking-widest font-bold mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight text-balance">{title}</h2>
      {text && <p className="text-slate-400 mt-4 leading-relaxed">{text}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-400">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden sm:inline-flex bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-5 py-2.5 rounded-full transition-all active:scale-95"
          >
            Open the app
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/5 px-5 py-4 flex flex-col space-y-1">
          {NAV.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold text-slate-300 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a href={APP_URL} className="sm:hidden mt-2 text-center bg-emerald-500 text-slate-950 font-black text-sm px-5 py-3 rounded-full">
            Open the app
          </a>
        </nav>
      )}
    </header>
  );
}

/* Decorative phone preview that mirrors the app's swipe card */
function PhonePreview() {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      <div className="absolute -inset-6 bg-emerald-500/20 blur-3xl rounded-full" />
      <div className="relative bg-slate-950 border border-white/10 rounded-3xl p-3 shadow-2xl">
        <div className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-blue-600 to-emerald-500" style={{ height: 420 }}>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-wider">NEW</span>
          </div>
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            <BadgeCheck size={18} className="text-emerald-400" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
            <div>
              <h3 className="text-2xl font-black text-white">George, 16</h3>
              <p className="text-slate-300 text-sm mt-1 flex items-center">
                <MapPin size={14} className="mr-1 opacity-70" /> Tbilisi, GE
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Football", "Striker", "178 cm"].map((t) => (
                <span key={t} className="px-3 py-1 bg-white/10 rounded-lg text-xs font-semibold text-white border border-white/10">
                  {t}
                </span>
              ))}
            </div>
            <div className="pt-3 border-t border-white/20 flex justify-between">
              {[
                ["PACE", 88],
                ["SHOOTING", 82],
                ["PASSING", 75],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="text-white/70 text-xs uppercase font-bold tracking-widest">{k}</div>
                  <div className="text-white font-black text-lg">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Decorative preview of the scout search screen */
function SearchPreview() {
  const results = [
    ["LM", "Luka M., 16", "Kutaisi · Left back", "Sprint 30 m", "4.1 s"],
    ["GT", "Giorgi T., 17", "Zestaponi · Left back", "Pass accuracy", "86%"],
    ["DK", "Dato K., 15", "Samtredia · Left back", "Pace", "89"],
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-blue-500/15 blur-3xl rounded-full" />
      <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-5 shadow-2xl">
        <div className="flex items-center bg-slate-950 border border-white/10 rounded-2xl px-4 py-3 text-sm text-slate-400">
          <Search size={16} className="mr-3 text-slate-500" /> Left back, 15–17, Imereti
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Football", "Left back", "Age 15–17", "Imereti", "Verified only"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-5 space-y-3">
          {results.map(([initials, name, meta, metric, value]) => (
            <div key={name} className="flex items-center bg-slate-950/70 border border-white/5 rounded-2xl p-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-sm font-black text-white flex-shrink-0">
                {initials}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <p className="font-bold text-white text-sm flex items-center">
                  {name} <BadgeCheck size={14} className="ml-1.5 text-emerald-400" />
                </p>
                <p className="text-xs text-slate-500 truncate">{meta}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">{metric}</p>
                <p className="font-black text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlanCard({ plan, accent }) {
  const featuredBorder = accent === "blue" ? "border-blue-500/60" : "border-emerald-500/60";
  const badge = accent === "blue" ? "bg-blue-500 text-white" : "bg-emerald-500 text-slate-950";
  const button = plan.featured
    ? accent === "blue"
      ? "bg-blue-500 hover:bg-blue-400 text-white"
      : "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
    : "bg-slate-800 hover:bg-slate-700 text-white";

  return (
    <div
      className={`rounded-3xl p-7 border relative flex flex-col ${
        plan.featured ? `bg-slate-800/80 ${featuredBorder} shadow-lg` : "bg-slate-900 border-white/5"
      }`}
    >
      {plan.featured && (
        <span className={`absolute -top-3 left-7 text-xs font-black px-3 py-1 rounded-full tracking-wider ${badge}`}>
          MOST POPULAR
        </span>
      )}
      <p className="text-xs font-bold text-slate-500 tracking-widest">{plan.tag}</p>
      <p className="text-lg font-bold text-white mt-1">{plan.name}</p>
      <div className="mt-3 flex items-baseline">
        <span className="text-4xl font-black text-white">{plan.price}</span>
        <span className="text-slate-500 text-sm font-medium ml-2">{plan.period}</span>
      </div>
      {plan.note && <p className={`text-xs font-semibold mt-2 ${accent === "blue" ? "text-blue-400" : "text-emerald-400"}`}>{plan.note}</p>}
      <p className="text-sm text-slate-400 mt-3 leading-relaxed">{plan.forWho}</p>
      <ul className="mt-6 space-y-3 flex-1">
        {plan.items.map((it) => (
          <li key={it} className="flex items-start text-sm text-slate-300">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 ${accentBox[accent]}`}>
              <Check size={12} strokeWidth={3} />
            </span>
            {it}
          </li>
        ))}
      </ul>
      <a href={APP_URL} className={`mt-8 w-full text-center font-black text-sm py-3.5 rounded-full transition-all ${button}`}>
        {plan.cta}
      </a>
    </div>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={`bg-slate-900/60 border rounded-3xl transition-colors ${open ? "border-emerald-500/40" : "border-white/5"}`}>
      <button onClick={onToggle} className="w-full flex items-center justify-between text-left p-5 sm:p-6" aria-expanded={open}>
        <span className="font-bold text-white pr-4 leading-snug">{item.q}</span>
        <span
          className={`w-9 h-9 flex-shrink-0 rounded-full flex items-center justify-center transition-all ${
            open ? "bg-emerald-500 text-slate-950 rotate-180" : "bg-slate-800 text-slate-400"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>
      {open && <p className="px-5 sm:px-6 pb-6 text-slate-400 leading-relaxed">{item.a}</p>}
    </div>
  );
}

function Steps({ label, steps, accent }) {
  const pill = accent === "blue" ? "bg-blue-500 text-white" : "bg-emerald-500 text-slate-950";
  const num = accent === "blue" ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400";

  return (
    <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-7 sm:p-8 relative">
      <span className={`absolute -top-3 left-7 text-xs font-black px-3 py-1 rounded-full tracking-wider uppercase ${pill}`}>{label}</span>
      <div className="space-y-6 mt-3">
        {steps.map((s, i) => (
          <div key={s.title} className="flex items-start">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black flex-shrink-0 ${num}`}>
              0{i + 1}
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-white">{s.title}</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function App() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-x-clip">
      {/* background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      <div className="absolute top-96 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

      <Header />

      {/* 01 HOME */}
      <section id="home" className="relative max-w-6xl mx-auto px-5 pt-16 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-4 py-1.5 bg-slate-800/80 border border-white/5 rounded-full text-sm font-semibold text-slate-200 mb-6">
              <Zap size={14} className="text-emerald-400 mr-2" /> Talent is universal. Opportunity is not.
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Young talent. Global opportunities<span className="text-emerald-500">.</span>
            </h1>
            <p className="text-slate-400 text-lg mt-6 leading-relaxed">
              Scouter is a digital scouting platform that connects young Georgian athletes with international scouts, academies and
              sponsors. Verified data, physical tests and full matches in one profile, free from nepotism and geographical barriers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
              <PrimaryButton href={APP_URL}>
                Create free profile <ArrowRight size={18} className="ml-2" />
              </PrimaryButton>
              <GhostButton href={APP_URL}>Start 30-day free trial</GhostButton>
            </div>
            <p className="text-xs text-slate-500 mt-4">Free for athletes, forever. Free 30-day trial for clubs and scouts.</p>
          </div>
          <PhonePreview />
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-20">
          <a href={APP_URL} className="group bg-slate-800/60 border border-white/5 hover:border-emerald-500/40 rounded-3xl p-6 flex items-start transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <User className="text-emerald-500" size={28} />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-bold text-white">I'm an athlete or a parent</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Create a profile, upload your videos and get noticed by scouts.</p>
              <p className="text-sm font-bold text-emerald-400 mt-3 flex items-center">
                Create free profile <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </a>
          <a href={APP_URL} className="group bg-slate-800/60 border border-white/5 hover:border-blue-500/40 rounded-3xl p-6 flex items-start transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <Users className="text-blue-500" size={28} />
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-bold text-white">I'm a scout or a club</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">Discover talent by position and metrics, based on verified data.</p>
              <p className="text-sm font-bold text-blue-400 mt-3 flex items-center">
                Start free trial <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* 02 HOW IT WORKS */}
      <section id="how-it-works" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="How it works"
          title="A clear path for both sides"
          text="A transparent, two-sided process built for athletes and for the people who make decisions about them."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Steps label="For athletes" steps={STEPS_ATHLETE} accent="emerald" />
          <Steps label="For clubs & scouts" steps={STEPS_SCOUT} accent="blue" />
        </div>
      </section>

      {/* 03 FOR ATHLETES */}
      <section id="athletes" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="For athletes"
          title="Not a social network, but a scouting tool"
          text="The focus is on verified sports data, physical tests and full matches, so your talent can speak for itself."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ATHLETE_FEATURES.map((f) => (
            <div key={f.title} className="bg-slate-900 border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-colors">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${accentBox[f.color]}`}>
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-gradient-to-br from-emerald-500/15 to-transparent border border-emerald-500/20 rounded-3xl p-7 sm:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-black text-white">Skip the expensive trial camp</h3>
            <p className="text-slate-400 mt-2 leading-relaxed">
              A one- or two-week trial camp in Europe costs $1,500–3,500, before flights and hotels. That is often more than three to
              four months of a Georgian family's income. A basic Scouter profile costs nothing.
            </p>
          </div>
          <div className="md:text-right">
            <PrimaryButton href={APP_URL}>
              Create free profile <ArrowRight size={18} className="ml-2" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* 04 FOR CLUBS & SCOUTS */}
      <section id="clubs" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="For clubs & scouts"
          title="Discover emerging talent with minimal risk"
          text="Search a verified database of young Georgian athletes and evaluate them remotely, before you spend on a single trip."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
            {CLUB_FEATURES.map((f) => (
              <div key={f.title} className="flex items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <f.icon size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-white">{f.title}</h3>
                  <p className="text-sm text-slate-400 mt-1 leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <SearchPreview />
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          <div className="bg-slate-900 border border-white/5 rounded-3xl p-7">
            <div className="flex items-center text-slate-400 text-sm font-bold uppercase tracking-widest">
              <Plane size={16} className="mr-2" /> One scouting trip to Georgia
            </div>
            <div className="mt-5 space-y-3">
              {TRIP_COSTS.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <span className="text-slate-400">{k}</span>
                  <span className="font-bold text-white">{v}</span>
                </div>
              ))}
              <div className="flex justify-between pt-3 border-t border-white/10">
                <span className="font-bold text-white">Total, 3–4 days</span>
                <span className="font-black text-white text-lg">≈ €1,000</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed">
              And if the player is injured, has a bad game or stays on the bench that day, the money is gone.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-emerald-500/10 border border-blue-500/20 rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="text-blue-400 text-sm font-bold uppercase tracking-widest">With Scouter</div>
              <p className="text-4xl font-black text-white mt-4">70–80%</p>
              <p className="text-slate-300 mt-1">lower physical scouting costs</p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                For less than the cost of one trip, Pro Club gives your team a full year of remote access to the verified athlete
                database. Travel only for the most promising players.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-400 text-white font-black px-7 py-4 rounded-full transition-all active:scale-95"
              >
                Start 30-day free trial <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 05 PRICING */}
      <section id="pricing" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="Pricing"
          title="Connecting talent with opportunity"
          text="Choose the plan that fits your needs and take the next step, whether you are building a sports career or discovering new talent."
        />

        <div className="text-center mb-8">
          <h3 className="text-xl font-black text-white">For athletes & parents</h3>
          <p className="text-sm text-slate-400 mt-1">Show your abilities, grow your visibility and get in front of international scouts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS_ATHLETE.map((p) => (
            <PlanCard key={p.name} plan={p} accent="emerald" />
          ))}
        </div>

        <div className="text-center mt-20 mb-8">
          <h3 className="text-xl font-black text-white">For clubs & scouts (B2B SaaS)</h3>
          <p className="text-sm text-slate-400 mt-1">Discover promising players, evaluate their abilities and simplify your scouting process.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS_CLUB.map((p) => (
            <PlanCard key={p.name} plan={p} accent="blue" />
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5 text-sm">
          <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6">
            <h4 className="font-bold text-white">Free plan & trial</h4>
            <p className="text-slate-400 mt-2 leading-relaxed">
              The Basic Profile is free for athletes, with no time limit: create a profile, upload videos and become visible to
              international scouts at no cost. Every club and scout plan includes a 30-day free trial, so you can explore the platform
              before buying an annual subscription.
            </p>
          </div>
          <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6">
            <h4 className="font-bold text-white">Terms</h4>
            <ul className="text-slate-400 mt-2 space-y-1.5 leading-relaxed">
              <li>All prices are in Georgian lari (GEL).</li>
              <li>Paid plans are annual subscriptions.</li>
              <li>Athlete profile verification is free and does not depend on the plan.</li>
              <li>Custom corporate offers are available for B2B customers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 06 ABOUT US */}
      <section id="about" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="About us"
          title="Opening the path to the global stage for Georgian athletes"
          text="Scouter exists to remove the geographical and financial barriers between young athletes and the global sports world. A player's success should never depend on background or personal connections. Every talented athlete deserves an equal chance to be discovered."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map(([value, label]) => (
            <div key={label} className="bg-slate-900 border border-white/5 rounded-3xl p-6">
              <p className="text-3xl font-black text-emerald-400">{value}</p>
              <p className="text-sm text-slate-400 mt-2 leading-snug">{label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-600 mt-4 text-center">
          Sources: Geostat (2026), Ministry of Sport of Georgia, Grand View Research. The international share is our estimate.
        </p>

        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Business model</h3>
            <p className="text-slate-400 mt-3 leading-relaxed">
              Scouter is a B2B SaaS-enabled marketplace. Like LinkedIn, where professionals list themselves for free and recruiters pay
              for LinkedIn Recruiter, athletes join Scouter for free and clubs pay for the tools to find them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {MODEL.map((m) => (
              <div key={m.title} className="bg-slate-900 border border-white/5 rounded-3xl p-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                  <m.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{m.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-center mb-10">The team</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map(([name, role, text]) => (
              <div key={name} className="bg-slate-900 border border-white/5 rounded-3xl p-6 text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black">
                  {name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <h4 className="text-lg font-bold text-white mt-4">{name}</h4>
                <p className="text-xs text-emerald-400 font-bold mt-1">{role}</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight text-center mb-10">Frequently asked questions</h3>
          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Ready to be noticed?</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            Open the app and see what Scouter looks like through the eyes of an athlete and a scout.
          </p>
          <div className="mt-8">
            <PrimaryButton href={APP_URL}>
              Open the app <ArrowRight size={18} className="ml-2" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <Logo />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            {NAV.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:text-slate-300 transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Scouter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
