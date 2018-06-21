const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

// postData("http://example.com/answer", { answer: 42 })
//   .then(data => console.log(data)) // JSON from `response.json()` call
//   .catch(error => console.error(error));

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
    return data;
  } catch (error) {
    console.log(error);
  }
};
