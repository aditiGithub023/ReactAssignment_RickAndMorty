import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default function FilterData({ state, handleChange }) {
  const font = '"Margarine", sans-serif';
  const MainHeadings = styled(Typography)(() => ({
    fontFamily: font,
    textAlign: "left",
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
    fontSize: "2rem",
  }));
  const [open, setOpen] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  //Js provides us with the resize event, which is fired every time window has been resized.
  //WHEN RESIZE event occurs, we update the state.
  //the side effect is listening for the resize event and updating our state.
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    //clean up function for when component unmounts or re-renders.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleFilter = open || width > 899;

  return (
    <>
      <Box
   
      >
        <Box sx={{ margin: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MainHeadings>Filters</MainHeadings>
            <UnfoldLessIcon
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                display: { md: "none", xs: "inline-block" },
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem",
                borderRadius: "15px",
              }}
            />
          </Box>
          {visibleFilter ? (
            <>
              <Stack
                spacing={2}
          
              >
                <Box
                  sx={{
                    display: "flex",
                    border: "2px solid grey",
                    padding: "1rem",
                  }}
                >
                  <FormControl
                    sx={{ textAlign: "left" }}
                    component="fieldset"
                    variant="standard"
                  >
                    {/* ----------------------------------origin */}
                    <FormLabel component="legend">Origin</FormLabel>
                    <FormGroup>
                      {Object.keys(state.origin).map((i) => {
                     
                        return (
                          <FormControlLabel
                            key={i}
                            control={
                              <Checkbox
                                checked={state.origin[i]}
                                onChange={(e) => handleChange("origin", i)}
                                name={i}
                              />
                            }
                            label={
                              <Typography
                                variant="body2"
                                sx={{ wordBreak: "break-word" }}
                              >
                                {i}
                              </Typography>
                            }
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    border: "2px solid grey",
                    padding: "1rem",
                  }}
                >
                  <FormControl
                    sx={{ textAlign: "left" }}
                    component="fieldset"
                    variant="standard"
                  >
                    <FormLabel component="legend">Species</FormLabel>
                    <FormGroup>
                      {Object.keys(state.species).map((i) => {
                        return (
                          <FormControlLabel
                            key={i}
                            control={
                              <Checkbox
                                checked={state.species[i]}
                                onChange={(e) => handleChange("species", i)}
                                name={i}
                              />
                            }
                            label={i}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                </Box>
                {/* //----------------------gender--------------- */}
                <Box
                  sx={{
                    display: "flex",
                    border: "2px solid grey",
                    padding: "1rem",
                  }}
                >
                  <FormControl
                    sx={{ textAlign: "left" }}
                    component="fieldset"
                    variant="standard"
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <FormGroup>
                      {Object.keys(state.gender).map((i) => {
                        return (
                          <FormControlLabel
                            key={i}
                            control={
                              <Checkbox
                                checked={state.gender[i]}
                                onChange={(e) => handleChange("gender", i)}
                                name={i}
                              />
                            }
                            label={i}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                </Box>
                {/* //----------------------status--------------- */}
                <Box
                  sx={{
                    display: "flex",
                    border: "2px solid grey",
                    padding: "1rem",
                  }}
                >
                  <FormControl
                    sx={{ textAlign: "left" }}
                    component="fieldset"
                    variant="standard"
                  >
                    <FormLabel component="legend">Status</FormLabel>
                    <FormGroup>
                      {Object.keys(state.status).map((i) => {
                        return (
                          <FormControlLabel
                            key={i}
                            control={
                              <Checkbox
                                checked={state.status[i]}
                                onChange={(e) => handleChange("status", i)}
                                name={i}
                              />
                            }
                            label={i}
                          />
                        );
                      })}
                    </FormGroup>
                  </FormControl>
                </Box>
              </Stack>
            </>
          ) : null}
        </Box>
      </Box>
    </>
  );
}
