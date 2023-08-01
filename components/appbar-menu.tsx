import * as React from "react"
import Link from "next/link"
import {
  AdbOutlined,
  CategoryOutlined,
  DashboardOutlined,
  HomeOutlined,
  InfoOutlined,
} from "@mui/icons-material"
import ChecklistIcon from "@mui/icons-material/Checklist"
import HomeIcon from "@mui/icons-material/Home"
import SettingsIcon from "@mui/icons-material/Settings"
import StarIcon from "@mui/icons-material/Star"
import SupportIcon from "@mui/icons-material/Support"
import { Button, IconButton } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

import { siteConfig } from "@/config/site"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"

import { buttonVariants } from "./ui/button"
import { UserAccountNav } from "./user-account-nav"

const LINKS = [
  { text: "Home", href: "/", icon: <HomeOutlined /> },
  { text: "Catolog", href: "/catolog", icon: <CategoryOutlined /> },
  { text: "About", href: "/about", icon: <InfoOutlined /> },
]

export default async function MenuAppBar() {
  const user = await getCurrentUser()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ backgroundColor: "background.paper" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DashboardOutlined
              sx={{ color: "#444", mr: 2, transform: "translateY(-2px)" }}
            />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1 }}
          >
            {siteConfig.name}
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {LINKS.map((item) => (
              <Button
                key={item.text}
                startIcon={item.icon}
                sx={{ color: "darkgray" }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {user ? (
            <UserAccountNav user={user} />
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              <Typography variant="h6" noWrap component="div" color="black">
                {"Login"}
              </Typography>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
