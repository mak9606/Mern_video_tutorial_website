import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    paper:{
        
     
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
 
     
    },
    search:{
      width:'400px',
      fontSize:"20px",
      height:"40px",
      border:"1px solid rgba(0,0,0,0.12)",
      padding:"20px",
     [theme.breakpoints.down('sm')]:{
       width:"200px",
       height:"20px"
     }
      
    }

}));