import React from "react";
import { FunctionComponent } from "react";

export type Props = {
  loading: boolean;
};

const LoadingIndicator: FunctionComponent<Props> = ({ loading, children }) => (
  <>{loading ? "Loading.." : children}</>
);

export default LoadingIndicator;
