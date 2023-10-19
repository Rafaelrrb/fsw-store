import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "./components/productList"



export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage:{
        gt:0,
      }
    }
  })

  return (
   <div className="">
    <Image 
      src="/banner-home-01.png"
      height={0}
      width={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt="Até 50% desconto esse mês!"
    />
    <div className="mt-8 px-5">
      <Categories />
    
    <div className="mt-8">
      <ProductList products={deals}/>
    </div>

    </div>
   </div>
  )
}
