import Header from "./components/header/Header";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import UserLogin from "./components/login/userlogin/UserLogin";
import InstructorLogin from "./components/login/instructorlogin/InstructorLogin";
import SignupUser from "./components/signup/usersignup/SignupUser";
import SignupInstructor from "./components/signup/instructorsignup/SignupInstructor";
import Home from "./components/home/Home";
import AddVideo from "./components/addvideo/AddVideo";
import VideoConfirmed from "./components/videoadded/VideoConfirmed";
import WatchVideo from "./components/watchvideo/WatchVideo";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSpecificVideoData } from "./actions/OneVideoactions";
import Premium from "./components/premium/Premium";
import Confirm from "./components/payconfirm/Confirm";
import AdminLogin from "./components/adminlogin/AdminLogin";
import AdminPanel from "./components/Adminpanel/AdminPanel";
import RegisterSuccess from "./components/userregistersuccess/RegisterSuccess";
import InstructorRegisterSuccess from "./components/Instuctorregistersuccess/InstructorRegisterSuccess";

function App() {
      
  const [currentId, setcurrentId] = useState();
  const [searchData, setSearchData] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificVideoData(currentId));
  }, [currentId,dispatch])


  return (
    <>
     
      <BrowserRouter>
      <Header setSearchData={setSearchData}/>
      <Switch>
        <Route path="/" exact>
          <Home setcurrentId={setcurrentId} searchData={searchData}/>
        </Route>
        <Route path="/signup" exact>
        <Signup />
        
        </Route>
        <Route path="/login" exact>
        <Login />
        
        </Route>
        <Route path="/loginuser" exact>
          <UserLogin />
        </Route>
        <Route path="/logina" exact>
          <AdminLogin />
        </Route>
        <Route path="/logininstructor" exact>
          <InstructorLogin />
        </Route>
        <Route path="/usersignup" exact>
          <SignupUser />
        </Route>
        <Route path="/instructorsignup" exact>
          <SignupInstructor />
        </Route>

        <Route path="/videoadded" exact>
          <VideoConfirmed />
        </Route>
        <Route path="/registersuccess" exact>
          <RegisterSuccess />
        </Route>
        <Route path="/insregistersuccess" exact>
          <InstructorRegisterSuccess />
        </Route>
        <Route path="/premium" exact>
          <Premium />
        </Route>
        <Route path="/confirm" exact>
          <Confirm />
        </Route>
        <Route path="/addvideo" exact>
          <AddVideo />
        </Route>
        <Route path="/adminpanel" exact>
          <AdminPanel />
        </Route>
        <Route path="/watchvideo/:id" component={WatchVideo}>
         
        </Route>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
