import Image from "next/image";
import { usePreview } from "react-dnd-preview";
import styled from "styled-components";
import { PageContainer } from "../pages/testpage";
import { PrintPhotoContainer } from "./printPhoto";

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledImage = styled.div`
  position: relative;
  border: 0.3rem solid #fff;
  width: 10rem;
  height: 10rem;
  border-radius: 100%;
  overflow: hidden;
`;

/**
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default function PrintPhotoPreview() {
  const preview = usePreview();

  if (!preview.display) {
    return null;
  }

  const { item, style } = preview;

  return (
    <PageContainer style={style}>
      <PrintPhotoContainer>
        <ImageContainer>
          <StyledImage>
            <Image
              src={item.image}
              alt=""
              objectFit="cover"
              layout="fill"
              // NOTE: Don't need cache & costs associated with it
              unoptimized
            />
          </StyledImage>
        </ImageContainer>
      </PrintPhotoContainer>
    </PageContainer>
  );
}
