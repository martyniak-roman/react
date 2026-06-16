import {use} from "react"
import {ThemeContext} from "../contexts/themeContext.tsx"

const useThemeContext = () => {
  const context = use(ThemeContext)

    if(!context) {
        throw new Error("useThemeContext must be used within a ThemeProvider")
    }

  return context
}

export default useThemeContext