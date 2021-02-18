import React,{useEffect} from 'react';
import { AppBar, Divider, Grid, IconButton, Toolbar,Typography} from "@material-ui/core";
import useStyles from './styles';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Cookie from 'js-cookie';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Searchbar from '../search/Searchbar';
import { Row,Col, Container } from 'react-bootstrap';
import './style.css';



const Header = ({setSearchData}) => {
    const classes=useStyles();
   
    const userR=useSelector((state)=>state.user);
    const {userInfo}=userR;
    const adminR=useSelector((state)=>state.admin);
    const {adminInfo}=adminR;
    const instructorR=useSelector((state)=>state.instructor);
    const {instructorInfo}=instructorR;
    const history=useHistory();
    

 
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if(userInfo)
    Cookie.remove("userInfo");
    history.push('/');
    window.location.reload(true);

    if(instructorInfo){
        Cookie.remove("instructorInfo");
        history.push('/');
        window.location.reload(true);
    }
    
    if(adminInfo){
      Cookie.remove("adminInfo");
      history.push('/');
      window.location.reload(true);
  }

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleCloseLink = (event) => {

    
    

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  useEffect(() => {
  
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
   
    prevOpen.current = open;
  }, [open]);
  



    return (
      
               <>
                <nav className="navbar-container">
              
                 <Link to='/' style={{color:"#23A455",textDecoration:"none"}}>  <h4   className={classes.title}>
                 <VideoLibraryIcon />&nbsp;
                   Tutorial World</h4></Link>

                  <div className={classes.grow} />
   
                   
       
                     
          
                       {userInfo  ?(
                           <div>
                           <Button
                             ref={anchorRef}
                             aria-controls={open ? 'menu-list-grow' : undefined}
                             aria-haspopup="true"
                             onClick={handleToggle}
                           >
                            <IconButton style={{color:"#61CE70",fontSize:'15px'}}> {userInfo.name } <ArrowDropDownIcon /></IconButton>
                           </Button>
                           <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                             {({ TransitionProps, placement }) => (
                               <Grow
                                 {...TransitionProps}
                                 style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                               >
                                 <Paper>
                                   <ClickAwayListener onClickAway={handleCloseLink}>
                                     <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                       <MenuItem onClick={handleClose}>Logout</MenuItem>
                                     </MenuList>
                                   </ClickAwayListener>
                                 </Paper>
                               </Grow>
                             )}
                           </Popper>
                         </div>
                       ): (                       instructorInfo  ?(
                        <div>
                        <Button
                          ref={anchorRef}
                          aria-controls={open ? 'menu-list-grow' : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle}
                        >
                         <IconButton style={{color:"#61CE70",fontSize:'15px'}}> {instructorInfo.name } <ArrowDropDownIcon /></IconButton>
                        </Button>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleCloseLink}>
                                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem component={Link} to="/addvideo" style={{textDecoration:"none"}} onClick={handleCloseLink}>Add Video</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                      </div>
                    ): (                     adminInfo  ?(
                      <div>
                      <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                      >
                        <IconButton style={{color:"#61CE70",fontSize:'15px'}}>{adminInfo.name } <ArrowDropDownIcon /></IconButton>
                      </Button>
                      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleCloseLink}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem component={Link} to="/adminpanel" style={{textDecoration:"none"}} onClick={handleCloseLink}>Admin Panel</MenuItem>

                                  <MenuItem component={Link} to="/addvideo" style={{textDecoration:"none"}} onClick={handleCloseLink}>Add Video</MenuItem>
                                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  ):(<div className={classes.manageButtons}>
                    <Button size="small" disableRipple component={Link} to="/logina"></Button>
                    <Button size="small" disableRipple component={Link} to="/login"  style={{ backgroundColor:"#23A455",color:"#FFF",textDecoration:"none"}}>Login</Button>&emsp;
                    <Button size="small" disableRipple component={Link} to="/signup"  style={{ backgroundColor:"#23A455",color:"#FFF",textDecoration:"none"}}>Sign Up</Button>
                    </div>)

                    ))
                       }
                   
                  
                 
                    
              
                  </nav> 

                   
                  
                      
               </>
        
           
              
           
      
    )
}

export default Header;
