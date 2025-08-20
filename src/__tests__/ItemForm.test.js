import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm";

test("renders item form and calls on submit", () => {
  const mockOnItemFormSubmit = jest.fn();

  render(<ItemForm onItemFormSubmit={mockOnItemFormSubmit} />);

  const input = screen.getByPlaceholderText(/enter item name/i);
  const button = screen.getByText(/add item/i);

  fireEvent.change(input, { target: { value: "Bread" } });
  fireEvent.click(button);

  expect(mockOnItemFormSubmit).toHaveBeenCalledTimes(1);
  expect(mockOnItemFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      name: "Bread",
      category: "Produce",
    })
  );
});
