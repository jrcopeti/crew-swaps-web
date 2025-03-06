import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router";

const customTestRender = (
  ui: React.ReactElement,
  options: { options?: RenderOptions } = {},
) => render(ui, { wrapper: BrowserRouter, ...options });

export * from "@testing-library/react";
export { customTestRender as render };
