export default async function fetchBusinessAPI(url, formData, file) {
  try {
    // create new FormData()
    // append content and file

    //fetch api  - must include method and the formdata
    const res = await fetch(url, {
      method: "POST",
      headers: {
        //add header type here
      },
      //include body and its type
      cache: "no-store",
    });

    const data = await res.json();

    //check for errors - return message in case there are errors (file size, type etc?)

    // return the data if no errors
    console.log(data);
    return data;
  } catch (e) {
    return e;
  }
}
