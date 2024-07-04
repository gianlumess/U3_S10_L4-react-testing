import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("render of commentArea", () => {
  it("renders heading of commentArea correctly", () => {
    render(<CommentArea />);
    const headingCommentArea = screen.getByText(/commenti/i);
    expect(headingCommentArea).toBeInTheDocument();
  });
});
