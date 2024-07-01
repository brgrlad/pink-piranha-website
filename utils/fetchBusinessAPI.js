import { NextResponse } from "next/server";

export default async function fetchBusinessAPI(url, formData) {
  if (!url || typeof url !== "string") {
    throw new Error("URL of type 'string' must be provided");
  }

  if (!formData || typeof formData !== "object") {
    throw new Error("A valid 'object' containing the form data is required.");
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(
        `Server responded with ${res.status}: ${res.statusText} in fetchBusinessAPI.` ||
          "unknown error ocurred in fetchBusinessAPI"
      );
    }

    // not sure I need to convert to JSON here before returning it?
    // const data = await res.json();

    return NextResponse.json(
      { ok: true, message: "E-mail sent!" },
      { status: 200 }
    );
  } catch (e) {
    console.log("Error in fetchBusinessAPI:", e);
    return NextResponse.json(
      {
        ok: false,
        message: e.message || "Unknown error in business-form API handler",
      },
      { status: 500 }
    );

    // throw new Error(e.message || "Unknown error occurred in fetchBusinessAPI");
  }
}
