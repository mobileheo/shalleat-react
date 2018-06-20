export const getAllFormData = currentTarget => {
  const formData = new FormData(currentTarget);
  const formFields = Array.from(formData.keys());

  let inputObj = {};
  formFields.forEach(f => {
    const field = formData.get(f);
    inputObj[f] = field;
  });
  return inputObj;
};
