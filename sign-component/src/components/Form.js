import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Form() {
  return <Tabs 
            w="400px"
            mx="auto"
            p="50px 50px 30px"
            bg="#fff"
            borderRadius="4px"
            boxShadow="0 0 8px rgb(0 0 0 / 10%)"
            verticalAlign= "middle"
            align="center"
         >
    <TabList borderBottom="0">
      <Tab _focus={{boxShadow: "none"}}>登录</Tab>
      <Box as="b" p="10px">·</Box>
      <Tab _focus={{boxShadow: "none"}}>注册</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <SignIn />
      </TabPanel>
      <TabPanel>
        <SignUp />
      </TabPanel>
    </TabPanels>
  </Tabs>
}

export default Form