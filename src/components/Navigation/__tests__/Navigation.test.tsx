import { screen } from "@testing-library/react";
import Navigation from "../Navigation";
import "@testing-library/jest-dom";
import { renderWithRouter } from "@/tests/test-utils";

describe("Navigation", () => {
  test("should display two links", () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText("Bus Lines")).toBeInTheDocument();
    expect(screen.getByText("Stops")).toBeInTheDocument();
  });

  test("should mark first link as active", () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByText("Bus Lines")).toHaveClass("active");
    expect(screen.queryByText("Stops")).not.toHaveClass("active");
  });

  test("should mark second link as active", () => {
    renderWithRouter(<Navigation />, "/stops");
    expect(screen.getByText("Stops")).toHaveClass("active");
    expect(screen.queryByText("Bus Lines")).not.toHaveClass("active");
  });
});
