import Head from "next/head";
import PrintPage from "../components/printPage";
import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { usePrintStore } from "../lib/stores";

// NOTE: Also used for calculating the width of the preview photo
export const PageContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: auto;
`;

const PageHeader = styled.div`
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 42px;
  padding-bottom: 24px;

  h1 {
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.36px;
    color: #585858;
    margin-bottom: 8px;
  }

  p {
    color: #797979;
    margin: 0;
  }
`;

export default function Testpage() {
  const prints = usePrintStore(useShallow((state) => state.prints));

  return (
    <div>
      <Head>
        <title>Test Page | Popsa.com</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <PageHeader>
          <h1>Trip to the Beach</h1>
          <p>
            Hardback Photobook last edited on Thursday 13 April 2022 at 16:28
          </p>
        </PageHeader>
        <PrintPage data={prints} />
      </PageContainer>
    </div>
  );
}
