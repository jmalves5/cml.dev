const { system: preset } = require("@theme-ui/presets")
const tabsCoreStyles = require("../components/organisms/Tabs/core-styles")
const { alpha } = require("@theme-ui/color")

const palette = {
  ...preset.colors,
  cyan: ["#24ADC5", "#B6E8ED"],
  purple: ["#9361D3", "#BB8DDA", "#7845BA"],
  darkPurple: ["#3A2D4C", "#4A3F63"],
  gray: "#EEF4F8",
  white: "#FFF",
  navy: ["#2C274B", "#737396", "#9898B0"],
  orange: ["#F26740", "#F6936A"],
  yellow: "#E3EE9E",
}

export default {
  ...preset,
  breakpoints: ["480px", "640px", "980px", "1440px"],
  fonts: {
    body: '"DM Sans", sans-serif',
    heading: '"DM Sans", sans-serif',
    monospace: '"DM Mono", monospace',
  },
  text: {
    ...preset.text,
    accuracy: {
      px: "20px",
      py: "10px",
    },
  },
  colors: {
    ...palette,
    background: palette.white,
    text: palette.darkPurple[0],
    primary: palette.purple[0],
  },
  tooltips: {
    primary: {
      "&[title]": {
        position: "relative",
        "&:after": {
          textAlign: "center",
          content: "attr(title)",
          position: "absolute",
          bottom: "100%",
        },
      },
    },
  },
  shadows: {
    wide: "0px 20px 30px rgba(74, 63, 99, 0.1)",
  },
  radii: [0, "8px"],
  sizes: {
    container: "1280px",
    ...[0, "4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"],
  },
  layout: {
    ...preset.layout,
    container: {
      maxWidth: "1280px",
      mx: "auto",
      px: 3,
    },
    Header: {
      color: "background",
      pt: [3, "20px"],
      px: [2, "40px"],
      Logo: {
        display: "block",
        flex: "0 1 auto",
        pt: "10px",
        pb: ["0.5rem", null, "10px"],
        px: "10px",
        width: ["100%", null, "auto"],
        img: {
          maxWidth: ["154px", null, "115px"],
          height: ["40px", null, "30px"],
          display: "block",
          width: "100%",
          mx: "auto",
        },
      },
      Inner: {
        variant: "layout.container",
        maxWidth: "1500px",
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        flexFlow: ["column", null, "row"],
        px: 0,
      },
      Nav: {
        px: 0,
        display: "flex",
        flexDirection: "row",
        flexWrap: ["wrap", null, "nowrap"],
        justifyContent: ["center", null, "flex-end"],
        flex: "1",
        Link: {
          variant: "links.nav",
          ml: "10px",
          py: "6px",
          px: "10px",
          fontSize: "18px",
          fontWeight: "normal",
          height: "48px",
          textAlign: "center",
          lineHeight: "36px",
          color: alpha("background", 0.7),
          transition: "color 0.25s",
          "&:hover": {
            color: "background",
          },
          "&:first-of-type": {
            ml: 0,
          },
        },
      },
    },
    Footer: {
      borderTop: "1px solid rgba(255, 255, 255, 0.3)",
      variant: "styles.invert",
      py: 1,
      Inner: {
        flexFlow: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        variant: "layout.container",
        my: ["40px", null, null, 0],
        display: ["block", null, null, "flex"],
      },
      Logo: {
        order: -2,
        display: "block",
        flex: "0 1 auto",
        p: "10px",
        my: "40px",
        mx: "auto",
        img: {
          display: "block",
          width: "100%",
          mx: "auto",
          maxWidth: "154px",
          height: "40px",
        },
      },
      Nav: {
        px: 0,
        mx: "auto",
        display: "flex",
        flexDirection: ["column", "row"],
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        fontSize: "18px",
        verticalAlign: "middle",
        Link: {
          variant: "links.footerNav",
          fontWeight: "normal",
          px: 2,
          py: "6px",
          fontSize: "18px",
          textAlign: "center",
          lineHeight: "28px",
          transition: "color 0.25s",
          "&:first-of-type": {
            ml: 0,
          },
        },
      },
      SocialIcons: {
        justifyContent: ["center", null, null, "flex-end"],
        alignItems: "center",
        textAlign: ["center", null, null, "right"],
        width: "300px",
        mx: "auto",
        my: "40px",
        ">a": {
          variant: "styles.SocialLinkIcon",
          px: "6px",
          mx: "6px",
        },
      },
      PoweredBy: {
        variant: "links.light",
        textDecoration: "none",
        display: "block",
        order: -1,
        textAlign: "center",
        height: "42px",
        width: "auto",
        lineHeight: "42px",
        mx: "auto",
        px: "0.1em",
        svg: {
          verticalAlign: "middle",
        },
      },
    },
    main: {
      overflow: "auto",
    },
  },
  buttons: {
    base: {
      transition: "0.2s background-color",
      display: "inline-block",
      textDecoration: "none",
      borderRadius: "30px",
      px: 1,
    },
    primary: {
      variant: "buttons.base",
      lineHeight: "50px",
      fontSize: "18px",
      letterSpacing: "0.02em",
      height: "50px",
      backgroundColor: "primary",
      color: "white",
      border: "none",
      px: "2em",
      cursor: "pointer",
      "&:hover": {
        bg: "purple.2",
      },
    },
  },
  copy: {
    variant: "buttons.base",
    cursor: "pointer",
    py: 0,
    fontSize: "14px",
    height: "30px",
    width: "86px",
    color: "white",
    backgroundColor: "#24ADC5",
    "&:hover": {
      backgroundColor: "#2698AB",
    },
    "&:disabled": {
      opacity: "0.4",
    },
    "&:focus": {
      border: "1px solid #4A3F63",
      outline: "none",
    },
  },
  links: {
    primary: {
      transition: "0.5s color",
    },
    button: {
      variant: "buttons.primary",
    },
    nav: {
      variant: "links.light",
      fontWeight: "normal",
      textDecoration: "none",
    },
    light: {
      variant: "links.primary",
      color: alpha("background", 0.7),
      ":focus": {
        color: alpha("background", 0.85),
      },
      "&:hover": {
        color: "background",
      },
    },
    footerNav: {
      variant: "links.nav",
      color: "background",
      "&:hover": {
        color: alpha("background", 0.5),
      },
      ":focus": {
        color: "background",
      },
    },
    RepoButton: {
      variant: "buttons.base",
      textAlign: "center",
      width: "96px",
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: "95px",
      color: "background",
      border: "1px solid",
      borderColor: alpha("background", 0.3),
      height: "30px",
      py: "8px",
      px: "6px",
      mx: "4px",
      fontSize: "14px",
      textDecoration: "none",
      letterSpacing: "0.01em",
      "&:hover": {
        backgroundColor: alpha("background", 0.3),
      },
      "&:focus": {
        outline: "none",
        borderColor: "background",
      },
      "&:disabled": {
        color: alpha("background", 0.5),
      },
      "&>svg, &>img": {
        color: alpha("background", 0.6),
      },
      ">span": {
        display: "inline-block",
        flex: "1 1",
      },
    },
  },
  forms: {
    input: {
      color: "text",
    },
    partial: {
      border: "none",
      backgroundColor: "unset",
    },
    ButtonInput: {
      backgroundColor: "white",
      color: "black",
      borderRadius: "1.5rem",
      pr: "2px",
      fontSize: "18px",
      Input: {
        variant: "forms.partial",
        pl: "1rem",
        borderTopLeftRadius: "1.5rem",
        borderBottomLeftRadius: "1.5rem",
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
      },
      Button: {
        my: "2px",
        color: "white",
        backgroundColor: "purple",
        borderRadius: "1.5rem",
        lineHeight: "1.5rem",
        flex: "0 0 auto",
        letterSpacing: "0.02em",
      },
    },
  },
  switches: {
    Base: {
      position: "relative",
      "::before": {
        border: "1px solid",
        borderColor: "text",
        backgroundColor: "background",
        transition: "0.1s all",
        position: "absolute",
        display: "block",
        borderRadius: 1,
        content: "''",
        bottom: "0",
        top: "0",
      },
      Left: {
        "::before": {
          left: "0",
          right: "50%",
        },
      },
      Right: {
        "::before": {
          right: "0",
          left: "50%",
        },
      },
      Label: {
        variant: "styles.NoClickOutline",
      },
      ">span": {
        variant: "switches.Base.Label",
      },
    },
    primary: {
      variant: "switches.Base",
      display: "block",
      whiteSpace: "nowrap",
      color: "background",
      bg: "darkPurple.1",
      borderRadius: 1,
      width: "100%",
      overflow: "hidden",
      Label: {
        variant: "switches.Base.Label",
        py: 1,
        px: 2,
        zIndex: "3",
        width: "50%",
        textAlign: "center",
        display: "inline-block",
        position: "relative",
        transition: "0.2s all",
        cursor: "pointer",
        Active: {
          color: "text",
        },
      },
    },
  },
  styles: {
    ...preset.styles,
    SocialLinkIcon: {
      variant: "links.footerNav",
    },
    LandingVideo: {
      height: "0",
      width: "auto",
      paddingBottom: "56.25%",
      borderRadius: "8px",
      backgroundColor: "black",
      overflow: "hidden",
      my: 3,
    },
    HomeFeature: {
      Wrapper: {
        borderTopStyle: ["solid", null, null, "none"],
        borderLeftStyle: ["none", null, null, "solid"],
        borderWidth: "1px",
        borderColor: "rgba(255,255,255,0.3)",
        mx: "auto",
        px: [1, null, "35px"],
        py: "1px",
        maxWidth: "600px",
        svg: {
          mb: ["20px", null, null, "30px"],
        },
        "&:first-of-type": {
          borderTop: "none",
          borderLeft: "none",
          pl: "30px",
        },
        "&:last-of-type": {
          pr: "30px",
        },
      },
      Heading: {
        my: 3,
        fontSize: "22px",
        lineHeight: "32px",
      },
      Content: {
        color: alpha("background", 0.5),
        fontSize: "18px",
        lineHeight: "28px",
        letterSpacing: "0.02em",
      },
      Box: {
        maxWidth: "500px",
        my: ["40px", null, null, "25px"],
        mx: "auto",
      },
    },
    Highlight: {
      textDecoration: "inherit",
      transition: "0.2s all",
      display: "block",
      width: "auto",
      mr: "auto",
      color: "inherit",
      "&>div>span": {
        transition: "0.2s all",
        borderRadius: "2px",
        py: "0.03em",
        my: "-0.03em",
        px: "0.25em",
        mx: "-0.25em",
      },
    },
    Tooltip: {
      Base: {
        transition: "0.2s all ease-in-out",
        display: "block",
        visibility: "hidden",
        transform: "translateX(-50%)",
        position: "absolute",
        opacity: "0",
      },
      Bubble: {
        variant: "styles.Tooltip.Base",
        backgroundColor: "background",
        color: "text",
        width: "auto",
        height: "44px",
        fontFamily: "body",
        fontSize: ["14px", null, "18px"],
        top: "-54px",
        px: "1em",
        lineHeight: "44px",
        borderRadius: "4px",
        whiteSpace: "nowrap",
      },
      Arrow: {
        variant: "styles.Tooltip.Base",
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: "6px solid",
        borderTopColor: "background",
        content: '""',
        top: "-10px",
        height: "0",
        width: "0",
      },
      Active: {
        visibility: "visible",
        opacity: "1",
      },
    },
    CenteredBlock: {
      display: "block",
      mx: "auto",
    },
    CodeBlock: {
      fontSize: ["12px", null, null, "14px"],
      lineHeight: ["18px", null, null, "22px"],
      overflow: "auto",
      px: "10px",
      py: "10px",
      Buttons: {
        my: ["10px", "15px", "20px"],
        mr: ["10px", "15px", "20px"],
        justifyContent: "flex-end",
      },
      pre: {
        minWidth: "100%",
        whiteSpace: "pre",
        fontFamily: "monospace",
        display: "inline-block",
        pt: "10px",
        pl: "10px",
        pb: "15px",
        borderBottomLeftRadius: 1,
        minHeight: "100%",
        "&>div": {
          float: "left",
          clear: "both",
        },
      },
    },
    Video: {
      borderRadius: 1,
    },
    invert: {
      color: alpha("background", 0.5),
      backgroundColor: "text",
    },
    SolutionList: {
      p: 0,
      listStyle: "none",
      color: "text",
      fontSize: ["12px", null, "16px", "22px"],
      lineHeight: "32px",
      maxWidth: [null, "586px", "834px"],
      Item: {
        display: "flex",
        flexFlow: "row nowrap",
        borderTop: "1px solid",
        borderColor: alpha("#4A3F63", 0.2),
        alignItems: "center",
        ":first-of-type": { borderTop: "none" },
        "&>h3": {
          color: "text",
          flex: 1,
          ":first-of-type": { textAlign: "left" },
          ":last-of-type": { textAlign: "right" },
        },
        "&>svg": {
          minWidth: "60px",
          maxHeight: "24px",
          height: "100%",
          flex: "0 0 auto",
        },
      },
    },
    Tabs: {
      ...tabsCoreStyles,

      color: "white",
      minWidth: "250px",

      display: "flex",
      flexFlow: ["column nowrap", null, "row wrap"],
      overflow: "visible",
      width: "100%",

      px: [0, null, 3],

      Content: {
        order: 1,
        overflow: "hidden",
        borderBottomRightRadius: [0, null, 1],
        borderBottomLeftRadius: [0, null, 1],
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        Active: {
          width: "100%",
          flex: [null, null, "1 1 100%"],
          boxShadow: [null, "wide"],
          textAlign: "left",
        },
        Inactive: {
          display: "block",
          height: 0,
          width: 0,
          "& video": {
            display: "none",
          },
        },
      },

      Tab: {
        variant: "styles.NoClickOutline",
        flex: "1 0",
        marginRight: [0, null, "2px"],
        height: ["48px", null, null, "70px"],
        lineHeight: ["48px", null, null, "70px"],
        px: [4, 2],
        color: "white",
        backgroundColor: "darkPurple.0",
        whiteSpace: "nowrap",
        textAlign: "center",
        borderTopLeftRadius: [0, null, 1],
        borderTopRightRadius: [0, null, 1],
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        opacity: 0.5,
        fontWeight: "800",
        cursor: "pointer",
        zIndex: "5",
        position: "relative",
        fontSize: "18px",
        display: "block",

        order: "0",

        borderBottom: "none",

        verticalAlign: "middle",

        transition: "opacity 0.2s",
        ":last-of-type": {
          mr: 0,
        },

        "&:hover": {
          opacity: 0.7,
        },
        Active: {
          opacity: 1,
        },
      },
    },

    NoClickOutline: {
      outline: "none",
    },

    root: {
      ...preset.styles.root,
      color: alpha("text", 0.7),
      minWidth: "350px",
      fontSize: "14px",
      "*": {
        boxSizing: "border-box",
      },
      "&, #___gatsby, #gatsby-focus-wrapper": {
        height: "100%",
        width: "100%",
        padding: "0",
        margin: "0",
      },
    },
  },
}
