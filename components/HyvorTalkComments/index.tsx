import * as React from 'react';
import HyvorTalk from 'hyvor-talk-react';

import { Theme } from '@utils/theme';

interface HyvorTalkComments {
  palette: Theme['colors']['hyvorTalk'];
}

const HyvorTalkComments: React.FC<HyvorTalkComments> = ({ palette }) => {
  React.useEffect(() => {
    const appWindow = window as any;
    if (appWindow.hyvor_talk) {
      appWindow.hyvor_talk.setPalette(palette);
    }
  }, [palette]);

  return <HyvorTalk.Embed websiteId={3148} palette={palette} />;
};

export default HyvorTalkComments;
