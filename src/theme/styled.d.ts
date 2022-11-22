import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: {
                red01: string
                red02: string
                red03: string
                red04: string
            }

            secondary: {
                blackBlue: string
                darkBlue: string
                darkGreyBlue: string
                greyBlue: string
                light01: string
                light02: string
            }

            greyScale: {
                dark: string
                light: string
                light02: string
                light03: string
                white: string
            }

            statuses: {
                success: string
                successBackground: string
                error: string
                errorBackground: string
                errorLabel: string
                informative: string
                informativeBackground: string
                notice: string
                noticeBackground: string
                disabled: string
            }
        }
    }
}
