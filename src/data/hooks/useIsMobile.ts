import { useTheme, useMediaQuery } from "@mui/material";

export default function useIsMobile(): boolean {
    const theme = useTheme()
    const isMObile = useMediaQuery(theme.breakpoints.down('md'));

    return isMObile;

}