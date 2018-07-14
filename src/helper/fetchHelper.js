const headers = new Headers({
  Accept: "application/json",
  // "Access-Control-Allow-Headers": "Content-Type",
  // "X-Frame-Options": "ALLOW-FROM https://shalleatapi.herokuapp.com/",
  // "Access-Control-Allow-Origin": "https://shalleat.com",
  "Content-Type": "application/json; charset=UTF-8"
});
export const getData = async url => {
  try {
    const res = await fetch(url, {
      credentials: "include",
      headers
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (url, data) => {
  console.log("PostData");
  try {
    let res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers
    });
    // document.cookie = `ShallEat=${"fdsfsdsdf"}; Max-Age=3600; HttpOnly; Secure`;
    // console.log(res.headers.get("set-cookie"));
    // console.log("res!!!!!!!!!!!!!!");
    // console.log(res.cookie);
    // res.url = "http://hello.com";
    // await res.header.set({ url: "https://shalleat.com" });
    // console.log(res.);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async url => {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
