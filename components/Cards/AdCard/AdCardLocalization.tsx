import * as React from 'react';

import AdCardLocalizationCityName from '@components/Cards/AdCard/styled/AdCardLocalizationCityName';
import AdCardLocalizationContainer from '@components/Cards/AdCard/styled/AdCardLocalizationContainer';

interface AdCardLocalizationProps {
  city: string;
}
const AdCardLocalization: React.FC<AdCardLocalizationProps> = ({ city }) => {
  return (
    <AdCardLocalizationContainer>
      <AdCardLocalizationCityName>{city}</AdCardLocalizationCityName>
    </AdCardLocalizationContainer>
  );
};

export default AdCardLocalization;
