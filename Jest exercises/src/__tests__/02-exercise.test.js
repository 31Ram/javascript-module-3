/**
 * Write the assertions using the .toBe() matcher
 */
describe("02-exercises", () => {
  test("the variable `hello` is the same as 'hello-world'", () => {
    const hello = "hello-world";

    expect(hello).toBe('hello-world');

  });
  test("the variable `hello` is not the same as 'hola-mundo'", () => {
    const hello = "hello-world";

    expect(hello).not.toBe("hola-mundo");
   
  });
  test("user1 is the same as user2", () => {

    const user1 = { name: "ana", phone: 678876567 };
    const user2 = user1;

   expect(user2).toBe(user1);
  });
  test("user1 is not the same as user3", () => {
    

    const user1 = { name: "ana", phone: 678876567 };
    const user3 = { name: "ana", phone: 678876567 };

    expect(user1).not.toBe(user3);
  });
});
