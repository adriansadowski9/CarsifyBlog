import * as React from 'react';
import HyvorTalk from 'hyvor-talk-react';

import { Theme } from '@utils/theme';

interface HyvorTalkComments {
  palette: Theme['colors']['hyvorTalk'];
  pageId: string;
}

const HyvorTalkComments: React.FC<HyvorTalkComments> = ({ palette, pageId }) => {
  React.useEffect(() => {
    const appWindow = window as any;
    if (appWindow.hyvor_talk) {
      try {
        appWindow.hyvor_talk.setPalette(palette);
      } catch {
        console.error('Hyvor talk setPallete error');
      }
    }
  }, [palette]);

  React.useEffect(() => {
    const appWindow = window as any;
    if (appWindow.hyvor_talk) {
      appWindow.hyvor_talk.reload();
    }
  }, [pageId]);

  return <HyvorTalk.Embed websiteId={3148} palette={palette} id={pageId} />;
};

export default HyvorTalkComments;
