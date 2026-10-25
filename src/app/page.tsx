import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import { site } from "@/lib/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const O = "https://dolcemd.com";

const included = [
  ["Family first", "When both parents are concierge members, children are included at no additional cost."],
  ["Extended appointment times", "Extended, unhurried visits where the doctor can understand your family’s health needs, preferences, and history."],
  ["Same day appointments", "Flexible scheduling with guaranteed same or next day appointments."],
  ["Streamlined care coordination", "Referrals to specialists, follow-up appointments, and coordination with schools or childcare providers."],
  ["In-office laboratory", "No driving to a separate lab for your tests."],
  ["Virtual visits", "Virtual visits for care anytime, anywhere."],
] as const;

const insurers = [
  "PPO", "Aetna", "Blue Cross", "Blue Shield", "Cigna", "HealthNet", "Multiplan", "Tricare",
  "United", "Medicare", "Caremore", "Optum", "Monarch", "Prospect", "Providence",
];

const menu = [
  {
    group: "Medical dermatology",
    items: [
      ["Medical & Surgical Dermatology", "/services/medical-surgical-dermatology/"],
      ["Skin Cancer", "/services/skin-cancer/"],
      ["Acne & Skin", "/services/acne-and-skin/"],
      ["Cosmetic Dermatology", "/services/cosmetic-dermatology/"],
      ["Botox Bar", "/services/botox-bar/"],
      ["Dermal Bar", "/services/dermal-fillermenu/"],
      ["Biostimulators", "/services/biostimulatormenu/"],
      ["Exion Clear Laser", "/services/exion-clear-rf/"],
      ["RF Microneedling", "/services/rf-microneedling/"],
      ["Hair Restoration & Scalp Revitalization", "/services/acne-and-skin/hair-restoration-scalp-revitalization/"],
    ],
  },
  {
    group: "Medical spa",
    items: [
      ["EMSculpt Neo", "/services/em-sculpt-neo/"],
      ["Hyperbaric Oxygen Therapy", "/services/hyperbaric-oxygen-therapy/"],
      ["Red Light Therapy", "/services/red-light-therapy/"],
      ["Body Composition Analysis", "/services/body-composition-analysis/"],
      ["Compression", "/services/compression/"],
      ["Infrared Sauna", "/services/infrared-sauna/"],
      ["Cold Plunge", "/services/cold-plunge/"],
    ],
  },
  {
    group: "Regenerative & infusion",
    items: [
      ["Stem Cell Therapy", "/services/stem-cell-therapy/"],
      ["Exosome Therapy", "/services/exosome-therapy/"],
      ["IV Therapy Menu", "/iv-menu/"],
      ["NAD+ Therapy", "/nad/"],
      ["Vitamin Injections", "/vitamin-shots/"],
      ["Lab Testing Packages", "/lab-packages/"],
    ],
  },
  {
    group: "Programs",
    items: [
      ["Medical Weight Loss", "/programs/weight-loss-program/"],
      ["Hormone Optimization", "/programs/hormone-optimization/"],
    ],
  },
] as const;

const tiers = [
  ["Signature", "$199", "8 credits", "Wellness technology and holistic practices."],
  ["Platinum", "$299", "15 credits", "IV therapy, vitamin injections, health technology, and data tracking. Described by the practice as its most popular option."],
  ["The Ritual", "$325", "31 credits", "Cryotherapy, Infrared Sauna, Red Light, Cold Plunge, and Compression; body composition every 3 months included."],
] as const;

const credits = [
  ["1 credit", "Cold Plunge · Red Light Therapy · Compression"],
  ["2 credits", "InBody Composition · Vitamin Shot · Infrared Sauna"],
  ["5 credits", "IV Therapy"],
  ["6 credits", "Hyperbaric Oxygen"],
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className="pb-16 lg:pb-0">
        {/* HERO */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-12 pb-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:pt-20 lg:pb-20">
            <div>
              <p className="eyebrow text-gold">Laguna Beach · Exclusive Primary Care &amp; Medical Spa</p>
              <h1 className="font-display mt-5 text-[2.6rem] leading-[1.04] sm:text-6xl">
                Elevated Wellness.<br />Refined Results.
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/80">
                Dolce MD is an integrative wellness clinic led by board-certified family physician Dr. John Sanguedolce, combining primary medicine with evidence-based med spa treatments. Now accepting patients.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="focus-ring border border-white/40 px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-white/10">
                  Call {site.phoneDisplay}
                </a>
                <a href={site.book} {...ext} className="focus-ring bg-teal px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-teal-2">
                  Book an Appointment
                </a>
              </div>
            </div>
            <div className="self-end border-l border-gold/60 pl-6">
              <p className="eyebrow text-white/60">Where to go</p>
              <ul className="mt-4 divide-y divide-white/15 border-y border-white/15">
                <li>
                  <a href="#concierge" className="focus-ring group flex items-baseline justify-between gap-4 py-4">
                    <span><span className="font-display block text-2xl">Concierge primary care</span><span className="text-sm text-white/65">Members only · $225 per month, billed annually</span></span>
                    <span aria-hidden className="text-gold">→</span>
                  </a>
                </li>
                <li>
                  <a href="#medspa" className="focus-ring group flex items-baseline justify-between gap-4 py-4">
                    <span><span className="font-display block text-2xl">Medical dermatology &amp; spa</span><span className="text-sm text-white/65">Lilly Sanguedolce, PA-C · memberships from $199 per month</span></span>
                    <span aria-hidden className="text-gold">→</span>
                  </a>
                </li>
                <li>
                  <a href="#physical" className="focus-ring group flex items-baseline justify-between gap-4 py-4">
                    <span><span className="font-display block text-2xl">Executive Physical</span><span className="text-sm text-white/65">Genetics, epigenetics, and full body imaging</span></span>
                    <span aria-hidden className="text-gold">→</span>
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                {site.address}<br />
                {site.hours}
              </p>
            </div>
          </div>
        </section>

        {/* CONCIERGE */}
        <section id="concierge" className="scroll-mt-16 bg-foam">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="eyebrow text-teal-2">Path one</p>
                <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">Concierge Primary Care</h2>
                <p className="mt-5 leading-relaxed text-muted">
                  Dolce MD is a premier primary care medical office focused on enhancing the patient experience. Under the guidance of board-certified family physician Dr. John Sanguedolce, the practice offers increased availability and accessibility, combined with state-of-the-art medical technology.
                </p>
                <div className="mt-8 border-t-2 border-ink pt-5">
                  <p className="font-display text-5xl">$225<span className="text-lg text-muted"> per month</span></p>
                  <p className="mt-1 text-sm text-muted">Billed annually. Members only; limited availability.</p>
                  <ul className="mt-5 space-y-2 text-[15px] leading-snug">
                    <li>Body Composition Analysis with every appointment</li>
                    <li>Four monthly med spa credits to personalize your treatment plan</li>
                    <li>Two annual IV therapies tailored to your individual needs</li>
                    <li>Exclusive member pricing across all advanced treatments</li>
                  </ul>
                  <a href={`${O}/services/concierge-primary-care/`} {...ext} className="focus-ring mt-6 inline-block text-sm font-semibold text-teal-2 underline underline-offset-4">
                    Full concierge details on dolcemd.com ↗
                  </a>
                </div>
              </div>
              <div>
                <h3 className="eyebrow text-muted">What’s included</h3>
                <dl className="mt-4 divide-y divide-sand border-y border-sand">
                  {included.map(([t, d]) => (
                    <div key={t} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                      <dt className="font-semibold">{t}</dt>
                      <dd className="text-muted">{d}</dd>
                    </div>
                  ))}
                </dl>
                <h3 className="eyebrow mt-10 text-muted">Accepted insurances, as listed by the practice</h3>
                <p className="mt-3 leading-relaxed text-[15px]">{insurers.join(" · ")}</p>
                <p className="mt-2 text-sm text-muted">Please call to confirm that your plan is accepted.</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTIVE PHYSICAL */}
        <section id="physical" className="scroll-mt-16 bg-navy-2 text-white">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow text-gold">Start here</p>
                <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">The Executive Physical</h2>
                <p className="mt-5 leading-relaxed text-white/80">
                  A comprehensive exam integrating genetics, epigenetics, and full body imaging, with Dr. Sanguedolce and an extensive physical exam. Schedule a free consultation to learn what is right for you.
                </p>
                <ol className="mt-8 space-y-6">
                  {[
                    ["Executive Physical", "A comprehensive executive physical featuring advanced biomarkers, genetic insights, and full-body imaging."],
                    ["Become a Concierge Primary Care Member", "Continuity with Dr. Sanguedolce to support adherence to treatment plans."],
                    ["Customized Wellness Plan", "A physician-guided Platinum membership to personalize your health plan."],
                  ].map(([t, d], i) => (
                    <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-3">
                      <span className="font-display text-3xl text-gold">0{i + 1}</span>
                      <span><span className="block font-semibold">{t}</span><span className="text-white/70">{d}</span></span>
                    </li>
                  ))}
                </ol>
                <a href={site.book} {...ext} className="focus-ring mt-9 inline-block bg-teal px-6 py-3.5 text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-teal-2">
                  Schedule a Free Consultation
                </a>
              </div>
              <div>
                <h3 className="eyebrow text-white/60">What’s included, per the practice</h3>
                <ul className="mt-4 divide-y divide-white/15 border-y border-white/15 text-[15px]">
                  {[
                    "Comprehensive labs",
                    "Hormone panel",
                    "Micronutrient test",
                    "Wheat Zoomer test",
                    "Galleri cancer test",
                    "TruAge epigenetic test",
                    "3 x 4 genetic test",
                    "Full body MRI",
                    "Cardiac assessment: EKG and carotid artery ultrasound",
                    "Complete medical and physical exam with follow up",
                    "Personalized wellness plan",
                  ].map((x) => (
                    <li key={x} className="py-3">{x}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-white/60">
                  Details and testing descriptions: <a href={`${O}/services/executive-physical/`} {...ext} className="underline underline-offset-4">dolcemd.com ↗</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MED SPA */}
        <section id="medspa" className="scroll-mt-16 bg-sand/60">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal-2">Path two</p>
              <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">Medical Dermatology &amp; Aesthetics, Medical Spa</h2>
              <p className="mt-5 leading-relaxed text-muted">
                Led by board-certified Physician Assistant Lilly Sanguedolce, this division blends advanced dermatologic expertise with a refined aesthetic approach, with in-house care ranging from medical skin conditions to regenerative and non-invasive aesthetic treatments.
              </p>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {menu.map((g) => (
                <div key={g.group}>
                  <h3 className="font-display border-b-2 border-ink pb-2 text-2xl">{g.group}</h3>
                  <ul className="mt-2 divide-y divide-sand">
                    {g.items.map(([label, path]) => (
                      <li key={label}>
                        <a href={`${O}${path}`} {...ext} className="focus-ring flex items-center justify-between gap-3 py-2.5 hover:text-teal-2">
                          <span>{label}</span><span aria-hidden className="text-muted">↗</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Each service opens its page on the practice’s own website.</p>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <h3 className="font-display text-3xl">Medical spa memberships</h3>
                <table className="mt-5 w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b-2 border-ink text-sm">
                      <th className="py-2 pr-3 font-semibold">Membership</th>
                      <th className="py-2 pr-3 font-semibold">Per month</th>
                      <th className="py-2 font-semibold">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tiers.map(([n, p, c, d]) => (
                      <tr key={n} className="border-b border-sand align-top">
                        <td className="py-3 pr-3"><span className="font-semibold">{n}</span><span className="mt-1 block text-sm text-muted">{d}</span></td>
                        <td className="py-3 pr-3 font-display text-2xl">{p}</td>
                        <td className="py-3 whitespace-nowrap">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Per the practice: memberships have a three-month minimum, renew monthly, and require 30 days’ notice to cancel. Unused credits do not roll over. NAD+ services and select specialty treatments are excluded from the credit system. Prices and services are subject to change. See the full terms on{" "}
                  <a href={site.membershipPage} {...ext} className="underline underline-offset-4">dolcemd.com/membership ↗</a>.
                </p>
              </div>
              <div>
                <h3 className="font-display text-3xl">How credits work</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">Each month you choose from the available services to match what you want to do.</p>
                <dl className="mt-4 divide-y divide-sand border-y border-sand">
                  {credits.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[6rem_1fr] gap-3 py-3">
                      <dt className="font-semibold">{k}</dt>
                      <dd className="text-muted">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* PROVIDERS */}
        <section id="providers" className="scroll-mt-16 bg-foam">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <p className="eyebrow text-teal-2">Your providers</p>
            <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <article>
                <h2 className="font-display text-4xl leading-tight">John Sanguedolce, MD</h2>
                <p className="mt-1 text-muted">Board Certified Family Physician</p>
                <p className="mt-5 leading-relaxed">
                  Dr. Sanguedolce aspires to be more than just your doctor; he is a partner in your family’s well-being. He emphasizes routine checkups to catch potential issues early, and finds his greatest joy in empowering patients through education.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Training: Loyola Marymount University, St. George’s University School of Medicine, New York University for clinical training, and Chief Resident at Stony Brook Southampton Hospital. Southampton Hospital Family Medicine Resident of the Year 2020.
                </p>
                <blockquote className="font-display mt-6 border-l-2 border-gold pl-5 text-xl leading-snug">
                  “True health is not measured by the absence of symptoms but by the presence of vitality, joy, and purpose in everyday living.”
                  <footer className="mt-2 font-sans text-sm text-muted">Dr. John Sanguedolce</footer>
                </blockquote>
                <a href={`${O}/about/dr-john-sanguedolce/`} {...ext} className="focus-ring mt-6 inline-block text-sm font-semibold text-teal-2 underline underline-offset-4">Read his full profile ↗</a>
              </article>
              <article>
                <h2 className="font-display text-4xl leading-tight">Lilly Sanguedolce, PA-C</h2>
                <p className="mt-1 text-muted">Board Certified Physician Assistant (NCCPA) · SDPA Diplomate Fellow</p>
                <p className="mt-5 leading-relaxed">
                  A nationally certified Physician Assistant specializing in dermatology and advanced aesthetic medicine. Her approach blends medical precision with an artistic eye, with an emphasis on early detection, routine skin examinations, and patient education.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Training: California State University, the Massachusetts College of Pharmacy and Health Sciences (MCPHS), gross anatomy training at Harvard Medical School, and internal medicine training at Newton-Wellesley Hospital.
                </p>
                <a href={`${O}/about/lilly-sanguedolce/`} {...ext} className="focus-ring mt-6 inline-block text-sm font-semibold text-teal-2 underline underline-offset-4">Read her full profile ↗</a>
              </article>
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="scroll-mt-16 bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-20">
            <div>
              <p className="eyebrow text-gold">Visit the office</p>
              <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">310 Glenneyre St,<br />Laguna Beach</h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/75">
                Downtown Laguna Beach. Call to schedule, or book online through the practice’s patient scheduling page.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="focus-ring border border-white/40 px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-white/10">Call {site.phoneDisplay}</a>
                <a href={site.book} {...ext} className="focus-ring bg-teal px-6 py-3.5 text-center text-[13px] font-semibold tracking-[0.12em] uppercase hover:bg-teal-2">Book an Appointment</a>
              </div>
            </div>
            <dl className="divide-y divide-white/15 border-y border-white/15 self-start">
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-4"><dt className="text-white/60">Address</dt><dd>{site.address} · <a className="underline underline-offset-4" href={site.mapsHref} {...ext}>Directions ↗</a></dd></div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-4"><dt className="text-white/60">Hours</dt><dd>{site.hours}<span className="block text-sm text-white/60">As published on dolcemd.com. Please call to confirm.</span></dd></div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-4"><dt className="text-white/60">Phone</dt><dd><a className="underline underline-offset-4" href={site.phoneHref}>(949) 209-9266</a></dd></div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-4"><dt className="text-white/60">Message</dt><dd><a className="underline underline-offset-4" href={site.contactPage} {...ext}>Contact form on dolcemd.com ↗</a></dd></div>
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-4"><dt className="text-white/60">Patients</dt><dd><a className="underline underline-offset-4" href={site.portal} {...ext}>Patient Portal ↗</a></dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-ink pb-24 text-sm text-white/65 lg:pb-8">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <p className="max-w-3xl leading-relaxed">
            Content on this site is not intended to replace an evaluation with a qualified healthcare professional and is not intended as medical advice. Terms and restrictions may apply; prices and services are subject to change.
          </p>
          <p className="mt-4">
            © Dolce MD ·{" "}
            <a className="underline underline-offset-4" href={site.privacy} {...ext}>Privacy Policy</a> ·{" "}
            <a className="underline underline-offset-4" href={site.official} {...ext}>dolcemd.com</a>
          </p>
          <p className="mt-2 text-white/50">Website redesign by Novenworks. Not the official website.</p>
        </div>
      </footer>
      <MobileBar />
    </>
  );
}
