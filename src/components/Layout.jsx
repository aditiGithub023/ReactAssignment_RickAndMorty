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
  
  //for tracking checkBoxes
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
    //start loading
    setIsLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
      
        setData(response.data.results);
        setDataShown(response.data.results);
        //loading complete
        setIsLoading(false);
      })
      .catch((e) => {
        alert(e.message);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
 
    function collectSelectedKeys() {
      let collectedTrueKeys = {
        originTrue: [],
        speciesTrue: [],
        genderTrue: [],
        statusTrue: [],
      };
      const { origin, species, gender, status } = state;
      for (let key in origin) {
    
        if (origin[key]) {
          if (!collectedTrueKeys.originTrue.includes(key))
            collectedTrueKeys.originTrue.push(key);
        }
      }
      for (let key in species) {
        if (species[key])
           collectedTrueKeys.speciesTrue.push(key);
      }
      for (let key in gender) {
        if (gender[key])
           collectedTrueKeys.genderTrue.push(key);
      }
      for (let key in status) {
        if (status[key]) 
          collectedTrueKeys.statusTrue.push(key);
      }
    

      let { genderTrue, originTrue, speciesTrue, statusTrue } =
        collectedTrueKeys;
      let fileredData = [...data];

      if (genderTrue.length > 0) {
        fileredData = fileredData.filter((el) =>
          genderTrue.includes(el.gender)
        );
      }
      if (originTrue.length > 0) {
        fileredData = fileredData.filter((el) =>
          originTrue.includes(el.origin.name)
        );
      }
      if (speciesTrue.length > 0) {
        fileredData = fileredData.filter((el) =>
          speciesTrue.includes(el.species)
        );
      }
      if (statusTrue.length > 0) {
        fileredData = fileredData.filter((el) =>
          statusTrue.includes(el.status)
        );
      }
      setDataShown(fileredData);


      setCollectedKeys(collectedTrueKeys);
      
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
          {/* card */}
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
