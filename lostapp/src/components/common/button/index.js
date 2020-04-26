import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const StyledButton = styled(Button)``

const CusButton = (props) => {
  return (
    <StyledButton
      color={props.color}
      size={props.size}
      variant={props.variant}
    >
      {props.lable}
    </StyledButton>
  )
}

export default CusButton