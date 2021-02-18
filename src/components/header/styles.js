import {makeStyles} from '@material-ui/core/styles';

const drawerWidth=0;

export default makeStyles((theme)=>({
    appbar:{
       boxShadow:"none",
       borderBottom:"solid 1px rgba(0,0,0,0.12)",
       backgroundColor:'#000',

    },
       grow:{
           
          flexGrow:1
          

       },
        
       butons: {
           marginLeft:"150px"
       },
       image:{
           marginRight:"10px",
           
           
       },
       title:{
        color:"#23A455",
           display:"flex",
           alignItems:"center",
           textDecoration:"none",
           marginLeft:"20px",
           [theme.breakpoints.down('xs')]:{
               fontSize:"12px"

           },

       },
       button:{
           color:"#61CE70",
        //    backgroundColor:"#23A455",
           '&:hover':{
            color:"#61CE70",
            // backgroundColor:"#23A455",
           },
           [theme.breakpoints.down('sm')]:{
            fontSize:`10px`
        },
       },
       buttons:{
        backgroundColor:"#61CE70",
        color:"#FFF",
        '&:hover':{
            backgroundColor:"#61CE70",
            color:"#FFF"

        },
        [theme.breakpoints.down('sm')]:{
            fontSize:`10px`
        }
    },
       root: {
        display: 'flex',
      },
      paper: {
        marginRight: theme.spacing(2),
      },
      manageButtons:{
        [theme.breakpoints.up('sm')]:{
            marginRight:"20px"
        },
        [theme.breakpoints.down('sm')]:{
            marginRight:"8px"
        }
        
      }
}))