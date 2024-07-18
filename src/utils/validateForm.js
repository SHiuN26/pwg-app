//表單驗證

const validateForm = (fields) => {
  const validationErrors = {};

  fields.forEach((field) => {
    const { name, value, rules } = field;

    if (rules.required && !value) {
      validationErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required`;
    } else if (rules.minLength && value.length < rules.minLength) {
      validationErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } must be at least ${rules.minLength} characters`;
    } else if (rules.pattern && !rules.pattern.test(value)) {
      validationErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } can only contain letters and numbers`;
    }
  });

  return validationErrors;
};

export default validateForm;
