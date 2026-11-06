import React, { useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Film,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  User,
  Users,
  Check,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* ჩაწერე აქ შენი აპის (Vercel) ბმული                                  */
/* ------------------------------------------------------------------ */
const APP_URL = "https://scouter-xi.vercel.app/";

/* ------------------------------------------------------------------ */
/* CONTENT                                                            */
/* ------------------------------------------------------------------ */
const FEATURES = [
  {
    icon: BadgeCheck,
    title: "ვერიფიცირებული მონაცემები",
    text: "ფედერაციულ ბაზებთან ინტეგრაცია და ადგილობრივ მწვრთნელებთან თანამშრომლობა. გადამოწმებულ პროფილებს სპეციალური ნიშანი ენიჭებათ.",
    color: "emerald",
  },
  {
    icon: Film,
    title: "სრული მატჩები",
    text: "სკაუტები განსაკუთრებულ ყურადღებას დაუჭრელ, სრულ ვიდეოებს აქცევენ. ატვირთე highlights, სრული მატჩები და ფიზიკური ტესტები.",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "რეგიონებიდანაც",
    text: "დედაქალაქში ჩამოუსვლელად გამოაჩინე შენი შესაძლებლობები უცხოელი სკაუტების წინაშე.",
    color: "emerald",
  },
  {
    icon: Sparkles,
    title: "ჭკვიანი რეკომენდაციები",
    text: "ფილტრაციისა და სარეკომენდაციო ალგორითმები სკაუტებს სწორედ მათთვის საჭირო პოზიციისა და მეტრიკების სპორტსმენებს სთავაზობს.",
    color: "blue",
  },
  {
    icon: Trophy,
    title: "სპონსორები",
    text: "სკაუტების გარდა პლატფორმაზე არიან სპორტული ბრენდები და კერძო მხარდამჭერები.",
    color: "emerald",
  },
  {
    icon: ShieldCheck,
    title: "არასრულწლოვანთა დაცვა",
    text: "18 წლამდე სპორტსმენების ანგარიში მშობლის ან მეურვის თანხმობით იმართება, ხოლო კომუნიკაციის წესები მკაცრად კონტროლდება.",
    color: "blue",
  },
];

const FAQ = [
  {
    q: "რა არის Scouter და რით განსხვავდება ის ჩვეულებრივი სოციალური ქსელებისგან?",
    a: "Scouter არის სპეციალიზებული ციფრული პლატფორმა, რომელიც ახალგაზრდა ქართველ სპორტსმენებს საერთაშორისო სკაუტებსა და აკადემიებს აკავშირებს. სოციალური ქსელებისგან განსხვავებით, აქ აქცენტი კეთდება ვერიფიცირებულ სპორტულ მონაცემებზე, ფიზიკურ ტესტებსა და სრულ მატჩებზე.",
  },
  {
    q: "რა ღირს პლატფორმის გამოყენება სპორტსმენებისა და მშობლებისთვის?",
    a: "სპორტსმენისთვის საბაზისო პროფილის შექმნა, მონაცემებისა და ვიდეოების განთავსება სრულიად უფასოა. სურვილის შემთხვევაში, მშობელს შეუძლია შეიძინოს დამატებითი პრემიუმ სერვისები (მაგ. პროფილის პრიორიტეტული ჩვენება ან პროფესიონალური დამონტაჟება), რომლის საფასურიც წელიწადში 150 ლარს შეადგენს.",
  },
  {
    q: "რა ღირს პლატფორმაზე წვდომა უცხოური კლუბებისა და სკაუტებისთვის?",
    a: "საერთაშორისო კლუბებისა და აკადემიებისთვის მოქმედებს წლიური სააბონენტო სისტემა (B2B Subscription), რომლის ღირებულებაც დაახლოებით 2,000 ლარია (700 ევრო).",
  },
  {
    q: "როგორ მოწმდება სპორტსმენის მიერ ატვირთული მონაცემების სანდოობა?",
    a: "ინფორმაციის სიზუსტეს უზრუნველყოფს ოფიციალურ ფედერაციულ ბაზებთან ინტეგრაცია და ადგილობრივ მწვრთნელებთან თანამშრომლობა. გადამოწმებული მონაცემების მქონე პროფილებს ენიჭებათ სპეციალური ვერიფიცირებული ნიშანი.",
  },
  {
    q: "შეუძლიათ თუ არა რეგიონში მცხოვრებ სპორტსმენებს პლატფორმის გამოყენება?",
    a: "რა თქმა უნდა, Scouter-ის ერთ-ერთი მთავარი მიზანი სწორედ რეგიონებში არსებული ნიჭიერი სპორტსმენების აღმოჩენაა. პლატფორმა საშუალებას გაძლევთ დედაქალაქში ჩამოუსვლელად გამოაჩინოთ თქვენი შესაძლებლობები უცხოელი სკაუტების წინაშე.",
  },
  {
    q: "როგორ არის დაცული არასრულწლოვანი სპორტსმენების უსაფრთხოება?",
    a: "18 წლამდე ასაკის სპორტსმენების რეგისტრაცია და ანგარიშის მართვა ხორციელდება მშობლის ან კანონიერი მეურვის თანხმობით. პლატფორმაზე მკაცრად კონტროლდება პერსონალური მონაცემები და უცხო პირებთან პირდაპირი კომუნიკაციის წესები.",
  },
  {
    q: "რა ტიპის ვიდეო და მონაცემები უნდა აიტვირთოს პროფილზე?",
    a: "პროფილის მაქსიმალური ეფექტურობისთვის რეკომენდებულია თამაშის საუკეთესო მომენტების (Highlights), სრული მატჩებისა და ოფიციალური ფიზიკური ტესტების ჩანაწერების ატვირთვა. სკაუტები განსაკუთრებულ ყურადღებას სწორედ დაუჭრელ, სრულ ვიდეოებს აქცევენ.",
  },
  {
    q: "ეხმარება თუ არა პლატფორმა სპორტსმენებს სპონსორების მოძიებაში?",
    a: "დიახ, Scouter-ზე სკაუტების გარდა დარეგისტრირებულნი არიან სპორტული ბრენდები და კერძო მხარდამჭერები. მაღალი აკადემიური თუ სპორტული მაჩვენებლების მქონე ათლეტებს აქვთ შანსი მიიღონ ინდივიდუალური სპონსორობა.",
  },
  {
    q: "მხოლოდ ფეხბურთელებისთვის არის პლატფორმა თუ სხვა სპორტის სახეობებისთვისაც?",
    a: "Scouter არის მრავალსპორტული პლატფორმა, რომელიც მორგებულია როგორც გუნდურ, ისე ინდივიდუალურ სახეობებზე. საწყისი ფოკუსი ფეხბურთია, თუმცა სისტემა სრულად ემსახურება კალათბურთელებს, მორაგბეებსა და სხვა სპორტსმენებს.",
  },
  {
    q: "როგორ უზრუნველყოფს პლატფორმა, რომ სკაუტმა ჩემი შვილი/პროფილი ნამდვილად შეამჩნიოს?",
    a: "Scouter იყენებს ჭკვიანი ფილტრაციისა და სარეკომენდაციო ალგორითმებს, რომლებიც სკაუტებს სწორედ მათთვის საჭირო პოზიციისა და მეტრიკების მქონე სპორტსმენებს თავად სთავაზობს. გარდა ამისა, რეგულარულად განახლებადი მონაცემები, სრული მატჩების ვიდეოები და ვერიფიცირებული სტატუსი ავტომატურად წევს პროფილს ძიების შედეგების სათავეში.",
  },
];

const PLANS = [
  {
    name: "სპორტსმენი",
    price: "უფასო",
    period: "",
    note: "საბაზისო პროფილი",
    items: ["პროფილის შექმნა", "მონაცემებისა და ვიდეოების განთავსება", "ხილვადობა სკაუტებისთვის"],
    accent: "emerald",
    featured: false,
  },
  {
    name: "პრემიუმ (მშობლისთვის)",
    price: "150 ₾",
    period: "/ წელიწადში",
    note: "სურვილისამებრ",
    items: ["პროფილის პრიორიტეტული ჩვენება", "პროფესიონალური დამონტაჟება", "ყველაფერი საბაზისო პაკეტიდან"],
    accent: "emerald",
    featured: true,
  },
  {
    name: "კლუბები და სკაუტები",
    price: "≈ 2,000 ₾",
    period: "/ წელიწადში",
    note: "დაახლოებით 700 ევრო · B2B Subscription",
    items: ["წვდომა სპორტსმენთა ბაზაზე", "ფილტრაცია პოზიციისა და მეტრიკების მიხედვით", "საერთაშორისო კლუბებისა და აკადემიებისთვის"],
    accent: "blue",
    featured: false,
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
    <a href="#top" className="flex items-center space-x-3">
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
      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{title}</h2>
      {text && <p className="text-slate-400 mt-4 leading-relaxed">{text}</p>}
    </div>
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

/* ------------------------------------------------------------------ */
/* PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function App() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden">
      {/* background glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      <div className="absolute top-96 -right-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">შესაძლებლობები</a>
            <a href="#pricing" className="hover:text-white transition-colors">ფასები</a>
            <a href="#faq" className="hover:text-white transition-colors">კითხვები</a>
          </nav>
          <a
            href={APP_URL}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-5 py-2.5 rounded-full transition-all active:scale-95"
          >
            აპის გახსნა
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center px-4 py-1.5 bg-slate-800/80 border border-white/5 rounded-full text-sm font-semibold text-slate-200 mb-6">
            <Zap size={14} className="text-emerald-400 mr-2" /> ქართული ნიჭი მსოფლიო სცენისთვის
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            გზა პროფესიონალურ სპორტში იწყება აქ<span className="text-emerald-500">.</span>
          </h1>
          <p className="text-slate-400 text-lg mt-6 leading-relaxed">
            Scouter არის ციფრული პლატფორმა, რომელიც ახალგაზრდა ქართველ სპორტსმენებს საერთაშორისო სკაუტებსა და აკადემიებს აკავშირებს. ვერიფიცირებული მონაცემები, ფიზიკური ტესტები და სრული მატჩები ერთ პროფილში.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <PrimaryButton href={APP_URL}>
              გახსენი აპი <ArrowRight size={18} className="ml-2" />
            </PrimaryButton>
            <GhostButton href="#faq">ხშირად დასმული კითხვები</GhostButton>
          </div>
        </div>
        <PhonePreview />
      </section>

      {/* ROLES */}
      <section className="relative max-w-6xl mx-auto px-5 pb-20 grid sm:grid-cols-2 gap-5">
        <div className="bg-slate-800/60 border border-white/5 rounded-3xl p-6 flex items-start">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
            <User className="text-emerald-500" size={28} />
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-bold text-white">სპორტსმენებისთვის</h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">შექმენი პროფილი, ატვირთე ვიდეოები და გამოჩნდი სკაუტებისთვის.</p>
          </div>
        </div>
        <div className="bg-slate-800/60 border border-white/5 rounded-3xl p-6 flex items-start">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
            <Users className="text-blue-500" size={28} />
          </div>
          <div className="ml-5">
            <h3 className="text-lg font-bold text-white">სკაუტებისთვის</h3>
            <p className="text-sm text-slate-400 mt-1 leading-relaxed">აღმოაჩინე ნიჭი პოზიციისა და მეტრიკების მიხედვით, ვერიფიცირებულ მონაცემებზე დაყრდნობით.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle
          eyebrow="შესაძლებლობები"
          title="არა სოციალური ქსელი, არამედ სკაუტინგის ინსტრუმენტი"
          text="აქცენტი კეთდება ვერიფიცირებულ სპორტულ მონაცემებზე, ფიზიკურ ტესტებსა და სრულ მატჩებზე."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="bg-slate-900 border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-colors">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${accentBox[f.color]}`}>
                <f.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative max-w-6xl mx-auto px-5 py-16">
        <SectionTitle eyebrow="ფასები" title="სპორტსმენისთვის საბაზისო პროფილი უფასოა" />
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl p-7 border relative ${
                p.featured ? "bg-slate-800/80 border-emerald-500/50 shadow-lg" : "bg-slate-900 border-white/5"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full tracking-wider">
                  PREMIUM
                </span>
              )}
              <p className="text-sm font-bold text-slate-400">{p.name}</p>
              <div className="mt-3 flex items-baseline">
                <span className="text-4xl font-black text-white">{p.price}</span>
                <span className="text-slate-500 text-sm font-medium ml-2">{p.period}</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">{p.note}</p>
              <ul className="mt-6 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start text-sm text-slate-300">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 ${accentBox[p.accent]}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative max-w-3xl mx-auto px-5 py-16">
        <SectionTitle eyebrow="FAQ" title="ხშირად დასმული კითხვები" />
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
      </section>

      {/* CTA */}
      <section className="relative max-w-6xl mx-auto px-5 py-16">
        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">მზად ხარ, რომ შეგამჩნიონ?</h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            გახსენი აპი და ნახე, როგორ გამოიყურება Scouter სპორტსმენისა და სკაუტის თვალით.
          </p>
          <div className="mt-8">
            <PrimaryButton href={APP_URL}>
              გახსენი აპი <ArrowRight size={18} className="ml-2" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Scouter. ყველა უფლება დაცულია.</p>
        </div>
      </footer>
    </div>
  );
}
