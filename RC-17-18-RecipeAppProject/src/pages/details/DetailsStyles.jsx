import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #3A0088;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1.5rem;
  border-radius: 15px;
  background-color: #7da3bb;;;
  /* background-color: #e1f1dd; */
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

export const ImgContainer = styled.div`
  /* resmin div i */
  background-color: #930077;
  padding: 6px;
  border-radius: 10px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  color:  gold;
  text-shadow: -1px -1px 5px pink;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 25px;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 150px;
    height: 140px;
  }
`;

export const IngredContainer = styled.div`
  /* alttaki bilgiler, içindekiler */
  width: 300px;
  font-size: 1.4rem;
  font-weight: 900;
  padding:  5px 15px;
  margin: 1rem;
  background-color: gold;
  border: 5px solid #930077;
  border-radius: 10px;
  color: #620050;
`;

export const OtherPart = styled.div`
  /* üstteki bilgiler */
  display: flex;
  flex-direction: column;
  line-height: 15px;
  background-color: rgb(255, 235, 202);
  border-radius: 10px;
  color:#3A0088;
  font-weight: 600;
  border: 5px solid #3A0088;

  width: 400px;
  text-align: right;
  font-size: 1.3rem;
  margin: 1rem;

  div{
    text-align: center;
  }
`;
