import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  checkedOn,
  coldEmail,
  contact,
  contactBlock,
  doNotSay,
  followUp,
  improvements,
  links,
  observations,
  phoneScript,
  snapshot,
  stillToVerify,
  subjectLines,
  talkingPoints,
  voicemail,
} from "@/lib/outreach";

// Operator-only. Not linked from navigation or footer, noindex/nofollow.
export const metadata: Metadata = {
  title: "Outreach notes (internal)",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-sand pt-6">
      <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function List({ items, ordered = false }: { items: readonly string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`space-y-2.5 pl-5 leading-relaxed ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

function Script({ text }: { text: string }) {
  return (
    <pre className="bg-sand/60 p-4 font-sans text-[16px] leading-relaxed break-words whitespace-pre-wrap sm:p-5">
      {text}
    </pre>
  );
}

export default function OutreachPage() {
  return (
    <div className="bg-foam py-10 sm:py-14">
      <div className="mx-auto w-full max-w-4xl space-y-8 px-5 sm:px-8">
        <div>
          <p className="inline-block bg-ink px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-white uppercase">
            Operator outreach · internal · not prospect-facing
          </p>
          <h1 className="font-display mt-4 text-4xl sm:text-5xl">Dolce MD: outreach notes</h1>
          <p className="mt-2 text-muted">Novenworks redesign · original site checked {checkedOn}</p>
        </div>

        <Section title="Business snapshot">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_1fr]">
            {snapshot.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold">{k}</dt>
                <dd className="text-muted">{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-2 underline underline-offset-4">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Contact block">
          <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[10rem_1fr]">
            <dt className="font-semibold">Send to</dt>
            <dd className="break-all">{contact.recipient}</dd>
            <dt className="font-semibold">Phone</dt>
            <dd>{contact.phone}</dd>
            <dt className="font-semibold">Greeting</dt>
            <dd>{contact.greeting}</dd>
            <dt className="font-semibold">Note</dt>
            <dd className="text-muted">{contact.note}</dd>
          </dl>
          <h3 className="mt-6 font-semibold">Every candidate, with source (checked {checkedOn})</h3>
          <ul className="mt-3 space-y-4">
            {contactBlock.map((c) => (
              <li key={c.channel} className="border-l-2 border-gold pl-4">
                <p className="font-semibold break-words">{c.channel}</p>
                <p className="text-sm text-muted">{c.status}</p>
                <p className="mt-1 text-[15px] leading-relaxed break-words">{c.source}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={`Original-site observations (checked ${checkedOn})`}>
          <List items={observations} />
        </Section>

        <Section title="What the redesign improves">
          <List items={improvements} />
        </Section>

        <Section title="Talking points">
          <List items={talkingPoints} ordered />
        </Section>

        <Section title="What not to say">
          <List items={doNotSay} />
        </Section>

        <Section title="Subject lines">
          <List items={subjectLines} ordered />
        </Section>

        <Section title="Cold email">
          <Script text={coldEmail} />
        </Section>

        <Section title="Follow-up">
          <Script text={followUp} />
        </Section>

        <Section title="Phone / text script">
          <Script text={phoneScript} />
        </Section>

        <Section title="Voicemail">
          <Script text={voicemail} />
        </Section>

        <Section title="Still to verify before sending">
          <List items={stillToVerify} />
        </Section>
      </div>
    </div>
  );
}
