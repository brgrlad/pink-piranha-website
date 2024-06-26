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

    const data = await res.json();

    if (!data.ok) {
      throw new Error(data.message || "unknown error ocurred");
    }

    return data;
  } catch (e) {
    console.log("Error in fetchBusinessAPI:", e);
    throw new Error(e.message || "Unknown error occurred in fetchBusinessAPI");
  }
}
