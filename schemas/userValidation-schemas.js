const createUserSchema = {
  email: { type: "email", optional: false, min: 3, max: 320 },
  password: {
    type: "string",
    custom: (v, errors) => {
      if (!/[0-9]/.test(v)) errors.push({ type: "atLeastOneDigit" });
      if (!/[a-zA-Z]/.test(v)) errors.push({ type: "atLeastOneLetter" });
      return v;
    },
    min: 8,
    max: 400,
    messages: {
      stringPattern: "password value must contain a digit",
      stringMin: "Your password value is too short.",
      stringMax: "Your password value is too large.",
    },
  },
};

const userAddressUpdateSchema = {
  phoneNumber: {
    type: "string",
    optional: false,
    numeric: true,
    length: 10,
  },
  address: { type: "string", optional: false, min: "10", max: "400" },
  city: { type: "string", optional: false, min: "2", max: "50" },
  state: { type: "string", optional: false, min: "2", max: "50" },
  pincode: {
    type: "string",
    optional: false,
    numeric: true,
    min: 6,
    max: 100,
  },
};

module.exports = { createUserSchema, userAddressUpdateSchema };
