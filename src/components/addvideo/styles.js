import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    item:{
        display:"flex",
        justifyContent:"center",
        marginTop:"100px"
        
    },
    mainheading:{
        margin:"50px 0"
    },
    title:{
        padding:theme.spacing(2)
    },
    control:{
        margin:"20px 0",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    },
    textfield:{
     margin:theme.spacing(2)   
    },
  
    button:{
        padding:theme.spacing(2)
    },
    link:{
        textDecoration:"none"
    },
    label:{
        marginBottom:"5px"
    }
}));