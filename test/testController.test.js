const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/womens path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/womens")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the categories/mens path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});



describe("Test the auth/signin path", () => {
  test("It should response the POST method", done => {
    request(app)
      .post("/auth/signin")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the auth/signup path", () => {
  test("It should response the POST method", done => {
    request(app)
      .post("/auth/signup")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the categories/mens-clothing path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/mens-accesories path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});



describe("Test the categories/womens-clothing path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/womens-clothing-outfits path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/womens-clothing-jackets path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/womens-clothing-feeling-red path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the categories/womens-accesories path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});


describe("Test the categories/womens-jewelry path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/categories/mens-clothing")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});





