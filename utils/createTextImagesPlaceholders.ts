import { ReactElement } from 'react';
import * as React from 'react';

import { PixelsCSS } from '@plaiceholder/css';
import generateImagePlaceholder from '@utils/generateImagePlaceholder';

const createTextImagesPlaceholders = async (parsedHtml: ReactElement | ReactElement[]) => {
  if (Array.isArray(parsedHtml)) {
    const imagesPlaceholders: { src: string; placeholder: PixelsCSS }[] = [];
    const allResults = await parsedHtml.map(async (element) => {
      if (element.type === 'img') {
        const placeholder = await generateImagePlaceholder(element.props.src);
        return {
          src: element.props.src,
          placeholder,
        };
      } else if (element.props?.children) {
        const childrenResult = await React.Children.map(
          element.props.children,
          async (childElement) => {
            if (childElement.type === 'img') {
              const placeholder = await generateImagePlaceholder(childElement.props.src);
              return {
                src: childElement.props.src,
                placeholder,
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
      const placeholder = await generateImagePlaceholder(parsedHtml.props.src);
      return [
        {
          src: parsedHtml.props.src,
          placeholder,
        },
      ];
    } else {
      const childIndex = parsedHtml.props.children.findIndex(
        (childElement) => childElement.type === 'img'
      );
      const placeholder = await generateImagePlaceholder(
        parsedHtml.props.children[childIndex].props.src
      );
      return [
        {
          src: parsedHtml.props.children[childIndex].props.src,
          placeholder,
        },
      ];
    }
  }
};

export default createTextImagesPlaceholders;
