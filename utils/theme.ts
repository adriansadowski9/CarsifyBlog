const colors = {
  white: '#FFFFFF',
  black: '#0D0D0D',
  red: '#C20708',
  silver: '#CCD4DA',
  darkSilver: '#A4B3BF',
  gray: '#A6A6A6',
  darkGray: '#262626',
};

const fontSizes = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '48px',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const spaces = {
  xxxs: '5px',
  xxs: '10px',
  xs: '15px',
  s: '20px',
  m: '25px',
  l: '30px',
  xl: '40px',
  xxl: '50px',
  xxxl: '60px',
};

const breakpoints = ['1024px', '1280px'];

export interface Theme {
  fontSizes: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  fontWeights: {
    regular: number;
    medium: number;
    bold: number;
  };
  spaces: {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
    xxxl: string;
  };
  breakpoints: string[];
  colors: {
    bg: string;
    text: string;
    sectionText: string;
    border: string;
    categoryName: string;
    iconCircleBg: string;
    icon: string;
    tipText: string;
    tipCategoryName: string;
    tipIconCircleBg: string;
    tipIcon: string;
    menuActiveItem: string;
    hamburger: string;
    menuArrow: string;
    iconInfoBg: string;
    iconInfoIcon: string;
    iconInfoText: string;
    subtitleText: string;
    bulletActive: string;
    bullet: string;
    tipCardBg: string;
    informationText: string;
    informationImageOverlay: string;
    informationIndicator: string;
    adCarBoxBg: string;
    adCarBoxText: string;
    adLocalization: string;
    adPrice: string;
    contentsList: string;
    shareSection: string;
    moreSection: string;
    categoryBoxActiveBg: string;
    categoryBoxActiveText: string;
    categoryBoxBg: string;
    categoryBoxText: string;
    inputBorder: string;
    submitButton: string;
    socialButton: string;
    socialBoxBg: string;
    selectHover: string;
  };
}

export const lightTheme: Theme = {
  fontSizes,
  fontWeights,
  spaces,
  breakpoints,
  colors: {
    bg: colors.white,
    text: colors.black,
    sectionText: colors.gray,
    border: colors.silver,
    categoryName: colors.gray,
    iconCircleBg: colors.silver,
    icon: colors.black,
    tipText: colors.black,
    tipCategoryName: colors.black,
    tipIconCircleBg: colors.black,
    tipIcon: colors.white,
    menuActiveItem: colors.red,
    hamburger: colors.red,
    menuArrow: colors.red,
    iconInfoBg: colors.silver,
    iconInfoIcon: colors.black,
    iconInfoText: colors.gray,
    subtitleText: colors.gray,
    bulletActive: colors.white,
    bullet: colors.silver,
    tipCardBg: colors.silver,
    informationText: colors.white,
    informationImageOverlay: colors.black,
    informationIndicator: colors.white,
    adCarBoxBg: colors.darkGray,
    adCarBoxText: colors.white,
    adLocalization: colors.red,
    adPrice: colors.red,
    contentsList: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxText: colors.black,
    inputBorder: colors.darkGray,
    submitButton: colors.red,
    socialButton: colors.darkGray,
    socialBoxBg: colors.white,
    selectHover: colors.gray,
  },
};

export const darkTheme: Theme = {
  fontSizes,
  fontWeights,
  spaces,
  breakpoints,
  colors: {
    bg: colors.darkGray,
    text: colors.white,
    sectionText: colors.gray,
    border: colors.silver,
    categoryName: colors.gray,
    iconCircleBg: colors.silver,
    icon: colors.black,
    tipText: colors.black,
    tipCategoryName: colors.black,
    tipIconCircleBg: colors.black,
    tipIcon: colors.white,
    menuActiveItem: colors.red,
    hamburger: colors.red,
    menuArrow: colors.red,
    iconInfoBg: colors.silver,
    iconInfoIcon: colors.black,
    iconInfoText: colors.gray,
    subtitleText: colors.gray,
    bulletActive: colors.white,
    bullet: colors.silver,
    tipCardBg: colors.silver,
    informationText: colors.white,
    informationImageOverlay: colors.black,
    informationIndicator: colors.white,
    adCarBoxBg: colors.black,
    adCarBoxText: colors.white,
    adLocalization: colors.red,
    adPrice: colors.red,
    contentsList: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxText: colors.black,
    inputBorder: colors.white,
    submitButton: colors.red,
    socialButton: colors.black,
    socialBoxBg: colors.white,
    selectHover: colors.gray,
  },
};
