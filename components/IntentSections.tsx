import React from 'react';
import Link from 'next/link';
import { Play } from 'lucide-react';
import { Button } from './Button';
import { AccordionGroup } from './Accordion';
import { BriefForm, type BriefFormConfig } from './BriefForm';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, gmailCompose, whatsApp, type Crumb, type FaqItem } from '@/lib/seo';

/* Building blocks shared by the service (intent) pages and the case studies.
   Styling lives in the "Phase 1 pages" block at the end of globals.css. */

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="cg-crumbs" aria-label="Breadcrumb" data-aos="fade-up">
      {crumbs.map((c, i) =>
        i < crumbs.length - 1 ? (
          <React.Fragment key={c.path}>
            <Link href={c.path}>{c.name}</Link>
            <span aria-hidden="true">&rsaquo;</span>
          </React.Fragment>
        ) : (
          <span key={c.path} aria-current="page">
            {c.name}
          </span>
        )
      )}
    </nav>
  );
}

/** The 40–60 word direct answer — the block answer engines lift. */
export function DirectAnswer({ children, aosDelay = 200 }: { children: React.ReactNode; aosDelay?: number }) {
  return (
    <div className="cg-answer" data-aos="fade-up" data-aos-delay={aosDelay}>
      <p className="eyebrow">In short</p>
      <p>{children}</p>
    </div>
  );
}

export interface RelatedLink {
  href: string;
  kicker: string;
  title: string;
  desc: string;
}

export function RelatedLinks({ items }: { items: RelatedLink[] }) {
  return (
    <div className="cg-related">
      {items.map((r, i) => (
        <Link key={r.href} href={r.href} data-aos="fade-up" data-aos-delay={i * 80}>
          <div className="k">{r.kicker}</div>
          <div className="t">{r.title}</div>
          <p className="d">{r.desc}</p>
        </Link>
      ))}
    </div>
  );
}

/** A scale-card that links to a case study instead of opening a video. */
export function CaseCard({
  href,
  videoId,
  alt,
  title,
  highlight,
  desc,
  tags,
  aosDelay,
}: {
  href: string;
  videoId: string;
  alt: string;
  title: string;
  highlight: string;
  desc: string;
  tags: string[];
  aosDelay?: number;
}) {
  return (
    <Link
      href={href}
      className="scale-card group"
      style={{ textDecoration: 'none', color: 'inherit' }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="scale-card-video">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={alt}
          loading="lazy"
          decoding="async"
        />
        <div className="scale-video-overlay">
          <div className="scale-play-btn">
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </div>
        </div>
      </div>
      <div className="scale-card-body">
        <div className="scale-card-title">{title}</div>
        <div className="scale-card-highlight">{highlight}</div>
        <p className="scale-card-desc">{desc}</p>
      </div>
      <div className="scale-card-footer">
        <div className="scale-card-tech-label">Techniques</div>
        <div className="scale-card-tags">
          {tags.map((t) => (
            <span key={t} className="scale-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/** 16:9 lazy YouTube embed (privacy-enhanced domain). */
export function VideoEmbed({
  videoId,
  title,
  caption,
}: {
  videoId: string;
  title: string;
  caption?: React.ReactNode;
}) {
  return (
    <div data-aos="fade-left" data-aos-delay="150">
      <div className="cg-video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && <p className="cg-video-cap">{caption}</p>}
    </div>
  );
}

/** Visible FAQ. Pass the same `items` to faqNode() so the schema matches word for word. */
export function FaqSection({ eyebrow, title, items }: { eyebrow: string; title: string; items: FaqItem[] }) {
  return (
    <section className="sec-sm band-blush">
      <div className="wrap">
        <div className="cg-head">
          <p className="eyebrow" data-aos="fade-up">{eyebrow}</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">{title}</h2>
        </div>
        <div className="cg-mt" style={{ maxWidth: '860px' }}>
          <AccordionGroup items={items} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}

/** Brief form on the left, "Rather talk it through?" on the right. Anchor: #brief */
export function BriefSection({
  eyebrow,
  title,
  sub,
  form,
  callCopy,
  waText,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  form: BriefFormConfig;
  callCopy: string;
  /** prefilled WhatsApp message */
  waText: string;
}) {
  return (
    <section className="sec sec-contact scroll-mt-24">
      <div className="wrap split contact-split">
        <div
          id="brief"
          className="p-6 sm:p-8 bg-panel border-2 border-brick/30 shadow-sh-lg rounded-sm scroll-mt-28"
          data-aos="fade-up"
        >
          <p className="eyebrow" style={{ color: 'var(--brick)' }}>{eyebrow}</p>
          <h2 className="big" style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}>{title}</h2>
          <p className="sub" style={{ marginTop: '10px' }}>{sub}</p>
          <BriefForm {...form} />
        </div>
        <div className="contact-side" data-aos="fade-left" data-aos-delay="150">
          <div className="case cg-call">
            <div className="ct">Rather talk it through?</div>
            <p>{callCopy}</p>
            <div className="btns">
              <Button href={whatsApp(waText)} variant="live" target="_blank">
                Book a call on WhatsApp
              </Button>
              <a className="btn btn-g" href={PHONE_TEL}>
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
            <p style={{ marginTop: '6px' }}>
              <strong>Office</strong>
              <br />
              E-107, Sector 6, Noida,
              <br />
              Uttar Pradesh 201301
            </p>
            <p>
              <strong>Email</strong>
              <br />
              <a href={gmailCompose()} target="_blank" rel="noopener noreferrer">
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
