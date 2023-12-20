/* eslint-disable react/prop-types */

import { Autocomplete, Box, TextField, createFilterOptions } from '@mui/material';
import { Airports } from '../../../data/';
import marker from '../../../assets/marker.svg';

const filterOptions = createFilterOptions({
  matchFrom: 'any',
  limit: 100,
});

function AutoComplete(props) {
    let type = props.type;
    let changeType = props.changeType;
  return (
    <>
        <Autocomplete
            options={Airports}
            filterOptions={filterOptions}
            groupBy={(option) => option.country}
            getOptionLabel={(option) =>
              `${option?.city || option?.name}, ${option?.filter || option.country}  ` || ''
            }
            renderOption={(props, option) => (
              <Box component="li" key={option.code} sx={{ '& > img': { mr: 1, flexShrink: 0, pb:1,pt:1 }}} {...props}>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={marker}
                  src={marker}
                  alt=""
                />
                {option?.city || option?.name}, {option?.filter || option.country} {option?.filter ? '' : `(${option.code})`}
              </Box>
            )}
            onChange={changeType}
            renderInput={(params) => <TextField {...params} label={type} required />}
        />
    </>
  )
}

export default AutoComplete;