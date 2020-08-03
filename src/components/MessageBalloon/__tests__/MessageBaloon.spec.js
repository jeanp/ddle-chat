import React from "react";
import { render, screen } from "../../../test-utils";
import MessageBalloon from "..";

describe("MessageBaloon", () => {
  const defaultProps = {
    author: "Jean",
    message: "Some message",
    timestamp: Date.now(),
  };

  it("should render", () => {
    render(<MessageBalloon {...defaultProps} />);
  });

  it("should have sending indicator if local message", () => {
    const mockProps = {
      ...defaultProps,
      isLocal: true,
    };

    render(<MessageBalloon {...mockProps} />);
    expect(screen.getByText("Sending...")).toBeInTheDocument();
  });

  it("should not have author if own message", () => {
    const mockProps = {
      ...defaultProps,
      isOwnMessage: true,
    };

    render(<MessageBalloon {...mockProps} />);
    expect(screen.queryByText(defaultProps.author)).toBeNull();
  });
});
