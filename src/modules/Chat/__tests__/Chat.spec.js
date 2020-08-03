import React from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import { render, screen } from "../../../test-utils";
import Chat from "..";

import * as actions from "../actions";

jest.mock("../actions");

const mockWithPromise = (mockMethod, result) =>
  mockMethod.mockImplementation(
    () =>
      new Promise((resolve) => {
        resolve(result);
      })
  );

describe("Chat", () => {
  const defaultProps = {
    author: "Jean",
    message: "Some message",
    timestamp: Date.now(),
  };

  it("should render", async () => {
    mockWithPromise(actions.fetchAllMessages, []);

    await act(async () => {
      render(<Chat {...defaultProps} />);
    });
  });

  it("should render messages", async () => {
    mockWithPromise(actions.fetchAllMessages, [
      {
        _id: "hu54uh5243p",
        author: "Jean",
        message: "Hi from Jean",
        timestamp: Date.now(),
      },
      {
        _id: "12312uh312hu3",
        author: "Maria",
        message: "Hi from Maria",
        timestamp: Date.now(),
      },
    ]);

    await act(async () => {
      render(<Chat {...defaultProps} />);
    });

    expect(screen.getByText("Hi from Jean")).toBeInTheDocument();
    expect(screen.getByText("Hi from Maria")).toBeInTheDocument();
  });

  it("should send message", async () => {
    mockWithPromise(actions.fetchAllMessages, []);

    await act(async () => {
      render(<Chat {...defaultProps} />);
    });

    await userEvent.type(screen.getByRole("textbox"), "Local message");

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
      expect(screen.getByText("Local message")).toBeInTheDocument();
      expect(screen.getByText("Sending...")).toBeInTheDocument();
    });

    expect(actions.postMessage).toHaveBeenCalledWith("Jean", "Local message");
  });
});
