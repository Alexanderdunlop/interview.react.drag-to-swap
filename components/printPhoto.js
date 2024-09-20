import styled from "styled-components";
import { PrintPhotoDraggable } from "./printPhotoDraggable";
import { PrintPhotoDroppable } from "./printPhotoDroppable";

// NOTE: Also used for calculating the width of the preview photo
export const PrintPhotoContainer = styled.div`
  position: relative;
  width: calc(50% - 10px);
  padding-top: 50%;
`;

/**
 *
 * @param {Object} props
 * @param {string} props.image
 * @returns {JSX.Element}
 */
export default function PrintPhoto({ image }) {
  return (
    <PrintPhotoContainer>
      <PrintPhotoDroppable image={image}>
        <PrintPhotoDraggable image={image} />
      </PrintPhotoDroppable>
    </PrintPhotoContainer>
  );
}
