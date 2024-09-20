import { create } from "zustand";

/**
 *
 * @param {Array<{
 *  title: string,
 *  images: Array<string>
 * }>} prints
 * @param {string} draggedImage
 * @param {string} droppedLocationImage
 * @returns {Array<{
 *  title: string,
 *  images: Array<string>
 * }>}
 */
const replaceImages = (prints, draggedImage, droppedLocationImage) => {
  const newPrints = prints.map((print) => {
    const newImages = print.images.map((image) => {
      if (image === draggedImage) {
        return droppedLocationImage;
      } else if (image === droppedLocationImage) {
        return draggedImage;
      }

      return image;
    });

    return {
      ...print,
      images: newImages,
    };
  });

  return newPrints;
};

export const usePrintStore = create((set) => ({
  prints: [
    {
      title: "Front Print",
      images: [
        "https://videodelivery.net/775b1b7196b2c126b8dc343416211fdb/thumbnails/thumbnail.jpg?height=1080",
      ],
    },
    {
      title: "Page 2",
      images: [
        "https://videodelivery.net/9ad2bb839e4e3cc1074e5d73b0a0379b/thumbnails/thumbnail.jpg?height=1080",
        "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/bde5b129-52ba-4f43-b3f4-97591952ea00/large",
      ],
    },
    {
      title: "Page 3",
      images: [
        "https://videodelivery.net/91097538e177847ebeb934a492e146e9/thumbnails/thumbnail.jpg?height=1080",
        "https://imagedelivery.net/66_qOEcY2UwnECf5ON9PhQ/b73c2865-7a02-408b-654d-89ce2512ae00/large",
      ],
    },
  ],
  draggedImage: null,
  droppedLocationImage: null,
  animateItems: (draggedImage, droppedLocationImage) => {
    set({
      draggedImage,
      droppedLocationImage,
    });

    setTimeout(() => {
      set((state) => ({
        prints: replaceImages(state.prints, draggedImage, droppedLocationImage),
        draggedImage: null,
        droppedLocationImage: null,
      }));
    }, 350);
  },
}));
