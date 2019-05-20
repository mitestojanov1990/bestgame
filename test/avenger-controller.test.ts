import request from "supertest";
import app from "../src/app";

describe("GET /avengers", () => {
  it("should return 200 OK", () => {
    return request(app).get("/avengers")
      .expect(200);
  });
});

// describe("GET /avengers/:id", () => {
//   it("should return 200 OK", () => {
//     return request(app).get("/avengers/1")
//       .expect(200);
//   });
// });