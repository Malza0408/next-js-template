import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /테스트가 잘 됩니까?/i,
    });

    expect(container).toMatchSnapshot();
    expect(heading).toBeInTheDocument();
  });
});
