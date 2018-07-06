export const delay = duration => new Promise(res => setTimeout(res, duration));
export const repeat = async (cb, duration) => {
  try {
    cb();
    const timerId = await setInterval(cb, duration * 1000);
    return timerId;
  } catch (error) {
    console.log(error);
  }
};
