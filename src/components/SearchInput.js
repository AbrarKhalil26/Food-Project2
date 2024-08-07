import { Search } from '@mui/icons-material'
import { FormControl, Grid, IconButton, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import React, { useState } from 'react'

const optionSelect = [
  "Sort by: Latest",
  "Sort by: Top Reted",
  "Sort by: Tranding",
];

const SearchInput = ({ valueInput, setValueInput }) => {
  const [select, setSelect] = useState('Sort by:');
  

  return (
    <FormControl sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', my: '30px'}}>
      <Grid container spacing={2} justifyContent='space-between'>
        <Grid item xs={12} sm={8} md={7} lg={7}>
          <TextField
            placeholder='Search for recipes...'
            id="fullWidth"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton position="start">
                  <Search/>
                </IconButton>
              ),
            }}
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            sx={{ background: '#f9f5f4', width: '100%'}}
          />
        </Grid>


        <Grid item xs={12} sm={4} md={5} lg={2}>
          <Select
            labelId="demo-simple-select-label"
            displayEmpty
            id="demo-simple-select"
            value={select}
            input={<OutlinedInput />}
            onChange={(e)=> setSelect(e.target.value)}
            sx={{ background: '#f9f5f4', borderRadius: '50px', width: '100%', px: '10px'}}
          >
            <MenuItem value='Sort by:' disabled >Sort by:</MenuItem>
            {
              optionSelect.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>

              ))
            }
          </Select>
        </Grid>
      </Grid>

    </FormControl>
  )
}

export default SearchInput
