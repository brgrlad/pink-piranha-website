import { NextResponse } from "next/server";

export default async function fetchStaffAPI(url, formData, file) {
  const form = new FormData();

  form.append("fullName", formData.fullName);
  form.append("emailAddress", formData.emailAddress);
  form.append("phoneNumber", formData.phoneNumber);
  form.append("file", file);
  form.append("message", formData.message);

  try {
    const res = await fetch(url, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      throw new Error(
        `Server responded with ${res.status}: ${res.statusText} in fetchStaffAPI.` ||
          "Unknown error occurred in fetchStaffAPI"
      );
    }

    return res;
  } catch (e) {
    console.error("Error in fetchStaffAPI:", e);
    throw new Error(e.message || "Unknown error occurred in fetchStaffAPI");
  }
}
