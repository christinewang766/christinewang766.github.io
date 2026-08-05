import React from 'react'
import { useNavigate } from 'react-router-dom'
import { InitBackground, ResizeImg, Arrow, Img, BackButton, ButtonWrap } from './TurnipsElements'


const Turnips = () => {
  let navigate = useNavigate();

  return (
    <>
      <InitBackground id='turnips' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ResizeImg />
        <Arrow />
        <Img />
        <ButtonWrap>
          <BackButton onClick={() => navigate(-1)}>GO BACK</BackButton>
        </ButtonWrap>
      </InitBackground>
    </>
  )
}

export default Turnips
