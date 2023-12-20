/* eslint-disable react/prop-types */

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateField(props) {
    let name = props.name;
    let changeType = props.changeType;
    let label = props.label;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker disablePast format="DD/MM/YYYY" label={label} onChange={date => changeType({ target: { value:date.format("DD/MM/YYYY"), name: name } })} slotProps={{ textField: { fullWidth: true } }} />
    </LocalizationProvider> 
  )
}


export default DateField;