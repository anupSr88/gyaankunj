import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  ProSidebar,
  ProSidebarProvider
} from "react-pro-sidebar";
import './PrincipalSidebar.css'
import dashboardImg from '../../Images/dashboardImg.svg'
import sidebarBackdrop from '../../Images/sidebarBackdrop.svg'
import { Row, Col } from "react-bootstrap";

const PrincipalSidebar = () => {
  return (
    <div className="sidebarStyling">
    <ProSidebarProvider>
      <Sidebar>
        <Menu className="sidebarMenu" style={{ background: `url(${sidebarBackdrop})` }}>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Dashboard </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Master Routine </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Lesson Plan </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Attendance </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Report </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Resources </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Annoucements </MenuItem></Col></Row>
           <Row className="sidebarMenuInner"><Col md={1}><img alt="close" src = {dashboardImg} /></Col><Col md={10}><MenuItem> Notifications </MenuItem></Col></Row>
        </Menu>
      </Sidebar>
    </ProSidebarProvider>
    </div>
  );
};

export default PrincipalSidebar;
