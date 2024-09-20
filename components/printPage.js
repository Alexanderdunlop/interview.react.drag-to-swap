import styled from "styled-components";
import Actions from "./actions";
import Image from "next/image";

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

const PrintWrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  line-height: 0.8rem;
  text-transform: uppercase;
`;

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #6634c5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

const PrintPhoto = styled.div`
  width: calc(50% - 10px);
  position: relative;
  padding-top: 50%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function PrintPage({ data }) {
  return (
    <>
      <Wrapper>
        {Object.values(data).map((entry, i) => {
          return (
            <PrintWrapper key={i}>
              <Header>
                <Title>{entry.title}</Title>
                <Actions />
              </Header>
              <PageLayout>
                {entry.images.map((image) => {
                  return (
                    <PrintPhoto key={image}>
                      <StyledImage
                        src={image}
                        alt=""
                        layout="fill"
                        // NOTE: Don't need cache & costs associated with it
                        unoptimized
                      />
                    </PrintPhoto>
                  );
                })}
              </PageLayout>
            </PrintWrapper>
          );
        })}
      </Wrapper>
    </>
  );
}
