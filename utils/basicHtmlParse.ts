import { ReactElement } from 'react';
import parse from 'html-react-parser';
import showdown from 'showdown';

const mdConverter = new showdown.Converter({
  ghCompatibleHeaderId: true,
  customizedHeaderId: true,
  simplifiedAutoLink: true,
});

const basicHtmlParse = (htmlText): ReactElement | ReactElement[] =>
  parse(mdConverter.makeHtml(htmlText));

export default basicHtmlParse;
