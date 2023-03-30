import styled from 'styled-components'

import styleVars from '../../styles-global/global'

export const ModalBackdrop = styled.div`
  position: fixed;
  top: ${styleVars.dimensions.spacing0};
  bottom: ${styleVars.dimensions.spacing0};
  left: ${styleVars.dimensions.spacing0};
  right: ${styleVars.dimensions.spacing0};
  background: rgba(0,0,0,0.1);
  padding: ${styleVars.dimensions.spacing48};
  z-index: 1000000;
  overflow-y:${props => props.feedbackformFlag ? 'auto' : 'unset'};
  @media ${styleVars.breakpoints.mobile} {
    overflow-y: auto;
    padding:${props => props.feedbackformFlag ? styleVars.dimensions.spacing48 + ' ' + styleVars.dimensions.spacing0 : styleVars.dimensions.spacing0} ;
  }
  @media ${styleVars.breakpoints.mobile_small} {
    overflow-y: auto;
  }
  @media ${styleVars.breakpoints.tablet},${styleVars.breakpoints.tabletPortrait}, ${styleVars.breakpoints.tabletLandscape}  { 
     overflow-y: auto;
    padding: ${styleVars.dimensions.spacing48} ${styleVars.dimensions.spacing16};
  }
  `

export const ModalLayout = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: 0 auto;
  padding-top: 0;
  background: ${styleVars.color.white};
  border-radius: 3px 3px 0px 0px;
  @media ${styleVars.breakpoints.mobile} {
    width: 100% ;
    height: ${props => props.feedbackformFlag ? '100vh' : null} ;
    position: ${props => props.feedbackformFlag ? 'absolute' : null} ;
  }
`

export const ModalHeader = styled.div`
  text-align: center;
  background: ${styleVars.color.white};
  padding:${styleVars.dimensions.spacing16}  ${styleVars.dimensions.spacing24}  ${styleVars.dimensions.spacing0} ${styleVars.dimensions.spacing24} ;
  border-radius: 3px 3px 0px 0px;
  height: ${styleVars.dimensions.spacing64};
  h2 {
    display: inline;
  }
  a {
    text-decoration: none;
    position:relative;
    top:${styleVars.dimensions.spacing8};
    &:hover {
      text-decoration: none;
    }
    &:focus {
      text-decoration: none;
    }
    float: right;
  }
  line-height: 20px;
  letter-spacing: -0.1;
  
  @media ${styleVars.breakpoints.mobile} {
    position: fixed ;
    right: 0px;
    left: 0px;
    top:0px;
    z-index: 100;
    border-bottom: 1px solid #cdcdcd;
    h2 {
      margin-left: ${styleVars.dimensions.spacing16};
    }
    padding: ${styleVars.dimensions.spacing16};
  }
`

export const ModalBody = styled.div`
  padding: ${props => props.noPad ? styleVars.dimensions.spacing0 : styleVars.dimensions.spacing24} ;
  background: ${styleVars.color.white};
  @media ${styleVars.breakpoints.mobile}{
    margin-left: ${props => !props.feedbackformFlag && styleVars.dimensions.spacing16};
    margin-right: ${props => !props.feedbackformFlag && styleVars.dimensions.spacing16};
    margin-top: ${props => props.feedbackformFlag ? styleVars.dimensions.spacing24 : '98px'} ;
    padding:${props => props.feedbackformFlag ? styleVars.dimensions.spacing24 : styleVars.dimensions.spacing0} ;
  }
`

export const ModalFooter = styled.div`
 padding: ${styleVars.dimensions.spacing24};
 background: ${styleVars.color.white};
 button {
  margin-top: ${styleVars.dimensions.spacing0};
  width: 100px;
  @media ${styleVars.breakpoints.mobile} {
    width:100%;
    margin-bottom: ${styleVars.dimensions.spacing16};
  }
  &:nth-child(1) {
    float: right;
  }
}

  @media ${styleVars.breakpoints.mobile} {
  padding: ${styleVars.dimensions.spacing24} ${styleVars.dimensions.spacing16};
  display: table;
  width:100%;
  button {
    width: 100%;
    margin-bottom: ${styleVars.dimensions.spacing16};
  }
  }
`
export const Hr = styled.hr`
 margin-top: ${styleVars.dimensions.spacing0};
 margin-bottom: ${styleVars.dimensions.spacing0};
`

export const Anchor = styled.a`
  cursor:${props => props.disabled ? 'default' : 'pointer'}
`
