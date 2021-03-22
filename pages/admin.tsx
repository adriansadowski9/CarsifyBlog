import config from '../cms/config';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

const CMSLoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  background: rgb(239, 240, 244);
  color: rgb(118, 118, 118);
`;

const Loading = () => (
  <CMSLoadingContainer>
    <p>Ładowanie...</p>
  </CMSLoadingContainer>
);

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((netlifyCMS) => {
      if (netlifyCMS.init) {
        netlifyCMS.init({ config });
      }
    }),
  {
    ssr: false,
    loading: Loading,
  }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
