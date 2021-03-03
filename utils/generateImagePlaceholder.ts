import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';
import { getImage } from '@plaiceholder/next';

const generateImagePlaceholder = async (imagePath: string): Promise<PixelsCSS> => {
  const image = await getImage(imagePath);
  const imageCssPlaceholder = await getPixelsCSS(image);
  return imageCssPlaceholder;
};

export default generateImagePlaceholder;
