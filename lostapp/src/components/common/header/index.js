import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../constants/properties'
import { Flex } from '../../../constants/reusableStyles'
import CusButton from '../button'

const HeaderStyle = styled.div`
  height : 70px;
  background-color : ${colors.white};
  box-shadow :  0px 0px 5px 2px ${colors.transparent3};
  display : flex;
  flex-direction : column;
  justify-content : center;
`
const HeaderLeft = styled.div`
  width : 40%;
  height : 90%;
`
const HeaderRight = styled.div`
  width : 55%;
  height : 90%;
`
const HeaderSubWrapper = styled.div`
  width : 90%;
  height : 100%;
`
const Logo = styled.div`
  width : 100px;
  height : 32px;
  box-shadow : 0px 0px 10px 3px inset ${colors.transparent3};
  border-radius : 5px;
`

export const Header = () => {
  return (
    <HeaderStyle>
      <Flex
        jContent={"center"}
        aItems={"center"}
        direction={"row"}
      >
        <HeaderSubWrapper>
          <Flex
            jContent={"spacebetween"}
            direction={"row"}
          >
            <HeaderLeft>
              <Flex
                jContent={"flexstart"}
              >
                <Logo />
              </Flex>
            </HeaderLeft>
            <HeaderRight>
              <Flex
                jContent={"flexend"}
                aItem={"center"}
                direction={"row"}
              >
                <CusButton
                  lable="Login"
                  color="primary"
                  size="small"
                  variant="contained"
                />
              </Flex>
            </HeaderRight>
          </Flex>
        </HeaderSubWrapper>
      </Flex>
    </HeaderStyle>
  )
}