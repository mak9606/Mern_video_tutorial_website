import { Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSuccess = () => {
    return (
        <div>
                    <div style={{margin:'200px 30px'}}>
            <Typography variant="subtitle1" style={{color:"#FFF"}}>User Registered succcesfully. <Link to="/loginuser"  style={{textDecoration:"none",color:"#23A455"}}>Login</Link></Typography>
        </div>
        </div>
    )
}

export default RegisterSuccess;
