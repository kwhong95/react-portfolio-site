const size = {
  mobile: '600px',
  tablet: '900px',
  laptop: '1200px',
  desktop: '1800px',
}

const theme = {
  mainColor: '#fff',
  navWidth: '8rem',
  padding: '1rem',
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,

  fontSize: {
    xs: '25px',
    sm: '30px',
    md: '35px',
    lg: '40px',
    xl: '45px',
  }
}

export { theme, size }