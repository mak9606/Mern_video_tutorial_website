import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
 toolbar:theme.mixins.toolbar,
 toolbar1:{

     padding:theme.spacing(2),
     display:"flex",
     justifyContent:"center"
 },
 divider:{
     margin:"20px 0"
 },

 item:{
     display:"flex",
     justifyContent:"center",
     marginTop:"100px"
     
 },
 title:{
     margin:theme.spacing(2)
 },
 button:{
 
    backgroundColor: '#23A455',
     color:"white",
     fontSize:"20px", 
     
        '&:hover': {
        backgroundColor: '#23A455',
        color:"white",
        borderColor: '#0062cc',
        boxShadow: 'none',
      },

    
 },
 buttons:{
   margin:"0 40px 150px 40px",
   
   
},
paper:{
    borderRadius:"15px"
},
mainheading:{
    margin:"50px 0"
}
}))