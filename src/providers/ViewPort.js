import React from "react";

const viewportContext = React.createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

/* Get current largest valid breakpoint */
export const useBreakpoint = () => {
  const { width } = React.useContext(viewportContext);
  if (width >= 1200) {
    return ["xl", "lg", "md", "sm", "xs"];
  }
  if (width >= 992) {
    return ["lg", "md", "sm", "xs"];
  }
  if (width >= 768) {
    return ["md", "sm", "xs"];
  }
  if (width >= 576) {
    return ["sm", "xs"];
  }
  return ["xs"];
};
