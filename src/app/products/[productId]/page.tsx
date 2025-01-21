import {Metadata} from "next";

type ProductDetailsProps = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params}: ProductDetailsProps): Promise<Metadata>=>{
    const {productId} = params;
    const title = `Product Iphone ${productId}`
    return{
        title,
    }
}

export default function ProductDetails({params}: ProductDetailsProps) {
    const {productId} = params;
    return <h1>Details About Product {productId}</h1>
}