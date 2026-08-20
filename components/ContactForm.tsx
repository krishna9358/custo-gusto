'use client';

import React from 'react';
import { Button } from './Button';

const TO = 'laksh@custogusto.in';

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  /* no backend on this project, so the brief is handed to the visitor's mail
     client already addressed and filled in */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const which = String(data.get('which') || '').trim();
    const message = String(data.get('message') || '').trim();

    const subject = `Desk enquiry${name ? ` — ${name}` : ''}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Which sounds like you: ${which}`,
      '',
      message,
    ].join('\n');

    /* a compose window in a new tab, same as the Email button — a mailto: does
       nothing on a machine with no mail client wired up */
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      '_blank',
      'noopener,noreferrer'
    );
    setSent(true);
  };

  return (
    <form className="form" style={{ marginTop: '22px' }} onSubmit={handleSubmit}>
      <div className="f2">
        <div className="field">
          <label htmlFor="n">Name</label>
          <input id="n" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="e">Email</label>
          <input
            id="e"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="w">Which sounds like you?</label>
        <select
          id="w"
          name="which"
          defaultValue="I have a shop floor that needs a reason to visit"
        >
          <option>I have a shop floor that needs a reason to visit</option>
          <option>I have a launch or an event coming up</option>
          <option>I need a batch of things made and sent back</option>
          <option>I am not sure yet, but I want to talk</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="m">Tell us more</label>
        <textarea id="m" name="message"></textarea>
      </div>
      <div>
        <Button variant="primary" type="submit">
          Send it
        </Button>
        {sent && (
          <p className="form-sent" role="status">
            A compose window is open, addressed to {TO} &mdash; press send and
            you will have a reply the same day.
          </p>
        )}
      </div>
    </form>
  );
}
