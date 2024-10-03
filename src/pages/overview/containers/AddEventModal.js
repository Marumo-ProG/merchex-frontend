// React

// Date fns
import { format } from "date-fns";

// Forms
import { useForm, Controller } from "react-hook-form";

// MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

const AddEventModal = ({ open, handleClose, handleAddEvent, bands }) => {
    const { handleSubmit, control } = useForm();

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>Add Event</DialogTitle>

            <form onSubmit={handleSubmit(handleAddEvent)}>
                <Stack spacing={2} padding={2}>
                    <Stack direction="row" spacing={2}>
                        <Controller
                            name="name"
                            rules={{
                                required: "Event Name is required",
                            }}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Event Name *"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="location"
                            rules={{
                                required: "Event Location is required",
                            }}
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Location *"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Controller
                            name="description"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Controller
                            name="price"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    type="number"
                                    {...field}
                                    error={!!error}
                                    label="Price"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Controller
                            name="date"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Date *"
                                    placeholder="dd-mm-yyyy"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                        <Controller
                            name="time"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    error={!!error}
                                    label="Time *"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <Controller
                            name="band"
                            control={control}
                            render={({ field, fieldState: { error } }) => (
                                <FormControl fullWidth>
                                    <label id="band">Band *</label>
                                    <Select
                                        {...field}
                                        error={!!error}
                                        placeholder="Band *"
                                        label="Band *"
                                        labelId="band"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        {bands.map((band) => (
                                            <MenuItem key={band.id} value={band.id}>
                                                {band.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                        <Button variant="contained" color="info" fullWidth>
                            Login to Add Listings
                        </Button>
                    </Stack>
                    <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
                        <Button variant="contained" color="warning" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" type="submit">
                            Add Event
                        </Button>
                    </Stack>
                </Stack>
            </form>
        </Dialog>
    );
};

export default AddEventModal;
