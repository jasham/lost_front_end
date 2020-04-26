import React from 'react'
import styled from 'styled-components'

export const Flex = styled.div`
  display : flex;
  flex-direction : ${props => props.direction ? "row" : "column"};
  justify-content : ${
  props => props.jContent === "center" ? "center" :
    props.jContent === "flexend" ? "flex-end" :
      props.jContent === "flexstart" ? "flex-start" : "space-between"
  };  
  align-items : ${
  props => props.aItems === "center" ? "center" :
    props.aItems === "flexend" ? "flex-end" :
      props.aItems === "flexstart" ? "flex-start" : "space-between"
  };
  ${props => props.height ? `height : ${props.height}` : ""};
`