import React from "react";
import { render } from "@testing-library/react";
import GenericList, { Props } from "./GenericList";
import { LOADING_STATE_TEST_ID } from "./LoadingIndicator";
import { ApolloError } from "@apollo/client";

type Item = { name: string };

const defaultProps = {
  loading: false,
  error: undefined,
  data: [{ name: "First element name" }],
  itemRenderer: ({ name }: Item) => name,
};

const GenericListFactory = (props: Partial<Props<Item>> = {}) => (
  <GenericList {...defaultProps} {...props} />
);

test("Renders items", () => {
  const { getByText } = render(<GenericListFactory />);

  expect(getByText(defaultProps.data[0].name)).toBeInTheDocument();
});

test("Loading shows up on loading state", () => {
  const { getByTestId } = render(<GenericListFactory loading={true} />);

  expect(getByTestId(LOADING_STATE_TEST_ID)).toBeInTheDocument();
});

test("Error shows up on error state", () => {
  const message = "Error!";

  const { getByText } = render(
    <GenericListFactory
      error={
        {
          message,
        } as ApolloError
      }
    />
  );

  expect(getByText(message)).toBeInTheDocument();
});
