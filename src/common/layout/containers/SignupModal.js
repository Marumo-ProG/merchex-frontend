// Forms
import { useForm, Controller } from "react-hook-form";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SignupModal = ({ open, handleClose }) => {
    const { handleSubmit, control } = useForm();

    const handleSignup = (data) => {
        console.log("signup data >>>>", data);
    };
    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Register</DialogTitle>

            <form onSubmit={handleSubmit(handleSignup)}>
                <Stack spacing={2} padding={2}>
                    <Controller
                        name="email"
                        rules={{
                            required: "Email is required",
                        }}
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                error={!!error}
                                label="Email *"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        rules={{
                            required: "Password is required",
                        }}
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="password"
                                error={!!error}
                                label="Password *"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                    <Controller
                        name="cell"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                error={!!error}
                                label="Cell (optional)"
                                variant="outlined"
                                fullWidth
                            />
                        )}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </Stack>
            </form>
        </Dialog>
    );
};

export default SignupModal;
