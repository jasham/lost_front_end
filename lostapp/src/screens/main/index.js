import React, { Component } from 'react'
import styled from 'styled-components'
import { Header } from '../../components/common/header'
import { Flex } from '../../constants/reusableStyles'

const MainWrapper = styled.div`
  position : absolute;
  top : 0px;
  left : 0px;
  width : 100%;
  height : 100%;
`
const BodyWrapper = styled.div`
  height : 550px;
`
const BodySubWrapper = styled(BodyWrapper)`
  width : 90%;
  margin-top : 10px;
`

const LeftWrapper = styled.div`
  width : 48%;
  height : 100%;
`
const SubRightWrapper = styled.div`
  width : 60%;
  height : 100%;
`

const RightWrapper = styled.div`
  width : 48%;
  height : 100%;
`

class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <BodyWrapper>
          <Flex
            jContent={"center"}
            aItems={"center"}
          >
            <BodySubWrapper>
              <Flex
                direction={"row"}
                jContent={"spacebetween"}
                height={"100%"}
              >
                <LeftWrapper>

                </LeftWrapper>
                <RightWrapper>
                  <Flex
                    jContent="flexend"
                    direction="row"
                    height={"100%"}
                  >
                    <SubRightWrapper>

                    </SubRightWrapper>
                  </Flex>
                </RightWrapper>
              </Flex>
            </BodySubWrapper>
          </Flex>
        </BodyWrapper>
      </MainWrapper >
    )
  }
}

export default Main
