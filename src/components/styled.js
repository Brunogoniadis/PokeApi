import styled, { css } from "styled-components"

const ThumbStyled = {
  grass: css`
  background-color: green;
`,
  rock: css`
  background-color: rgb(148, 81, 81);
`,
  ghost: css`
  background-color: rgb(247, 247, 247);
`,
  electric: css`
  background-color: rgb(255, 255, 161);
`,
  bug: css`
  background-color: #F6D6A7;
`,
  poison: css`
  background-color: #e0a7f6;
`,
  normal: css`
  background-color: #F4F4F4;
`,
  fairy: css`
  background-color: rgba(255, 192, 203, 0.863);
`,
  fire: css`
  background-color: #FBE3DF;
`,
  grass: css`
  background-color:#E2F9E1;
`,
  water: css`
  background-color:#E0F1FD;
`,

}

export const ThumbContainer = styled.div`
    display: flex;
    ${({ variant }) => ThumbStyled[variant]};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0 ;
    margin: 0.3rem;
    border: 1px solid #efefef;
    border-radius: 1rem;
    min-width: 160px;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
`




export const Number = styled.div`

`
export const image = styled.div`

`
export const Type = styled.div`


`
export const Detail = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
