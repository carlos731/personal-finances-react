import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0px 60px; //padding: 0 60px
    user-select: none;
`

export const LeftSide = styled.div``

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: ${props => props.theme.FONT_SIZES.xl};
    color: ${props => props.theme.COLORS.navbarColor};
    cursor: pointer;
    transition: 0.4s;
    
    &:hover {
        background-color: ${props => props.theme.COLORS.navbarBackgroundHover};
    }
`