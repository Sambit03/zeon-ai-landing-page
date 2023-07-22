import { Box, Stack, Typography } from "@mui/material";

import GppGoodIcon from "@mui/icons-material/GppGood";

const FeatureSection = () => {
  return (
    <Stack>
      <Stack
        direction={"row"}
        m={10}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box width={"50%"}>
          <Stack direction={"row"}>
            <Stack textAlign={"left"}>
              <Typography variant="h6" color={"Primary"}>
                Feature name
              </Typography>
              <Typography variant="h2" color={"black"}>
                Feature headline goes here.
              </Typography>
              <Typography variant="h6" color={"Black"}>
                State of the art Question & Answering and summarisation solution
                for precise and contextual answers based on your enterprise
                documents and questions in natural language.
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <img src="\images\feature1.png" alt="" />
        </Box>
      </Stack>
      <Stack
        direction={"row"}
        m={10}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Box>
          <img src="\images\feature2.png" alt="" />
        </Box>
        <Box width={"50%"}>
          <Stack paddingLeft={10} direction={"row"}>
            <Stack textAlign={"left"}>
              <Typography variant="h6" color={"Primary"}>
                Feature name
              </Typography>
              <Typography variant="h2" color={"black"}>
                Feature headline goes here.
              </Typography>
              <Typography variant="h6" color={"Black"}>
                State of the art Question & Answering and summarisation solution
                for precise and contextual answers based on your enterprise
                documents and questions in natural language.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Stack>
        <Typography variant="h4" fontWeight="bold" color={"Primary"}>
          Features
        </Typography>

        <Stack
          mx="auto"
          spacing={"10rem"}
          justifyItems={"center"}
          alignItems={"center"}
          direction={"row"}
        >
          <Stack textAlign={"start"} spacing={"2rem"}>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Contextual Q&A
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon />
              Search Filters
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Multi-Format Documents
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Auto Completion
            </Typography>
          </Stack>

          <Box>
            <img src="\images\illustration1.png" alt="" />
          </Box>

          <Stack spacing={"2rem"} textAlign={"start"}>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Knowledge Collaboration
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Voice Search
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Continuous Learning
            </Typography>
            <Typography variant="h6" color={"Primary"}>
              <GppGoodIcon /> Robust & Scalable
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default FeatureSection;
