/** @jsx jsx */
import { FunctionComponent, ReactNode } from "react";
import { jsx, css } from "@emotion/react";

export type Props = {
  header: ReactNode;
  sidebar: ReactNode;
  footer: ReactNode;
};

const Page: FunctionComponent<Props> = ({
  header,
  sidebar,
  footer,
  children,
}) => (
  <section
    css={css`
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 160px auto auto;
      grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
      margin: 6px;
      & > * {
        padding: 10px;
      }
    `}
  >
    <header
      data-testid={TEST_IDS.header}
      css={{
        gridArea: "header",
        backgroundColor: "lightblue",
      }}
    >
      {header}
    </header>
    <aside
      data-testid={TEST_IDS.sidebar}
      css={{
        gridArea: "sidebar",
        backgroundColor: "lavender",
      }}
    >
      {sidebar}
    </aside>
    <main
      data-testid={TEST_IDS.content}
      css={{
        gridArea: "content",
        gridColumns: "span 2",
      }}
    >
      {children}
    </main>
    <footer
      data-testid={TEST_IDS.footer}
      css={{
        gridArea: "footer",
        backgroundColor: "lightblue",
        textAlign: "center",
      }}
    >
      {footer}
    </footer>
  </section>
);

export const TEST_IDS = {
  header: "header",
  footer: "footer",
  sidebar: "sidebar",
  content: "content",
};

export default Page;
