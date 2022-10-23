import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData";
import BandPage from "@/pages/bands/[bandId]";

test("band page displays correct band information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading", {
    name: /The Wandering Bunnies/i,
  });
  expect(heading).toBeInTheDocument();

  // more test
});
