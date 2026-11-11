import { Sum } from "../components/sum"


test("Sum function will calculate the sum of two numbers", ()=> {
    const result = Sum(3,4);

    // Assertion
    expect(result).toBe(7);
})