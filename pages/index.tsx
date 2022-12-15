import { css } from "@emotion/css";

export default function Home() {
  return (
    <main>
      <h1
        className={css`
          color: blue;
        `}
      >
        테스트가 잘 됩니까?
      </h1>
    </main>
  );
}
