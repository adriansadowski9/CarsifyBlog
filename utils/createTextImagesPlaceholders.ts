import { ReactElement } from 'react';
import { getPixelsCSS, PixelsCSS } from '@plaiceholder/css';
import { getImage } from '@plaiceholder/next';
import * as React from 'react';

const createTextImagesPlaceholders = async (parsedHtml: ReactElement | ReactElement[]) => {
  if (Array.isArray(parsedHtml)) {
    const imagesPlaceholders: { src: string; placeholder: PixelsCSS }[] = [];
    const allResults = await parsedHtml.map(async (element) => {
      if (element.type === 'img') {
        const imagePlaceholder = await getImage(element.props.src);
        const imageCssPlaceholder = await getPixelsCSS(imagePlaceholder);
        return {
          src: element.props.src,
          placeholder: imageCssPlaceholder,
        };
      } else if (element.props?.children) {
        const childrenResult = await React.Children.map(
          element.props.children,
          async (childElement) => {
            if (childElement.type === 'img') {
              const imagePlaceholder = await getImage(childElement.props.src);
              const imageCssPlaceholder = await getPixelsCSS(imagePlaceholder);
              return {
                src: childElement.props.src,
                placeholder: imageCssPlaceholder,
              };
            }
          }
        );
        await Promise.all(childrenResult).then((value) => {
          const filtered = value.filter((item) => item !== undefined);
          Array.prototype.push.apply(imagesPlaceholders, filtered);
        });
      }
    });
    await Promise.all(allResults).then((value) => {
      const filtered = value.filter((item) => item !== undefined);
      Array.prototype.push.apply(imagesPlaceholders, filtered);
    });
    return imagesPlaceholders;
  } else if (
    parsedHtml.type === 'img' ||
    parsedHtml.props.children.find((childElement) => childElement.type === 'img')
  ) {
    if (parsedHtml.type === 'img') {
      const imagePlaceholder = await getImage(parsedHtml.props.src);
      const imageCssPlaceholder = await getPixelsCSS(imagePlaceholder);
      return [
        {
          src: parsedHtml.props.src,
          placeholder: imageCssPlaceholder,
        },
      ];
    } else {
      const childIndex = parsedHtml.props.children.findIndex(
        (childElement) => childElement.type === 'img'
      );
      const imagePlaceholder = await getImage(parsedHtml.props.children[childIndex].props.src);
      const imageCssPlaceholder = await getPixelsCSS(imagePlaceholder);
      return [
        {
          src: parsedHtml.props.children[childIndex].props.src,
          placeholder: imageCssPlaceholder,
        },
      ];
    }
  }
};

export default createTextImagesPlaceholders;
