import React from "react";
import { render } from "@testing-library/react";
import LoadingIndicator, { LOADING_STATE_TEST_ID } from "./LoadingIndicator";

test("If loading shows loading.. indicator", () => {
  const { getByTestId } = render(<LoadingIndicator loading={true} />);
  const loadingIndicator = getByTestId(LOADING_STATE_TEST_ID);
  expect(loadingIndicator).toBeInTheDocument();
});

test("If not loading display children", () => {
  const content = "content";
  const { getByText } = render(
    <LoadingIndicator loading={false}>{content}</LoadingIndicator>
  );
  const getContent = getByText(content);
  expect(getContent).toBeInTheDocument();
});
