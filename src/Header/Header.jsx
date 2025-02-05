




// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// // import logo from '../Image/1.png';

// import {
//   AppBar,
//   Box,
//   Button,
//   Drawer,
//   IconButton,
//   Toolbar,
//   Typography,
//   Menu,
//   MenuItem,
//   Avatar,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import "../Header/Header.css";
// import { get_profile, handleLoggedOut, handleRegistration } from "../Redux/Slice/Slice";
// import Swal from "sweetalert2";

// const Header = () => {
//   const { isLogin, userpic } = useSelector((s) => s.contents);
//   const [is_loggedIn, setis_loggedIn] = useState("");
//   const Name = localStorage.getItem("Name");

//   useEffect(() => {
//     setis_loggedIn(Name);
//   }, [Name]);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(get_profile());
//   }, [dispatch]);

//   const navigate = useNavigate();
//   const logout = () => {
//     dispatch(handleLoggedOut());
//     localStorage.removeItem("token")
//     navigate("/login");
//   };

//   useEffect(() => {
//   }, [isLogin]);



//   const onHandleClick = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, logout!",
//       cancelButtonText: "Profile!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         dispatch(handleLoggedOut());
//         localStorage.removeItem("token");
//         navigate("/login");
//       }
//       else if (result.isDismissed) {
//         navigate('/profilepage')

//       }
//     }

//     );
//   };


//   const [mobileOpen, setMobileOpen] = useState(false);
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography className="phlogo">
//         <img src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-hindu-religion-symbol-transparent-png-image_8536789.png" className="logoimg" alt="logo" />
//       </Typography>

//       <ul className="mobile-navigation">
//         <li>
//           <span className="mobile_name">
//             {isLogin}
//           </span>
//           {isLogin ? (
//             // <Link to="/profilepage">
//             <Avatar
//               src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
//               className="mobile_pic"
//               onClick={onHandleClick}

//             />
//             //  </Link>
//           ) : null}
//         </li>
//         <li>
//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/"}>
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/about"}>
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/blog"}>
//             Blog
//           </NavLink>
//         </li>
//         <li>
//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/festivalList"}>
//             Festivals
//           </NavLink>
//         </li>
//         <li>

//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/gallery"}>
//             Gallery
//           </NavLink>
//         </li>
//         <li>

//           <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//             to={"/contact"}>
//             Contact
//           </NavLink>
//         </li>
//         {isLogin ? (
//           <li style={{ display: 'block' }}>
//             <Button
//               onClick={() => {
//                 logout();
//                 dispatch(handleRegistration());
//               }}
//             >
//               <ExitToAppIcon
//                 sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
//               />
//             </Button>
//           </li>
//         ) : (
//           <li style={{ display: 'block' }}>
//             <Link to="/login">
//               <AccountCircleIcon
//                 sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
//               />
//             </Link>
//           </li>
//         )}
//       </ul>
//     </Box>
//   );

//   return (
//     <div className="navbar">
//       <AppBar
//         className="AppBar"
//         component={"nav"}
//         sx={{ background: 'linear-gradient(to right, darkred, #FFC107)' }}
//       // sx={{
//       //   background: 'linear-gradient(to right, red, yellow)',
//       // }}
//       >
//         <Toolbar className="toolbar">
//           <Typography className="logoimg">
//             <img
//               src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-hindu-religion-symbol-transparent-png-image_8536789.png"
//               alt="logo"
//             />
//           </Typography>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ display: { md: "none" } }}
//             onClick={handleDrawerToggle}
//           >
//             <MenuIcon className="hamburger" />
//           </IconButton>
//           <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
//             <ul className="navigation-menu">
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/"}>
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/about"}>
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/blog"}>
//                   Blog
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/gallery"}>
//                   Gallery
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/festivalList"}>
//                   Festivals
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink className={({ isActive }) => (isActive ? 'navlink active' : 'navlink')}
//                   to={"/contact"}>
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </Box>
//           <Box className="profile">
//             <Box sx={{ display: { sm: "none", md: "block", xs: "none", mt: 4, m: 6 } }}>
//               {isLogin}
//               {isLogin ? (
//                 // <Link to="/profilepage">
//                 <Avatar
//                   onClick={onHandleClick}
//                   src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
//                   className="profile_pic"
//                 />
//                 //  </Link>
//               ) : null}
//             </Box>
//             <Box>
//               {isLogin ? (
//                 <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
//                   <Button
//                     onClick={() => {
//                       logout();
//                       dispatch(handleRegistration());
//                     }}
//                   ><ExitToAppIcon
//                       sx={{
//                         fontSize: "2.2rem",
//                         marginRight: "7px",
//                         color: "black",
//                         marginTop: "4px",
//                       }}
//                     />

//                   </Button>
//                 </Box>
//               ) : (
//                 <Box sx={{ display: { sm: "none", md: "block", xs: "none" } }}>
//                   <Link to="/login">
//                     <Button className="login_button">Login</Button>
//                   </Link>
//                 </Box>
//               )}
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           sx={{
//             display: { sm: "block", md: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: "240px",
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       <Toolbar />
//     </div>
//   );
// };

// export default Header;












import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import logo from '../Image/1.png';

import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../Header/Header.css";
import { get_profile, handleLoggedOut, handleRegistration } from "../Redux/Slice/Slice";
import Swal from "sweetalert2";

const Header = () => {
  const { isLogin, userpic } = useSelector((s) => s.contents);
  const [is_loggedIn, setis_loggedIn] = useState("");
  const Name = localStorage.getItem("Name");

  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_profile());
  }, [dispatch]);

  const navigate = useNavigate();
  const logout = () => {
    dispatch(handleLoggedOut());
    localStorage.removeItem("token");
    navigate("/login");
  };

  const onHandleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Profile!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleLoggedOut());
        localStorage.removeItem("token");
        navigate("/login");
      } else if (result.isDismissed) {
        navigate("/profilepage");
      }
    });
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography className="phlogo">
        <img
          src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-hindu-religion-symbol-transparent-png-image_8536789.png"
          className="logoimg"
          alt="logo"
        />
      </Typography>

      <ul className="mobile-navigation">
        <li>
          <span className="mobile_name">{isLogin}</span>
          {isLogin ? (
            <Avatar
              src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
              className="mobile_pic"
              onClick={onHandleClick}
            />
          ) : null}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/festivalList"}
          >
            Festivals
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/gallery"}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
        {isLogin ? (
          <li>
            <Button
              onClick={() => {
                logout();
                dispatch(handleRegistration());
              }}
            >
              <ExitToAppIcon
                sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
              />
            </Button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <AccountCircleIcon
                sx={{ fontSize: "2.2rem", marginRight: "5px", color: "black" }}
              />
            </Link>
          </li>
        )}
      </ul>
    </Box>
  );

  return (
    <div className="navbar">
      <AppBar
        className="AppBar"
        component={"nav"}
        sx={{ background: "linear-gradient(to right, darkred, #FFC107)" }}
      >
        <Toolbar className="toolbar">
          <Typography className="logoimg">
            <img
              src="https://png.pngtree.com/png-clipart/20220911/original/pngtree-hindu-religion-symbol-transparent-png-image_8536789.png"
              alt="logo"
            />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon className="hamburger" />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/blog"}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/gallery"}
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/festivalList"}
                >
                  Festivals
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navlink active" : "navlink"
                  }
                  to={"/contact"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </Box>
          <Box className="profile">
            {isLogin ? (
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" }}}>
                <Avatar
                  onClick={onHandleClick}
                  src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`}
                  className="profile_pic"
                />
                <Button
                  onClick={() => {
                    logout();
                    dispatch(handleRegistration());
                  }}
                >
                  {/* <ExitToAppIcon
                    sx={{
                      fontSize: "2.2rem",
                      marginRight: "7px",
                      color: "black",
                      marginTop: "4px",
                    }}
                  /> */}
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                <Link to="/login">
                  <Button className="login_button">Login</Button>
                </Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "240px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </div>
  );
};

export default Header;