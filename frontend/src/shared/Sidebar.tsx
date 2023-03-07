import { useState } from "react"
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar"
import { Box, IconButton, Typography, Avatar } from "@mui/material"
import { Link } from "react-router-dom"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined'
import PlaylistAddCheckCircleOutlinedIcon from '@mui/icons-material/PlaylistAddCheckCircleOutlined'

export const SidebarApp = () => {
  
  const [ selected, setSelected ] = useState("Dashboard")
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          {/*<MenuItem icon={<MenuOutlinedIcon />} onClick={() => collapseSidebar()} style={{ margin: "5px 0 5px 0"}}/>*/}
          <MenuItem>
            { collapsed ?
              <IconButton onClick={() => collapseSidebar()}>
                <MenuOutlinedIcon />
              </IconButton>
            :
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" fontWeight={"bold"}>
                  Mi Mascota
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            }
          </MenuItem>
          {!collapsed && (
            <Box sx={{mb:4, mt:3}}>
              <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <Avatar alt="Remy Sharp" src="../../src/assets/images/avatar/user.svg" sx={{ width: 65, height: 65, mb: 2 }} />
              </Box>
              <Box textAlign={"center"}>
                <Typography fontWeight={"bold"} fontSize="20px" sx={{m: "10px 0 0 0"}}>Andres</Typography>
                <Typography fontSize="15px">Medico</Typography>
              </Box>
            </Box>

          )}
          <MenuItem 
            component={<Link to="/documentation" />} 
            icon={<HomeOutlinedIcon />}
          > 
            <Typography>Dashboard</Typography>
          </MenuItem>

          <MenuItem 
            component={<Link to="/patients" />}
            icon={<PetsOutlinedIcon />}
          > 
            <Typography>Pacientes</Typography>
          </MenuItem>

          <MenuItem 
            component={<Link to="/clients" />}
            icon={<PersonOutlineOutlinedIcon />}
          > 
            <Typography>Clientes</Typography>
          </MenuItem>

          <SubMenu label="Inventario" icon={<Inventory2OutlinedIcon />}>
            <MenuItem
              component={<Link to="/product" />}
              icon={<ProductionQuantityLimitsOutlinedIcon />}
            > 
              <Typography>Productos</Typography>
            </MenuItem>
            <MenuItem              
              component={<Link to="/category" />}
              icon={<FactCheckOutlinedIcon />}
            >  
              <Typography>Categorias</Typography> 
            </MenuItem>
          </SubMenu>

          <SubMenu label="Almacen" icon={<InventoryOutlinedIcon />}>
            <MenuItem              
              component={<Link to="/purchase" />}
              icon={<ArchiveOutlinedIcon />}
            >  
              <Typography>Ordenes de compra</Typography> 
            </MenuItem>            
            <MenuItem              
              component={<Link to="/transfer" />}
              icon={<CompareArrowsOutlinedIcon />}
            >  
              <Typography>Traslados</Typography> 
            </MenuItem>  
          </SubMenu>

          <MenuItem              
            component={<Link to="/diary" />}
            icon={<EventAvailableOutlinedIcon />}
          >  
            <Typography>Agenda</Typography> 
          </MenuItem>  

          <MenuItem              
            component={<Link to="/sales" />}
            icon={<MonetizationOnOutlinedIcon />}
          >  
            <Typography>Ventas</Typography> 

          </MenuItem>  
          <MenuItem              
            component={<Link to="/supplier" />}
            icon={<Diversity3OutlinedIcon />}
          >  
            <Typography>Proveedores</Typography> 
          </MenuItem>  

          <SubMenu label="Configuracion" icon={<SettingsOutlinedIcon />}>
            <MenuItem              
              component={<Link to="/species" />}
              icon={<ListAltOutlinedIcon />}
            >  
              <Typography>Especies</Typography> 
            </MenuItem>  
            <MenuItem              
              component={<Link to="/races" />}
              icon={<PlaylistAddCheckCircleOutlinedIcon />}
            >  
            <Typography>Razas</Typography> 
            </MenuItem>          
          </SubMenu>

        </Menu>
      </Sidebar>
    </div>
  )
}