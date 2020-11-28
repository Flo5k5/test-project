export const devices = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const minWidthDevice = {
  mobileS: `(min-width: ${devices.mobileS})`,
  mobileM: `(min-width: ${devices.mobileM})`,
  mobileL: `(min-width: ${devices.mobileL})`,
  tablet: `(min-width: ${devices.tablet})`,
  laptop: `(min-width: ${devices.laptop})`,
  laptopL: `(min-width: ${devices.laptopL})`,
  desktop: `(min-width: ${devices.desktop})`,
  desktopL: `(min-width: ${devices.desktop})`,
};

export const maxWidthDevice = {
  mobileS: `(max-width: ${devices.mobileS})`,
  mobileM: `(max-width: ${devices.mobileM})`,
  mobileL: `(max-width: ${devices.mobileL})`,
  tablet: `(max-width: ${devices.tablet})`,
  laptop: `(max-width: ${devices.laptop})`,
  laptopL: `(max-width: ${devices.laptopL})`,
  desktop: `(max-width: ${devices.desktop})`,
  desktopL: `(max-width: ${devices.desktop})`,
};
