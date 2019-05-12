/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from "jss"
import {
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles"
import grey from "@material-ui/core/colors/grey"
import cyan from "@material-ui/core/colors/cyan"

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  fontFamily: "Montserrat, sans-serif",
  display: "flex",
  palette: {
    primary: {
      light: cyan[700],
      main: cyan[800],
      dark: cyan[900],
      contrastText: "#fff"
    },
    secondary: {
      light: grey[300],
      main: grey[800],
      dark: grey[900],
      contrastText: "#E0E0E0"
    }
  },
  appBar: {
    height: 50
  },
  toolbar: {
    titleFontSize: "small",
    height: 40
  },
  typography: {
    useNextVariants: true
  }
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
