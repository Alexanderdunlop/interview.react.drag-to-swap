import Image from "next/image";
import { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { motion } from "framer-motion";
import { usePrintStore } from "../lib/stores";
import { useShallow } from "zustand/shallow";
import styled from "styled-components";

const DraggableContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const DropAnimationContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border-radius: 100%;
  width: 0;
  height: 0;
`;

const FadeAnimationContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
`;

/**
 *
 * @param {Object} props
 * @param {string} props.image
 * @returns {JSX.Element}
 */
export function PrintPhotoDraggable({ image }) {
  const animateItems = usePrintStore(useShallow((state) => state.animateItems));
  const droppedLocationImage = usePrintStore(
    useShallow((state) => state.droppedLocationImage)
  );
  const draggedImage = usePrintStore(useShallow((state) => state.draggedImage));

  const [{ isDragging }, dragRef, preview] = useDrag(() => ({
    type: "PHOTO",
    item: { image },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (!dropResult) return;
      if (item.image === dropResult.name) return;

      animateItems(item.image, dropResult.name);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <DraggableContainer
      ref={dragRef}
      data-testid="photo-container"
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <Image src={image} alt="" objectFit="cover" layout="fill" unoptimized />
      {droppedLocationImage === image && (
        <DropAnimationContainer
          animate={{
            width: "100%",
            height: "100%",
            borderRadius: 0,
          }}
        >
          <Image
            src={draggedImage}
            alt=""
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </DropAnimationContainer>
      )}
      {draggedImage === image && (
        <FadeAnimationContainer
          animate={{
            opacity: 1,
          }}
        >
          <Image
            src={droppedLocationImage}
            alt=""
            objectFit="cover"
            layout="fill"
            unoptimized
          />
        </FadeAnimationContainer>
      )}
    </DraggableContainer>
  );
}
