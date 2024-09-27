export const handleError = (error) => {
    console.error(error);
    return { error: true, message: "An error occurred" };
};
