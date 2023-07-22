import {
  Button,
  Input,
  FormControl,
  InputLabel,
  Stack,
  Box,
  Typography,
} from "@mui/material";

const CTASection = () => {
  return (
    <Box
      mx={"auto"}
      my={"2rem "}
      sx={{ boxShadow: 3 }}
      width={"80%"}
      padding={"2rem"}
      borderRadius={"24px"}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Box paddingTop={"10px"} sx={{ textAlign: "center" }}>
          <Typography variant="h4" color={"primary"}>
            Get your hand on <br />
            with{" "}
            <Typography variant="h4" display={"inline"} color={"black"}>
              {" "}
              DeepDelve
            </Typography>
          </Typography>
        </Box>
        <Stack spacing={4} direction="row" useFlexGap flexWrap="wrap" my={4}>
          <FormControl sx={{ boxShadow: 3 }}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
          <Button variant="contained" color="primary">
            Request Demo
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
export default CTASection;
