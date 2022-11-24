import styled, { css } from "styled-components"

const ThumbStyled = {
  grass: css`
  background-color: #00a65c;
`,
  ground: css `
  background-color: #bf994e;
`,
  rock: css`
  background-color: #858b96;
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
  background-color: #f1f1f1;
`,
  fairy: css`
  background-color: rgba(255, 192, 203, 0.863);
`,
  fire: css`
  background-color: #e54120;
`,
  water: css`
  background-color: #3991ad;
`,
  psychic: css`
  background-color: #d8dfec;
  `,
  dark: css`
  background-color: #939DA7;
;
  `

}

export const ThumbContainer = styled.div`
    display: flex;
    ${({ variant }) => ThumbStyled[variant]};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    margin: 0.3rem;
    border: 1px solid #efefef;
    border-radius: 1rem;
    width: 650px;
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
