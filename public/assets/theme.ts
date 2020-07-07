const colors = {
  white: '#FFFFFF',
  black: '#0D0D0D',
  red: '#C20708',
  silver: '#CCD4DA',
  darkSilver: '#A4B3BF',
  gray: '#A6A6A6',
  darkGray: '#262626'
}

const fontSizes = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '20px',
  xl: '24px',
  xxl: '48px'
}

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700
}

const spaces = {
  xxs: '10px',
  xs: '15px',
  s: '20px',
  m: '25px',
  l: '30px',
  xl: '40px',
  xxl: '60px',
}

const breakpoints = [
  '1024px',
  '1280px'
]

export const lightTheme = {
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
    tipCategoryName: colors.black,
    tipIconCircleBg: colors.black,
    tipIcon: colors.white,
    menuActiveItem: colors.red,
    hamburger: colors.red,
    menuArrow: colors.red,
    subtitleText: colors.gray,
    bulletActive: colors.white,
    bullet: colors.silver,
    tipCardBg: colors.silver,
    adCarBoxBg: colors.darkGray,
    adLocalization: colors.red,
    adPrice: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxActive: colors.black,
    inputBorder: colors.darkGray,
    submitButton: colors.red,
    socialButton: colors.darkGray
  }
}

export const darkTheme = {
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
    tipCategoryName: colors.black,
    tipIconCircleBg: colors.black,
    tipIcon: colors.white,
    menuActiveItem: colors.red,
    hamburger: colors.red,
    menuArrow: colors.red,
    subtitleText: colors.gray,
    bulletActive: colors.white,
    bullet: colors.silver,
    tipCardBg: colors.silver,
    adCarBoxBg: colors.black,
    adLocalization: colors.red,
    adPrice: colors.red,
    shareSection: colors.red,
    moreSection: colors.red,
    categoryBoxActiveBg: colors.red,
    categoryBoxActiveText: colors.white,
    categoryBoxBg: colors.darkSilver,
    categoryBoxActive: colors.black,
    inputBorder: colors.white,
    submitButton: colors.red,
    socialButton: colors.black
  }
}
