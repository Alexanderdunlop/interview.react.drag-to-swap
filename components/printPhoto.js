import Image from "next/image";
import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import styled from "styled-components";

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
  const [{ isDragging }, dragRef, preview] = useDrag(() => ({
    type: "PHOTO",
    item: { image },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <>
      <PrintPhotoContainer
        ref={dragRef}
        data-testid="photo-container"
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <Image
          src={image}
          alt=""
          objectFit="cover"
          layout="fill"
          // NOTE: Don't need cache & costs associated with it
          unoptimized
        />
      </PrintPhotoContainer>
    </>
  );
}
