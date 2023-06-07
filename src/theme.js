import { createTheme } from "@material-ui/core/styles";
const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#FFC6D9", // Powdery pinks
    },
    secondary: {
      main: "#E5008D", // Fuchsia
    },
    background: {
      default: "#E8F6F3", // Jade
      paper: "#FFFFFF",
    },
    text: {
      primary: "#293745",
      secondary: "#586276",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  overrides: {
    Button: {
      root: {
        borderRadius: 4,
      },
      disabled: {
        backgroundColor: "#F3F3F3",
        borderColor: "#F3F3F3",
        color: "#97989A",
      },
      containedPrimary: {
        backgroundColor: "#FFC6D9", // Powdery pinks
        borderColor: "#FFC6D9",
        "&:hover": {
          backgroundColor: "#FFD5E3", // Lighter shade of powdery pinks
          borderColor: "#FFD5E3",
        },
        "&:focus": {
          backgroundColor: "#FFC6D9", // Powdery pinks
          borderColor: "#FFC6D9",
        },
      },
      containedSecondary: {
        backgroundColor: "#E5008D", // Fuchsia
        borderColor: "#E5008D",
        "&:hover": {
          backgroundColor: "#F032A3", // Lighter shade of fuchsia
          borderColor: "#F032A3",
        },
        "&:focus": {
          backgroundColor: "#E5008D", // Fuchsia
          borderColor: "#E5008D",
        },
      },
      outlinedPrimary: {
        backgroundColor: "#FFC6D9", // Powdery pinks
        borderColor: "#FFC6D9",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#FFD5E3", // Lighter shade of powdery pinks
          borderColor: "#FFD5E3",
        },
        "&:focus": {
          backgroundColor: "#FFC6D9", // Powdery pinks
          borderColor: "#FFC6D9",
        },
      },
      outlinedSecondary: {
        backgroundColor: "#E5008D", // Fuchsia
        borderColor: "#E5008D",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#F032A3", // Lighter shade of fuchsia
          borderColor: "#F032A3",
        },
        "&:focus": {
          backgroundColor: "#E5008D", // Fuchsia
          borderColor: "#E5008D",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3CACD7",
    },
    secondary: {
      main: "#586276",
    },
    background: {
      default: "#293745",
      paper: "#586276",
    },
    text: {
      primary: "#F8FAFB",
      secondary: "#A9B3BD",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
  overrides: {
    Button: {
      root: {
        borderRadius: 4,
      },
      disabled: {
        backgroundColor: "#F3F3F3",
        borderColor: "#F3F3F3",
        color: "#97989A",
      },
      containedPrimary: {
        backgroundColor: "#3CACD7",
        borderColor: "#3CACD7",
        "&:hover": {
          backgroundColor: "#50C1EC",
          borderColor: "#50C1EC",
        },
        "&:focus": {
          backgroundColor: "#3CACD7",
          borderColor: "#3CACD7",
        },
      },
      containedSecondary: {
        backgroundColor: "#586276",
        borderColor: "#586276",
        "&:hover": {
          backgroundColor: "#798297",
          borderColor: "#798297",
        },
        "&:focus": {
          backgroundColor: "#586276",
          borderColor: "#586276",
        },
      },
      outlinedPrimary: {
        backgroundColor: "#586276",
        borderColor: "#586276",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#798297",
          borderColor: "#798297",
        },
        "&:focus": {
          backgroundColor: "#586276",
          borderColor: "#586276",
        },
      },
      outlinedSecondary: {
        backgroundColor: "#586276",
        borderColor: "#586276",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#798297",
          borderColor: "#798297",
        },
        "&:focus": {
          backgroundColor: "#586276",
          borderColor: "#586276",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
