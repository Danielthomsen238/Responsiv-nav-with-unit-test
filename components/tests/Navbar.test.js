import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import "@testing-library/jest-dom/extend-expect";
import waitForElement from "@testing-library/dom";

describe("Navbar", () => {
  it("should render correctly", () => {
    render(<Navbar />);

    expect(screen.getByTestId("Navbar")).toBeTruthy();
  });
  it("Redirect to Home page", () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId("Home"));
    expect(screen.getByText("Home")).toBeTruthy();
  });
  it("Redirect to About page", () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId("About"));
    expect(screen.getByText("About")).toBeTruthy();
  });
  it("Redirect to Contact page", () => {
    const { getByTestId } = render(<Navbar />);
    fireEvent.click(getByTestId("Contact"));
    expect(screen.getByText("Contact")).toBeTruthy();
  });
});
