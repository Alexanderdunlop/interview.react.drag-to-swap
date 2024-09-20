import styled from "styled-components";
import Actions from "./actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PrintPhoto from "./printPhoto";
import PrintPhotoPreview from "./printPhotoPreview";
import { Fragment } from "react";

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
  color: #585858;
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

/**
 *
 * @param {Object} props
 * @param {Array<{
 *  title: string,
 *  images: Array<string>
 * }>} props.data
 * @returns {JSX.Element}
 */
export default function PrintPage({ data }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {Object.values(data).map((entry, i) => {
        return (
          <Fragment key={i}>
            <Header>
              <Title>{entry.title}</Title>
              <Actions />
            </Header>
            <PageLayout>
              {entry.images.map((image) => {
                return <PrintPhoto key={image} image={image} />;
              })}
            </PageLayout>
          </Fragment>
        );
      })}
      <PrintPhotoPreview />
    </DndProvider>
  );
}
