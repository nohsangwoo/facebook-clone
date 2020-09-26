import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/18920144_665050650370132_1259064317888985311_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=jffkXImo7sQAX85VIHw&_nc_ht=scontent-ssn1-1.xx&oh=5b6e2ecf6000a975cc5aa8097ce7d173&oe=5F9301AF"
        title="noh"
      />

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 INformation Center"
      />

      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
