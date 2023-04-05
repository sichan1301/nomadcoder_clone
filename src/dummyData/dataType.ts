export type courseType = {
  title:string,
  subTitle:string,
  link:string,
  price:priceType,
  level:levelType,
  tech?:string[],
  imgSrc:string
}


export type levelType = "초급" | "중급" | "고급";
export type priceType = "유료" | "무료"

