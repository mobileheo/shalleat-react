const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const postData = async (url, data) => {
  try {
    console.log(url);
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
