import React from "react";
import { render, screen } from "../../../test-utils";
import userEvent from "@testing-library/user-event";
import MessageInput from "..";

describe("MessageInput", () => {
  it("should render", () => {
    render(<MessageInput />);
  });

  it("should be disbaled if empty", () => {
    render(<MessageInput />);
    expect(screen.getByRole("button")).toHaveAttribute("disabled", "");
  });

  it("should be enabled if contains text", async () => {
    render(<MessageInput />);
    await userEvent.type(screen.getByRole("textbox"), "Some message");
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
  });

  it("should have if sending indicator", async () => {
    render(<MessageInput isSending={true} />);
    expect(screen.getByRole("button")).toHaveTextContent("...");
  });

  it("should not throw onSendhave if disabled", async () => {
    const onSend = jest.fn();
    render(<MessageInput onSend={onSend} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onSend).not.toHaveBeenCalled();
  });

  it("should throw onSend with text content", async () => {
    const onSend = jest.fn();
    render(<MessageInput onSend={onSend} />);
    await userEvent.type(screen.getByRole("textbox"), "a beautiful message");
    await userEvent.click(screen.getByRole("button"));
    expect(onSend).toHaveBeenCalledWith("a beautiful message");
  });
});
