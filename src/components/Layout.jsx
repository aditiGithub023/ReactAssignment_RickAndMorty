import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cardbox from "./Cardbox";
import axios from "axios";
import {
  useState,
  useEffect,

} from "react";
import FilterData from "./FilterData";


function Layout() {
  const [data, setData] = useState([]);
  const [showData, setDataShown] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [collectedKey, setCollectedKeys] = useState({});
  const [state, setState] = useState({
    origin: {
      "Earth (C-137)": false,
      unknown: false,
      "Earth (Replacement Dimension)": false,
      Abadango: false,
    },
    species: {
      Human: false,
      Alien: false,
    },
    gender: {
      Male: false,
      Female: false,
      unknown: false,
    },
    status: {
      Alive: false,
      unknown: false,
      Dead: false,
    },
  });
  const handleChange = (identifier, namevalue) => {


    setState((prevState) => ({
      ...prevState,
      [identifier]: {
        ...prevState[identifier],
        [namevalue]: !prevState[identifier][namevalue],
      },
    }));

  };
  useEffect(() => {
 
    setIsLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {

        setData(response.data.results);
        setDataShown(response.data.results);
     
        setIsLoading(false);
      })
      .catch((e) => {
        alert(e.message);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {

   
    function collectSelectedKeys() {
      const selected = {
        origin: [],
        species: [],
        gender: [],
        status: [],
      };

      for (const key in state) {
        for (const tag in state[key]) {
          if (state[key][tag]) {
            selected[key].push(tag);
          }
        }
      }

      const filteredData = data.filter((el) =>
        (selected.gender.length === 0 || selected.gender.includes(el.gender)) &&
        (selected.origin.length === 0 || selected.origin.includes(el.origin.name)) &&
        (selected.species.length === 0 || selected.species.includes(el.species)) &&
        (selected.status.length === 0 || selected.status.includes(el.status))
      );

      setDataShown(filteredData);
      setCollectedKeys(selected);
    }
    collectSelectedKeys();
  }, [state, data]);

  return (
    <Box>
      <Grid container direction="row">
        <Grid
          item
          xs={12}
          md={2}

        >

          <FilterData state={state} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12} md={10} sx={{ height: "100vh" }}>
    
          <Cardbox
            data={data}
            isLoading={isLoading}
            showData={showData}
            setDataShown={setDataShown}
            state={state}
            selectedFilters={collectedKey}
            handleState={handleChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
