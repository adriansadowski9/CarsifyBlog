import { CSSProperties } from 'react';

const colors = {
  white: '#FFFFFF',
  lightestGray: '#FEFEFE',
  lightGray: '#F0F0F0',
  gray: '#A6A6A6',
  darkGray: '#262626',
  darkerGray: '#212121',
  silver: '#CCD4DA',
  darkSilver: '#A4B3BF',
  black: '#0D0D0D',
  red: '#C20708',
  green: '#239B56',
};

const fontSizes = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '48px',
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

const imagePlaceholder = {
  filter: 'blur(24px)',
  position: 'absolute' as const,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

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
  imagePlaceholder: CSSProperties;
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
    themeButtonBg: string;
    themeButtonIcon: string;
    actionButton: string;
    hamburger: string;
    menuArrow: string;
    iconInfoBg: string;
    iconInfoIcon: string;
    iconInfoText: string;
    breadcrumbs: string;
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
    seeAlsoBar: string;
    seeAlsoLink: string;
    shareSection: string;
    moreSection: string;
    categoryBoxActiveBg: string;
    categoryBoxActiveText: string;
    categoryBoxBg: string;
    categoryBoxText: string;
    inputBorder: string;
    submitButton: string;
    socialBoxBg: string;
    selectHover: string;
    validationError: string;
    carouselDot: string;
    alertSuccessBg: string;
    alertSuccessText: string;
    alertErrorBg: string;
    alertErrorText: string;
    errorButtonBg: string;
    errorButtonText: string;
    cookieConsentBg: string;
    cookieConsentText: string;
    cookieConsentButtonBg: string;
    cookieConsentButtonText: string;
    mobileMenuBorderBottom: string;
    linkHover: string;
    galleryNavButton: string;
    galleryNavButtonHover: string;
    galleryDisabledNavButton: string;
    galleryThumbnailsBorder: string;
    imageSourceBg: string;
    imageSourceText: string;
    hyvorTalk: {
      accent: string;
      accentText: string;
      footerHeader: string;
      footerHeaderText: string;
      box: string;
      boxText: string;
      boxLightText: string;
      backgroundText: string;
    };
    mfind: {
      bg: string;
      text: string;
      headerHighlight: string;
      buttonBg: string;
      selectBorder: string;
    };
  };
}

export const lightTheme: Theme = {
  fontSizes,
  fontWeights,
  spaces,
  breakpoints,
  imagePlaceholder,
  colors: {
    bg: colors.lightestGray,
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
    themeButtonBg: colors.darkGray,
    themeButtonIcon: colors.white,
    actionButton: colors.black,
    hamburger: colors.red,
    menuArrow: colors.red,
    iconInfoBg: colors.silver,
    iconInfoIcon: colors.black,
    iconInfoText: colors.gray,
    breadcrumbs: colors.darkGray,
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
    seeAlsoBar: colors.red,
    seeAlsoLink: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxText: colors.black,
    inputBorder: colors.darkGray,
    submitButton: colors.red,
    socialBoxBg: colors.white,
    selectHover: colors.lightGray,
    carouselDot: colors.gray,
    validationError: colors.red,
    alertSuccessBg: colors.green,
    alertSuccessText: colors.white,
    alertErrorBg: colors.red,
    alertErrorText: colors.white,
    errorButtonBg: colors.red,
    errorButtonText: colors.white,
    cookieConsentBg: colors.white,
    cookieConsentText: colors.black,
    cookieConsentButtonBg: colors.red,
    cookieConsentButtonText: colors.white,
    mobileMenuBorderBottom: colors.lightGray,
    linkHover: colors.red,
    galleryNavButton: colors.white,
    galleryNavButtonHover: colors.red,
    galleryDisabledNavButton: colors.gray,
    galleryThumbnailsBorder: colors.red,
    imageSourceBg: colors.darkGray,
    imageSourceText: colors.white,
    hyvorTalk: {
      accent: colors.red,
      accentText: colors.white,
      footerHeader: colors.lightestGray,
      footerHeaderText: colors.darkGray,
      box: colors.lightestGray,
      boxText: colors.black,
      boxLightText: colors.black,
      backgroundText: colors.darkGray,
    },
    mfind: {
      bg: colors.white,
      text: colors.black,
      headerHighlight: colors.red,
      buttonBg: colors.red,
      selectBorder: colors.silver,
    },
  },
};

export const darkTheme: Theme = {
  fontSizes,
  fontWeights,
  spaces,
  breakpoints,
  imagePlaceholder,
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
    themeButtonBg: colors.lightestGray,
    themeButtonIcon: colors.darkGray,
    actionButton: colors.white,
    hamburger: colors.red,
    menuArrow: colors.red,
    iconInfoBg: colors.silver,
    iconInfoIcon: colors.black,
    iconInfoText: colors.gray,
    breadcrumbs: colors.gray,
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
    seeAlsoBar: colors.red,
    seeAlsoLink: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxText: colors.black,
    inputBorder: colors.white,
    submitButton: colors.red,
    socialBoxBg: colors.white,
    selectHover: colors.darkerGray,
    carouselDot: colors.white,
    validationError: colors.red,
    alertSuccessBg: colors.green,
    alertSuccessText: colors.white,
    alertErrorBg: colors.red,
    alertErrorText: colors.white,
    errorButtonBg: colors.red,
    errorButtonText: colors.white,
    cookieConsentBg: colors.darkGray,
    cookieConsentText: colors.white,
    cookieConsentButtonBg: colors.red,
    cookieConsentButtonText: colors.white,
    mobileMenuBorderBottom: colors.darkerGray,
    linkHover: colors.red,
    galleryNavButton: colors.white,
    galleryNavButtonHover: colors.red,
    galleryDisabledNavButton: colors.gray,
    galleryThumbnailsBorder: colors.red,
    imageSourceBg: colors.black,
    imageSourceText: colors.white,
    hyvorTalk: {
      accent: colors.red,
      accentText: colors.white,
      footerHeader: colors.black,
      footerHeaderText: colors.lightestGray,
      box: colors.black,
      boxText: colors.white,
      boxLightText: colors.white,
      backgroundText: colors.white,
    },
    mfind: {
      bg: colors.darkGray,
      text: colors.white,
      headerHighlight: colors.red,
      buttonBg: colors.red,
      selectBorder: colors.silver,
    },
  },
};
