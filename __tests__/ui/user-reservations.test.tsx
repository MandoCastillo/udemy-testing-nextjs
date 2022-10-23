import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

describe("User reservations page", () => {
  test("Show 'Purchase more tickets' button if the user has reservations", async () => {
    render(<UserReservations userId={1} />);

    const morePurchaseButton = await screen.findByRole("button", {
      name: /Purchase more tickets/i,
    });
    expect(morePurchaseButton).toBeInTheDocument();
  });
  test("Show 'Purchase tickets' button if the user does not have reservations", async () => {
    render(<UserReservations userId={0} />);

    const purchaseButton = await screen.findByRole("button", {
      name: /Purchase tickets/i,
    });
    expect(purchaseButton).toBeInTheDocument();

    const ticketsHeading = screen.queryByRole("heading", {
      name: /your tickets/i,
    });
    expect(ticketsHeading).not.toBeInTheDocument();
  });
});
