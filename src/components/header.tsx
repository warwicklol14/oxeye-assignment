import { Link } from "gatsby"
import React from "react"
import { Text, Stack } from "@chakra-ui/core"

interface HeaderProps {
  siteTitle:string;
}

const Header = ({ siteTitle = `` } : HeaderProps) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Stack isInline justifyContent="space-around" p="4">
      <Link to="/"><Text as="h1" color="white" fontSize="2xl" fontWeight="bold">{siteTitle}</Text></Link>
      <Stack isInline>
        <Link to="/teammembers"><Text as="span" color="white" fontSize="lg" mr={8}>Meet the Team</Text></Link>
        <Link to="/contactus"><Text as="span" color="white" fontSize="lg">Contact Us</Text></Link>
      </Stack>
    </Stack>
  </header>
)

export default Header
