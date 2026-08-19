import React from 'react';
import Link from 'next/link';
import { Dot } from '@/components/Glyphs';
import { Photo } from '@/components/SharedSections';
import { ContactForm } from '@/components/ContactForm';
import { Accordion } from '@/components/Accordion';
import { Button } from '@/components/Button';
import { CONTACT_FAQS } from '@/data/faq';

export default function ContactPage() {
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
            <Button
              href="https://wa.me/919654382799"
              variant="live"
              target="_blank"
            >
              <Dot /> WhatsApp us
            </Button>
            <Button href="mailto:laksh@custogusto.in" variant="primary">
              Email Laksh
            </Button>
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
            <ContactForm />
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
            {CONTACT_FAQS.map((f, idx) => (
              <Accordion key={idx} question={f.q} answer={f.a} />
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
