import {
  Typography,
  Button,
  Box,
  Input,
  FormControl,
  InputLabel,
  Stack,
} from "@mui/material";

const HeroSection = () => {
  return (
    <Stack alignItems="center">
      <Box paddingTop={"10px"} sx={{ textAlign: "center" }}>
        <Typography variant="h2" color={"primary"}>
          DeepDelve-
          <Typography variant="h2" display={"inline"} color={"black"}>
            Intelligent QA
          </Typography>
        </Typography>
        <Typography variant="h2" color={"black"}>
          & Search
        </Typography>

        <Typography variant="h6" margin={"auto"} maxWidth={"60%"}>
          State of the art Question & Answering and summarisation solution for
          precise and contextual answers based on your enterprise documents and
          questions in natural language.
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

      <img src="\images\sc-1.png" alt="" />
    </Stack>
  );
};
export default HeroSection;
