import * as React from 'react';

import Bucket from '@assets/icons/Bucket.svg';
import Calendar from '@assets/icons/Calendar.svg';
import CarShow from '@assets/icons/CarShow.svg';
import ChevronDown from '@assets/icons/ChevronDown.svg';
import ChevronRight from '@assets/icons/ChevronRight.svg';
import Documentation from '@assets/icons/Documentation.svg';
import Facebook from '@assets/icons/Facebook.svg';
import Fuel from '@assets/icons/Fuel.svg';
import Instagram from '@assets/icons/Instagram.svg';
import LightBulb from '@assets/icons/LightBulb.svg';
import CarsifyLogo from '@assets/icons/Logo.svg';
import Moon from '@assets/icons/Moon.svg';
import News from '@assets/icons/News.svg';
import Pinterest from '@assets/icons/Pinterest.svg';
import SeatBelt from '@assets/icons/SeatBelt.svg';
import SteeringWheel from '@assets/icons/SteeringWheel.svg';
import Stop from '@assets/icons/Stop.svg';
import Sun from '@assets/icons/Sun.svg';
import Twitter from '@assets/icons/Twitter.svg';
import IconName from '@utils/iconNames';

interface IconVariantProps {
  flat?: React.FC;
  color?: React.FC;
}

const icons: { [index: string]: IconVariantProps } = {
  [IconName.CarsifyLogo]: { color: CarsifyLogo },
  [IconName.ChevronDown]: { flat: ChevronDown },
  [IconName.ChevronRight]: { flat: ChevronRight },
  [IconName.Moon]: { flat: Moon },
  [IconName.Sun]: { flat: Sun },
  [IconName.Bucket]: { flat: Bucket },
  [IconName.Calendar]: { flat: Calendar },
  [IconName.CarShow]: { flat: CarShow },
  [IconName.Documentation]: { flat: Documentation },
  [IconName.Fuel]: { flat: Fuel },
  [IconName.LightBulb]: { flat: LightBulb },
  [IconName.News]: { flat: News },
  [IconName.SeatBelt]: { flat: SeatBelt },
  [IconName.SteeringWheel]: { flat: SteeringWheel },
  [IconName.Stop]: { flat: Stop },
  [IconName.Facebook]: { color: Facebook },
  [IconName.Instagram]: { color: Instagram },
  [IconName.Pinterest]: { color: Pinterest },
  [IconName.Twitter]: { color: Twitter },
};

type IconVariant = 'flat' | 'color';

interface PickerProps {
  iconName: IconName;
  variant: IconVariant;
  width?: number | string;
  height?: number | string;
  fill?: string;
}

type IconProps = Pick<PickerProps, 'fill' | 'width' | 'height'>;

const Icon: React.FC<PickerProps> = ({
  iconName,
  variant,
  width,
  height,
  fill = '#000000',
}: PickerProps) => {
  const Component: React.FC<IconProps> | undefined = icons[iconName]?.[variant];

  if (!Component) {
    return null;
  }

  const iconProps =
    variant === 'flat'
      ? { width, height, fill }
      : {
          width,
          height,
        };

  return <Component {...iconProps} />;
};

export default Icon;
