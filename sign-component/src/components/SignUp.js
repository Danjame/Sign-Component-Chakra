import React from 'react'
import { InputGroup, Input, InputLeftElement, Text, Link, Button, Stack, Icon } from '@chakra-ui/react'
import { AiFillWechat, AiOutlineQq } from "react-icons/ai"
import { FaUserAlt, FaMobileAlt, FaLock } from 'react-icons/fa'
import { observer } from 'mobx-react-lite'
import { useSignStore } from '../stores/SignStore'

function SignUp() {
  const signStore = useSignStore()
  return <form>
    <Stack mb="30px" color="#b5b5b5">
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaUserAlt color="gray.300" />} />
        <Input variant="filled" placeholder="你的昵称" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaMobileAlt color="gray.300" />} />
        <Input variant="filled" placeholder="手机号" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<FaLock color="gray.300" />} />
        <Input variant="filled" type="password" placeholder="设置密码" />
      </InputGroup>
      <Button colorScheme="blue" onClick={signStore.signUp}>注册</Button>
      <Text>点击 “注册” 即表示您同意并愿意遵守简书
        <Link 
          href="https://www.jianshu.com/p/c44d171298ce"
          isExternal
          _hover={{textDecoration:"none"}}
        >用户协议</Link> 和 <Link 
          href="https://www.jianshu.com/p/2ov8x3"
          isExternal
          _hover={{textDecoration:"none"}}
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