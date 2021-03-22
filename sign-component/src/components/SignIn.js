import React, { useState } from 'react'
import { InputGroup, Input, InputLeftElement, Checkbox, Link, Button, Text, Stack, Icon, useToast } from '@chakra-ui/react'
import { AiOutlineWeibo, AiFillWechat, AiOutlineQq } from "react-icons/ai"
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { observer } from 'mobx-react-lite'
import { useSignStore } from '../stores/SignStore'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = event => setEmail(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)
  const signStore = useSignStore()
  const toast = useToast()
  const handleSumit = async () => {
    const res = await signStore.signIn({
      email,
      password
    })
    if (res.status === 200) {
      toast({
        title: "成功",
        description: "登录成功",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } else if (res.status === 422) {
      Object.keys(res.data.errors).forEach(item => {
        toast({
          title: "失败",
          description: `${item}: ${res.data.errors[item]}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      } )
    }
  }
  return <form>
    <Stack mb="30px" color="#b5b5b5">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaUserAlt color="gray.300" />} />
        <Input variant="filled" placeholder="邮箱" value={email} onChange={handleEmailChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
        <Input variant="filled" type="password" placeholder="密码" value={password} onChange={handlePasswordChange} />
      </InputGroup>
      <Stack direction="row" justify="space-between" align="center" mb="20px">
        <Checkbox defaultIsChecked>记住我</Checkbox>
        <Link>登录遇到问题？</Link>
      </Stack>
      <Button colorScheme="blue" onClick={handleSumit}>登录</Button>
    </Stack>
    <Stack position="relative" color="#b5b5b5">
      <Text
        _before={{
          content: "''",
          borderTop: "1px solid #b5b5b5",
          display: "block",
          position: "absolute",
          width: "58px",
          left: "25px",
          top: "9px",
        }}
        _after={{
          content: "''",
          borderTop: "1px solid #b5b5b5",
          display: "block",
          position: "absolute",
          width: "58px",
          right: "25px",
          top: "9px",
        }}
        fontSize="12px"
      >社交帐号登录</Text>
      <Stack direction="row" justify="center">
        <Link><Icon as={AiOutlineWeibo} color="#df2029" boxSize="2.5em" m="0 5px"/></Link>
        <Link><Icon as={AiFillWechat} color="#42c02e" boxSize="2.5em" m="0 5px" /></Link>
        <Link><Icon as={AiOutlineQq} color="#3194d0" boxSize="2.5em" m="0 5px" /></Link>
      </Stack>
    </Stack>
  </form>
}

export default observer(SignIn)