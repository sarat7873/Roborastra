import { render, screen } from "@testing-library/react";
import Counter from "../components/Counter";

test("counter renders", () => {
  render(<Counter start={0} />);
  expect(screen.getByText(/Count/)).toBeInTheDocument();
});
