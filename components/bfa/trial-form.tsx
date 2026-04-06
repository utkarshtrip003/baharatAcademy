"use client";

import { FormEvent } from "react";

const WHATSAPP_NUMBER = "919871141009";

function openWhatsapp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function TrialForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const childName = String(formData.get("childName") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const parentName = String(formData.get("parentName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    const message = [
      "Hi Bharat Football Academy, I'd like to book a FREE trial.",
      "",
      childName ? `Child: ${childName}` : null,
      age ? `Age: ${age}` : null,
      parentName ? `Parent: ${parentName}` : null,
      phone ? `Phone: ${phone}` : null,
    ]
      .filter((line): line is string => Boolean(line))
      .join("\n");

    openWhatsapp(message);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="trial-child-name"
            className="ml-1 text-sm font-bold tracking-wider text-gray-500 uppercase"
          >
            Child&apos;s Name
          </label>
          <input
            id="trial-child-name"
            name="childName"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="trial-age"
            className="ml-1 text-sm font-bold tracking-wider text-gray-500 uppercase"
          >
            Age
          </label>
          <input
            id="trial-age"
            name="age"
            type="number"
            min={1}
            max={18}
            placeholder="8"
            className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="trial-parent-name"
          className="ml-1 text-sm font-bold tracking-wider text-gray-500 uppercase"
        >
          Parent&apos;s Name
        </label>
        <input
          id="trial-parent-name"
          name="parentName"
          type="text"
          placeholder="Parent Name"
          autoComplete="name"
          className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="trial-phone"
          className="ml-1 text-sm font-bold tracking-wider text-gray-500 uppercase"
        >
          Contact Number
        </label>
        <input
          id="trial-phone"
          name="phone"
          type="tel"
          placeholder="+91 98711 41009"
          autoComplete="tel"
          className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
        />
      </div>
      <button
        type="submit"
        id="registration-submit-btn"
        className="w-full rounded-2xl bg-[#1C7C54] py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#166041]"
      >
        Confirm Free Registration
      </button>
      <p className="text-center text-sm text-gray-400">
        Only 5 slots remaining this month.
      </p>
    </form>
  );
}
