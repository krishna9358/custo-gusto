'use client';

import React from 'react';
import { Button } from './Button';
import { EMAIL } from '@/lib/seo';

export interface BriefSelect {
  name: string;
  label: string;
  options: string[];
}

export interface BriefFormConfig {
  /** route slug, sent with the lead so we know which page it came from */
  sourcePage: string;
  leadType: string;
  companyLabel: string;
  companyRequired?: boolean;
  cityLabel: string;
  dateLabel: string;
  type: BriefSelect;
  size: BriefSelect;
  placeholder: string;
  footNote: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function BriefForm({
  sourcePage,
  leadType,
  companyLabel,
  companyRequired = true,
  cityLabel,
  dateLabel,
  type,
  size,
  placeholder,
  footNote,
}: BriefFormConfig) {
  const [sent, setSent] = React.useState(false);

  /* no backend on this project, so — like ContactForm — the brief is handed to
     the visitor's mail client already addressed and filled in */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || '').trim();
    const name = get('name');

    const subject = `Brief — ${get(type.name)}${name ? ` — ${name}` : ''}`;
    const body = [
      `Name: ${name}`,
      `Email: ${get('email')}`,
      `Phone: ${get('phone')}`,
      `${companyLabel}: ${get('company')}`,
      `${cityLabel}: ${get('city')}`,
      `${dateLabel}: ${get('event_date')}`,
      `${type.label}: ${get(type.name)}`,
      `${size.label}: ${get(size.name)}`,
      '',
      get('message'),
      '',
      `— sent from custogusto.in/${sourcePage}`,
    ].join('\n');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_submit', lead_type: leadType, form_page: sourcePage });

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSent(true);
  };

  return (
    <form className="form" style={{ marginTop: '22px' }} onSubmit={handleSubmit}>
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="lead_type" value={leadType} />
      <div className="f2">
        <div className="field">
          <label htmlFor="b-n">Name</label>
          <input id="b-n" type="text" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="b-e">Email</label>
          <input id="b-e" type="email" name="email" autoComplete="email" required />
        </div>
      </div>
      <div className="f2">
        <div className="field">
          <label htmlFor="b-p">
            Phone or WhatsApp <span className="opt">(optional)</span>
          </label>
          <input id="b-p" type="tel" name="phone" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="b-c">{companyLabel}</label>
          <input
            id="b-c"
            type="text"
            name="company"
            autoComplete="organization"
            required={companyRequired}
          />
        </div>
      </div>
      <div className="f2">
        <div className="field">
          <label htmlFor="b-city">{cityLabel}</label>
          <input id="b-city" type="text" name="city" />
        </div>
        <div className="field">
          <label htmlFor="b-d">
            {dateLabel} <span className="opt">(if known)</span>
          </label>
          <input id="b-d" type="date" name="event_date" />
        </div>
      </div>
      <div className="f2">
        <div className="field">
          <label htmlFor="b-t">{type.label}</label>
          <select id="b-t" name={type.name}>
            {type.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="b-g">{size.label}</label>
          <select id="b-g" name={size.name}>
            {size.options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="b-m">Tell us more</label>
        <textarea id="b-m" name="message" placeholder={placeholder}></textarea>
      </div>
      <div className="cg-form-foot">
        <Button variant="primary" type="submit">
          Send the brief
        </Button>
        <small>{footNote}</small>
      </div>
      {sent && (
        <p className="form-sent" role="status">
          A compose window is open, addressed to {EMAIL} &mdash; press send and
          you will have a reply the same day.
        </p>
      )}
    </form>
  );
}
