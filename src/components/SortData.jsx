import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

export default function SortData({ showData, setDataShown }) {
  const [sort, setSort] = useState("");
  function handleSort(arg) {
    let sortData = [...showData];
    if (arg === "ASC") {
      sortData.sort((a, b) => {
        return a.id - b.id;
      });
    } else if (arg === "DSC") {
      sortData.sort((a, b) => {
        return a.id - b.id;
      });
      sortData.reverse();
    }
    setDataShown(sortData);
    setSort(arg);
  }
  return (
    <Box
      sx={{
        // backgroundColor:"pink",
        display: "flex",
        justifyContent: { md: "flex-end", sx: "flex-start" },
      }}
    >
      <Box
        sx={{
          width: {
            lg: "50%",
            xs: "100%",
            // backgroundColor:"purple"
          },
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-simple-select-label" sx={{ color: "black" }}>
            Sort by Id
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            onChange={(e) => handleSort(e.target.value)}
          >
            <MenuItem value="ASC">Ascending</MenuItem>
            <MenuItem value="DSC">Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
