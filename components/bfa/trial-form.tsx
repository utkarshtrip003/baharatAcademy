"use client";

import { FormEvent, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "919871141009";

function openWhatsapp(message: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function TrialForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nameRegex = useMemo(() => /^[A-Za-z ]+$/, []);
  const phoneRegex = useMemo(() => /^[0-9]{10,15}$/, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const childName = String(formData.get("childName") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const parentName = String(formData.get("parentName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (!childName) nextErrors.childName = "Child's name is required.";
    else if (!nameRegex.test(childName))
      nextErrors.childName = "Use alphabets only (A–Z) and spaces.";

    if (!parentName) nextErrors.parentName = "Parent's name is required.";
    else if (!nameRegex.test(parentName))
      nextErrors.parentName = "Use alphabets only (A–Z) and spaces.";

    const ageNum = Number(age);
    if (!age) nextErrors.age = "Age is required.";
    else if (!Number.isFinite(ageNum) || ageNum < 4 || ageNum > 16)
      nextErrors.age = "Age must be between 4 and 16.";

    if (!phone) nextErrors.phone = "Contact number is required.";
    else if (!phoneRegex.test(phone))
      nextErrors.phone = "Use digits only (10–15 digits).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = [
      "Hi Bharat Football Academy, I want to book a free trial.",
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
            inputMode="text"
            pattern="[A-Za-z ]+"
            onChange={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                /[^A-Za-z ]/g,
                ""
              );
              if (errors.childName) setErrors((p) => ({ ...p, childName: "" }));
            }}
            className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
          />
          {errors.childName ? (
            <p className="text-sm font-medium text-red-600">{errors.childName}</p>
          ) : null}
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
            min={4}
            max={16}
            placeholder="8"
            onChange={() => {
              if (errors.age) setErrors((p) => ({ ...p, age: "" }));
            }}
            className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
          />
          {errors.age ? (
            <p className="text-sm font-medium text-red-600">{errors.age}</p>
          ) : null}
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
          inputMode="text"
          pattern="[A-Za-z ]+"
          onChange={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^A-Za-z ]/g,
              ""
            );
            if (errors.parentName)
              setErrors((p) => ({ ...p, parentName: "" }));
          }}
          className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
        />
        {errors.parentName ? (
          <p className="text-sm font-medium text-red-600">{errors.parentName}</p>
        ) : null}
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
          inputMode="numeric"
          pattern="[0-9]{10,15}"
          onChange={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
            if (errors.phone) setErrors((p) => ({ ...p, phone: "" }));
          }}
          className="input-focus w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-all"
        />
        {errors.phone ? (
          <p className="text-sm font-medium text-red-600">{errors.phone}</p>
        ) : null}
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
