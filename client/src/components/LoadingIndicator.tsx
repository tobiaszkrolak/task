import React from "react";
import { FunctionComponent } from "react";

export type Props = {
  loading: boolean;
};

const LoadingIndicator: FunctionComponent<Props> = ({ loading, children }) => (
  <>
    {loading ? (
      <span data-testid={LOADING_STATE_TEST_ID}>Loading..</span>
    ) : (
      children
    )}
  </>
);

export const LOADING_STATE_TEST_ID = "loadingStateTestId";

export default LoadingIndicator;
