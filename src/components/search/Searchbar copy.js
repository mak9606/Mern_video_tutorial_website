import React, { useState } from 'react';
import { IconButton, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';

const Searchbar = ({setSearchData}) => {
    const classes=useStyles();
    
    const [lookForItem, setlookForItem] = useState('');
    
    const submitHandler=(e)=>{
        e.preventDefault();
        setSearchData(lookForItem);
    }

    return (
        
        <div align="center" className={classes.paper}>
            <form onSubmit={submitHandler}>
 <input 
 type="text" 
 className={classes.search} 
 placeholder="Search" 
 value={lookForItem} onChange={(e)=>setlookForItem(e.target.value)}
 />
 <IconButton type="submit">
     <SearchIcon style={{fontSize:"43",backgroundColor:"#23A455",color:"#FFF",marginBottom:"8px"}}/>
 </IconButton>
 </form>
 </div>
    )
}

export default Searchbar;
