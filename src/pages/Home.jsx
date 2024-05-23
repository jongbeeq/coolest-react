import ProductCard from "../features/product/ProductCard";

export default function Home() {

    const allProduct = [
        {
            id: 1, title: "Minion King of Cool", description: "minion model height 10cm Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus voluptas earum vero dolor animi quidem maxime explicabo magni temporibus magnam pariatur quas!", balance: 27, maxPrice: 3280, minPrice: 350, images: [{ id: 1, src: "https://prod-eurasian-res.popmart.com/default/20231228_175528_391965__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp" }], categorys: [{
                id: 1, title: 'toy',
            }]
        },
        {
            id: 2, title: "Labubu Durian Gold Pillow", description: "minion model height 10cm Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, possimus voluptas earum vero dolor animi quidem maxime explicabo magni temporibus magnam pariatur quas!", balance: 27, maxPrice: 3280, minPrice: 350, images: [{ id: 1, src: "https://prod-eurasian-res.popmart.com/default/20231215_094230_101577__1200x1200.jpg" }], categorys: [{
                id: 1, title: 'toy',
            }]
        },
    ]


    return (
        <main>
            <section className="w-[80vw] m-auto grid grid-cols-4 gap-y-[2%] gap-x-[2%]">
                {allProduct.map((product) => <ProductCard key={product.id} product={product} />)}
            </section>
        </main >
    )
}
