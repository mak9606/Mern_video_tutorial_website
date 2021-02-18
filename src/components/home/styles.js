import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({

    button:{
         
        backgroundColor: '#F64E24',
        color:"white",
        
        '&:hover': {
            backgroundColor: '#F64E24',
            borderColor: '#0062cc',
           
          },
    },
    spacing:{
        marginBottom:'30px'
    }
    

}));