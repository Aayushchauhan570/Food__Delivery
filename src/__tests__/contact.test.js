import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("should load contact us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("should load button inside contact Component", () => {
    render(<Contact />);

    const btn = screen.getByText("Submit");

    expect(btn).toBeInTheDocument();
});


test("should load 3 input boxes on contact page component",  () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes[0].id);

    // Assertion
    expect(inputBoxes.length).toBe(4-1);
})