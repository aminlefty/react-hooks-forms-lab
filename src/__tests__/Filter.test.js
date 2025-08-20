import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";


test("renders search input and responds to typing", () => {
  const mockOnSearchChange = jest.fn();

  render(<Filter search="" onSearchChange={mockOnSearchChange} />);

  const input = screen.getByPlaceholderText(/search items/i);
  expect(input).toBeInTheDocument();

  fireEvent.change(input, { target: { value: "milk" } });
  expect(mockOnSearchChange).toHaveBeenCalledTimes(1);
  expect(mockOnSearchChange).toHaveBeenCalledWith("milk");
});
