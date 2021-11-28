import { useEffect } from "react";

const useOnMount = (callback: () => void) => {
  // eslint-disable-next-line
  useEffect(callback, []);
};

export default useOnMount;
