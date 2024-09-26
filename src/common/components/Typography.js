import { forwardRef } from "react";

// MUI
import MuiTypography from "@mui/material/Typography";

const Typography = forwardRef(({ color, bold, align = "start", ...rest }, ref) => {
    return (
        <MuiTypography
            ref={ref}
            sx={{ fontWeight: bold ? "bold" : 400, color: color, textAlign: align }}
            {...rest}
        />
    );
});

export default Typography;
