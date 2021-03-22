import React, { useState } from 'react'
import { InputGroup, Input, InputLeftElement, Text, Link, Button, Stack, Icon, useToast } from '@chakra-ui/react'
import { AiFillWechat, AiOutlineQq } from "react-icons/ai"
import { FaUserAlt, FaMobileAlt, FaLock } from 'react-icons/fa'
import { observer } from 'mobx-react-lite'
import { useSignStore } from '../stores/SignStore'

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleNameChange = event => setUsername(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
  const handlePasswordChange = event => setPassword(event.target.value)
  const signStore = useSignStore()
  const toast = useToast()
  const handleSumit = async () => {
    const res = await signStore.signUp({
      username,
      email,
      password
    })
    if (res.status === 200) {
      toast({
        title: "成功",
        description: "注册成功",
        status: "success",
        duration: 9000,
        isClosable: true,
      })
    } else if (res.status === 422) {
      Object.keys(res.data.errors).forEach(item => {
        toast({
          title: "注册失败",
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
        <Input variant="filled" placeholder="你的昵称" value={username} onChange={handleNameChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaMobileAlt color="gray.300" />} />
        <Input variant="filled" placeholder="邮箱" value={email} onChange={handleEmailChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
        <Input variant="filled" type="password" placeholder="设置密码" value={password} onChange={handlePasswordChange} />
      </InputGroup>
      <Button colorScheme="blue" onClick={handleSumit}>注册</Button>
      <Text>点击 “注册” 即表示您同意并愿意遵守简书
    <Link
      href="https://www.jianshu.com/p/c44d171298ce"
      isExternal
      _hover={{ textDecoration: "none" }}
    >用户协议</Link> 和 <Link
      href="https://www.jianshu.com/p/2ov8x3"
      isExternal
      _hover={{ textDecoration: "none" }}
    >隐私政策</Link> 。
  </Text>
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
      >社交帐号直接注册</Text>
      <Stack direction="row" justify="center">
        <Link><Icon as={AiFillWechat} color="#42c02e" boxSize="2.5em" m="0 5px" /></Link>
        <Link><Icon as={AiOutlineQq} color="#3194d0" boxSize="2.5em" m="0 5px" /></Link>
      </Stack>
    </Stack>
  </form>
}

export default observer(SignUp)