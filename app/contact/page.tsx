'use client';

import React from 'react';
import Link from 'next/link';
import { Dot } from '@/components/Glyphs';
import { Photo } from '@/components/SharedSections';

export default function ContactPage() {
  const faqs = [
    {
      q: 'How quickly can you start?',
      a: 'About two days, from our crews in Bangalore and Delhi.',
    },
    {
      q: 'What do you need from us?',
      a: 'Somewhere to stand and the products themselves. The machines, the operator, the designer, all the materials and the running of it are ours.',
    },
    {
      q: 'Can we see it before committing to anything?',
      a: 'Yes, and this is the easiest way. We will bring a desk to your office for an afternoon and let your team make their own pieces. Most decisions get made in that hour.',
    },
    {
      q: 'Do you work outside Delhi and Bangalore?',
      a: 'Yes. Those are just where the crews sleep.',
    },
  ];

  return (
    <>
      <section
        className="band band-mar"
        style={{ paddingBottom: 'calc(var(--pad)*.6)' }}
      >
        <div className="wrap">
          <p className="eyebrow" style={{ color: 'var(--onmar)', opacity: 0.8 }}>
            Contact
          </p>
          <h1
            className="big"
            style={{ color: 'var(--indigo)', fontSize: 'clamp(34px, 5.8vw, 66px)' }}
          >
            TELL US WHAT YOU WANT MADE.
          </h1>
          <p className="lead" style={{ marginTop: '16px', color: 'var(--onmar)' }}>
            A shop floor, a launch in six weeks, or two hundred things that need to be
            ready by Friday. Say which one it is and you will have an answer today
            &mdash; WhatsApp is the fastest way.
          </p>
          <div className="btns" style={{ marginTop: '28px' }}>
            <a
              className="btn btn-live"
              href="https://wa.me/919654382799"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dot /> WhatsApp us
            </a>
            <a className="btn btn-p" href="mailto:laksh@custogusto.in">
              Email Laksh
            </a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="big" style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}>
              Tell us what you are working on
            </h2>
            <p className="sub" style={{ marginTop: '10px' }}>
              Four fields, because your time is worth more than our form. You get a reply
              the same day.
            </p>
            <form
              className="form"
              style={{ marginTop: '22px' }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="f2">
                <div className="field">
                  <label htmlFor="n">Name</label>
                  <input id="n" type="text" autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="e">Email</label>
                  <input id="e" type="email" autoComplete="email" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="w">Which sounds like you?</label>
                <select id="w" defaultValue="I have a shop floor that needs a reason to visit">
                  <option>I have a shop floor that needs a reason to visit</option>
                  <option>I have a launch or an event coming up</option>
                  <option>I need a batch of things made and sent back</option>
                  <option>I am not sure yet, but I want to talk</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="m">Tell us more</label>
                <textarea id="m"></textarea>
              </div>
              <div>
                <button className="btn btn-p" type="submit">
                  Send it
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="case">
              <div className="ct">Getting to you</div>
              <p style={{ marginTop: '10px' }}>
                <strong>Office</strong>
                <br />
                E-107, Sector 6, Noida,
                <br />
                Uttar Pradesh 201301
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>How fast we reach you</strong>
                <br />
                Crews wait in Bangalore and Delhi, so most places in India are about
                two days away. Two cities can run at the same time.
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>If your stores are somewhere else, that is fine.</strong> Where
                our office sits has never decided where a desk can go.
              </p>
              <p style={{ marginTop: '14px' }}>
                <strong>Phone</strong>
                <br />
                +91 96543 82799
              </p>
              <p style={{ marginTop: '12px' }}>
                <strong>Email</strong>
                <br />
                laksh@custogusto.in
              </p>
            </div>
            <div style={{ marginTop: '16px' }}>
              <Photo
                imgKey="contact_e1"
                alt="A set of finished totes"
                shape="ph-16"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <h2 className="big" style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}>
            What people usually ask first
          </h2>
          <div style={{ marginTop: '22px', maxWidth: '820px' }}>
            {faqs.map((f, idx) => (
              <details key={idx} className="acc">
                <summary>{f.q}</summary>
                <div className="body">{f.a}</div>
              </details>
            ))}
            <p style={{ marginTop: '16px' }}>
              <Link href="/faq" style={{ color: 'var(--brick)', fontWeight: 600 }}>
                All questions &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
