import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Test Cases", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // afterEach(() => {
  //   console.log("after Each");
  // });

  // afterAll(() => {
  //   console.log("after All");
  // });

  test("Should load the contact component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside contact component", () => {
    render(<ContactUs />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).not.toBe(3);
  });
});
