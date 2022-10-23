import { render, screen } from "@testing-library/react";

import BandPage from "@/pages/bands/[bandId]";

test("band page shows a custom error if there is an error", () => {
  render(<BandPage band={null} error="That band does not exist" />);

  const errorHeading = screen.getByRole("heading", {
    name: /That band does not exist/i,
    exact: false,
  });
  expect(errorHeading).toBeInTheDocument()

  // .. more test here
});
