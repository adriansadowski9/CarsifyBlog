import MFindWidgetCardContainer from './styled/MFindWidgetCardContainer';

import * as React from 'react';

import appendScript from '@utils/appendScript';

const MFindWidgetCard = () => {
  React.useEffect(() => {
    const mFindWindow = window as any;
    if (!mFindWindow.mFindWidget) {
      appendScript({
        isAsync: false,
        isDefer: true,
        src: 'https://cdn.mfind.pl/scripts/autka-widget.js',
      });
    } else {
      mFindWindow.mFindWidget.findAndInit();
    }
  }, []);

  return (
    <MFindWidgetCardContainer>
      <div
        className="mfind-widget"
        data-mpc="10356"
        data-utm-source="partnerski"
        data-utm-medium="10356"
        data-brand="punkta"
        data-utm-content="carsify.pl"
      ></div>
    </MFindWidgetCardContainer>
  );
};

export default MFindWidgetCard;
