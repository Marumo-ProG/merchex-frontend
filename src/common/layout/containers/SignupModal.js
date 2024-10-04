// Forms
import { useForm, Controller } from "react-hook-form";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Components
import InputFileUpload from "../../components/UploadButton";

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
                    <Stack direction={"row"} spacing={2}>
                        <Controller
                            name="first_name"
                            rules={{
                                required: "First Name is required",
                            }}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="First Name *"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="last_name"
                            rules={{
                                required: "Last Name is required",
                            }}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Last Name *"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
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
                        <Controller
                            name="profile_picture"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <InputFileUpload
                                    title={"Upload Profile Picture (Optional)"}
                                    field={field}
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
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
                    </Stack>

                    <Button type="submit" variant="contained" color="warning" fullWidth>
                        Register
                    </Button>
                </Stack>
            </form>
        </Dialog>
    );
};

export default SignupModal;
