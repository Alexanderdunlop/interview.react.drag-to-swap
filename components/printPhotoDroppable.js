import { useDrop } from "react-dnd";

/**
 *
 * @param {Object} props
 * @param {string} props.image
 * @param {JSX.Element} props.children
 * @returns {JSX.Element}
 */
export function PrintPhotoDroppable({ image, children }) {
  const [{}, dropRef] = useDrop(
    () => ({
      accept: "PHOTO",
      canDrop: (item) => {
        return item.image !== image;
      },
      drop: () => ({ name: image }),
    }),
    [image]
  );

  return (
    <div ref={dropRef} role="DROP" data-testid={"drop" + image}>
      {children}
    </div>
  );
}
