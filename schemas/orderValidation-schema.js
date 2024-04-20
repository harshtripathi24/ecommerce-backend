const createOrderSchema = {
  orderId: { type: "string", optional: false, min: 5, max: 500 },
  uid: { type: "number", optional: false, min: 1, max: 1000 },
  pid: { type: "number", numeric: true, optional: false, min: 1, max: 1000 },
  price: {
    type: "number",
    numeric: true,
    optional: false,
    min: 10,
    max: 100000,
  },
  quantity: { type: "number", numeric: true, optional: false, min: 1, max: 10 },
  optionChosen: { type: "string", optional: false, min: 2, max: 100 },
  phoneNumber: { type: "number", numeric: true, optional: false, length: 10 },
  address: { type: "string", optional: false, min: 10, max: 1000 },
  pincode: {
    type: "string",
    optional: false,
    numeric: true,
    min: 6,
    max: 100,
  },
  city: { type: "string", optional: false, min: 3, max: 50 },
  state: { type: "string", optional: false, min: 2, max: 500 },
  status: { type: "string", optional: false, min: 2, max: 100 },
};

module.exports = {
  createOrderSchema,
};
