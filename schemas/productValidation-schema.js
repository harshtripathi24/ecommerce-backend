const createProductSchema = {
  name: { type: "string", optional: false, min: 5, max: 40 },
  price: { type: "string", optional: false, min: 2, max: 6 },
  fakePrice: { type: "string", optional: false, min: 2, max: 6 },
  author: { type: "string", optional: false, min: 5, max: 20 },
  img: { type: "string", optional: false, min: 5, max: 100 },
  options: { type: "string", optional: false, min: 3, max: 50 },
  shortDesc: { type: "string", optional: false, min: 20, max: 500 },
  longDesc: { type: "string", optional: false, min: 20, max: 1000 },
};

module.exports = { createProductSchema };
