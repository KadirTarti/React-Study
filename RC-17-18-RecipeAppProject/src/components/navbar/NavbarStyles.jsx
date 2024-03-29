import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-between; //yatayda aralıklı objeler halinde ortala
  align-items: center; // dikeyde ortala
  flex-wrap: wrap;
  /* Varsayılan olarak esnek öğeler tek bir satıra sığmaya çalışırlar. Gerektiğinde birden fazla satıra yaymak için bu özelliği kullanabilirsiniz */
  height: 93px;
  padding-left: 3rem;
  font-size: 1.5rem;
  background: #3a0088; 
  
`;

export const MenuLink = styled(Link)`
  /* navbardaki 3 kelime ... tek tek about vs yazanların özellikleri YEŞİL*/

  font-optical-sizing: auto;

  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  /* kelimelerin altı çizili olmasın */
  transition: all 0.3s ease-in;
  font-size: 2rem;
  &:hover {
    color: orange;
    text-shadow: 1px 1px 2px white;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* hamburger meydana çıktığında sonrasında tıklanınca linklerde
    /* ekran küçülünce alttaki stiller olsun */
    overflow: hidden;
    width: 91%;
    background-color: lightblue;
    color: darkblue;
  }
`;
export const Menu = styled.div`
  /* navbardaki 3 kelime about ...hepsini içine alan sarmalın (kutunun ) özellikleri*/
  background-color: #930077;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-weight: 600;
  &:hover{
    background-color: lightyellow ;
    color: darkblue;
  }
  /* içinde bulunduğu div in  stillerine göre ayarla kendini, bunu yazmazsak food app in altında kalacak */
  /* 3 kelime  açılınca üstteki özelliklerde olsun*/
  @media (max-width: 768px) {
   /* uzun yazı olurda taşarsa gizle (hamburgere dönüşünce)*/
    flex-direction: column;

    width: 60%;
    margin: auto;
    
    //hamburgere tıklanınca linkleri göster, açıksa gizle:
    display: ${({showBurger})=>(showBurger ? 'flex' : 'none')};
  }
/* export const Mlink=styled.a */
  a {
    padding: 1.5rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    /* kelimelerin altı çizili olmasın */
    color: #02475e;

    transition: all 0.3s ease-in;
    font-size: 1.5rem;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
    &:hover {
      color: orange;
      text-shadow: 1px -2px 2px black;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      /* hamburger meydana çıktığında 
    /* ekran küçülünce alttaki stiller olsun */
    border-radius: 10px;  
    width: 91%;
    }
  }
`;
export const Logo = styled(MenuLink)`
  padding: 1rem 0;
  color: orange;
  text-shadow: 1px -2px 2px white;
  font-weight: 800;
  i {
    
  }
  span {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    color: #930077;
  }
`;

export const Hamburger = styled.div`
  display: none;
  /* Bir öğeyi gizleme özelliği  Öğe gizlenecek ve sayfa, öğe orada değilmiş gibi alttaki stiller yok gibi görüntülenecektir: hamburger ekran büyükken görünmesin 768 den küçülmeye başlayınca görünsün*/
  
  cursor: pointer;
  
@media (max-width: 768px) {
display: flex;

}

`;
