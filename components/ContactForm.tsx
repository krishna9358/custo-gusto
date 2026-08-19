'use client';

import React from 'react';
import { Button } from './Button';

export function ContactForm() {
  return (
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
        <Button variant="primary" type="submit">
          Send it
        </Button>
      </div>
    </form>
  );
}
