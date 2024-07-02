import React from "react";

//mui
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CircularProgress from "@mui/material/CircularProgress";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import { useState } from "react";
// import pattern from "./assets/denim.webp"
import TextField from "@mui/material/TextField";
import SortData from "./SortData";
import Tags from "./Tags";

function Cardbox({
  data,
  isLoading,
  showData,
  setDataShown,
  selectedFilters,
  handleState,
}) {
  const font = '"Rubik", sans-serif';
  const [search, setSearch] = useState("");
  const currentDate = new Date();

  const ListPoint = styled(ListItem)(({ theme }) => ({
    padding: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.text.secondary,
  }));
  const Heading = styled(Typography)(() => ({
    color: "#c0c0c0",
    textAlign: "start",
  }));
  const HeadingValue = styled(Typography)(() => ({
    color: "#FF8C00",
    textAlign: "end",
    fontSize: { xs: "8px" },
  }));

  function diff_years(current_year, dateValue) {
    let s = dateValue.substr(0, 4);

    let n = Number(s);

    let r = current_year - n;
    if (r < 1) return "less than ";
    else return r;
  }

  function handleSearch() {
    let newData = showData.filter((item) => {
      let searchName = item.name;
      return search.toLowerCase().trim() === ""
        ? item
        : searchName.toLowerCase().includes(search);

    });
    setDataShown(newData);
  }
  function handleChange(e) {
    setSearch(e.target.value);
    if (e.target.value === "") setDataShown(data);
  }

  return (
    <>
      <Grid container spacing={2} direction="column">
        {/* grid -1- filter tags */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "50px",
            width: "100%",
          
          }}
        >
          <Tags selectedFilters={selectedFilters} handleState={handleState} />
        </Grid>
        {/* grid-1-end */}
        {/* grid-2-text-field-sort */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              marginRight: "1rem",
             
              marginBottom: "40px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="Search by name .."
                variant="outlined"
                onChange={handleChange}
                sx={{
                  width: { lg: "100%", xs: "200%", md: "60%" },
                  marginBottom: { md: "0", xs: "1rem" },
                }}
              />
              <Button
                variant="contained"
                onClick={handleSearch}
                sx={{
                  bgcolor: "black",
                  padding: "1rem 2rem",
                  fontSize: "0.8rem",
                  marginLeft: "2px",
                  "&:hover": {
                    backgroundColor: "#606060",
                   
                  },
                }}
              >
                search
              </Button>
            </Box>

            <Box
              sx={{
                width: "100%",
              
              }}
            >
            
              <SortData setDataShown={setDataShown} showData={showData} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {isLoading && (
        <Box
          sx={{
            minHeight: "100vh",
            fontFamily: `${font}`,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Box
        sx={{
          background: "black",
          minHeight: "100vh",
          borderRadius: { md: "1rem", xs: "0px" },
        }}
      >
        <Grid container spacing={{ lg: 1, md: 0.4, xs: 0.5 }} p={2}>
          {showData.length === 0 && (
            <Box
              sx={{
                minHeight: "100vh",
                fontFamily: `${font}`,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{ color: "white", textAlign: "center" }}
              >
                No Match found
              </Typography>
            </Box>
          )}
          {showData.length > 0 &&
            showData.map((element) => {
              return (
                <Grid
                  item
                  key={element.id}
                  xs={6}
                  // md={3}
                  md={4}
                  lg={3}

                >
                  <Card
                    sx={{
                      maxWidth: { xs: 400, md: 450 },
                      height: { xs: "700px", md: "650px", lg: "650px" },

                      borderColor: "grey",
                      borderRadius: "12px",

                      backgroundColor: "#353839",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="250"
                        image={element.image}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          color: "black",
                          bottom: 0,
                          height: "fit-content",
                          backgroundColor: "rgba(0, 0, 0, .6)", 
                          width: "100%",
                        }}
                      >
                        <Box sx={{ marginLeft: "10px" }}>
                          <Typography
                            gutterBottom
                            component="div"
                            sx={{
                              color: "white",
                              textAlign: "left",
                              marginTop: "0.5rem",
                              fontFamily: `${font}`,
                              fontSize: "1rem",
                            }}
                          >
                            {element.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="caption"
                            component="div"
                            sx={{ color: "whitesmoke", textAlign: "left" }}
                          >
                            id: {element.id}-created-{" "}
                            {diff_years(
                              currentDate.getFullYear(),
                              element.created
                            )}{" "}
                            years ago
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <CardContent>
                      <Stack
                        direction="column"
                        spacing={2}
                        divider={
                          <Divider
                            orientation="horizontal"
                            flexItem
                            sx={{ bgcolor: "#a7a7a7" }}
                          />
                        }
                      >
                        <ListPoint>
                          <Heading
                            gutterBottom
                            variant="caption"
                            component="div"
                          >
                            STATUS
                          </Heading>
                          <HeadingValue
                            variant="caption"
                            color="text.secondary"
                          >
                            {element.status}
                          </HeadingValue>
                        </ListPoint>
                        <ListPoint>
                          <Heading
                            gutterBottom
                            variant="caption"
                            component="div"
                          >
                            SPECIES
                          </Heading>
                          <HeadingValue
                            variant="caption"
                            color="text.secondary"
                          >
                            {element.species}
                          </HeadingValue>
                        </ListPoint>
                        <ListPoint>
                          <Heading
                            gutterBottom
                            variant="caption"
                            component="div"
                          >
                            GENDER
                          </Heading>
                          <HeadingValue
                            variant="caption"
                            color="text.secondary"
                          >
                            {element.gender}
                          </HeadingValue>
                        </ListPoint>
                        <ListPoint>
                          <Heading
                            gutterBottom
                            variant="caption"
                            component="div"
                          >
                            ORIGIN
                          </Heading>
                          <HeadingValue
                            variant="caption"
                            color="text.secondary"
                          >
                            {element.origin.name}
                          </HeadingValue>
                        </ListPoint>
                        <ListPoint>
                          <Heading
                            gutterBottom
                            variant="caption"
                            component="div"
                          >
                            LAST LOCATION
                          </Heading>
                          <HeadingValue
                            variant="caption"
                            color="text.secondary"
                          >
                            {element.location.name}
                          </HeadingValue>
                        </ListPoint>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </>
  );
}

export default Cardbox;
