import { render, screen } from "@testing-library/react";
import SingleComment from "../components/SingleComment";

describe("when the page start and there's no click in any card the singlecomment component shouldn't render");
it("not render comment if there's no click at the start", () => {
  render(<SingleComment />);
  const listItems = screen.queryAllByRole("listitem");
  expect(listItems).toHaveLength(0);
});
