import ProductCard from "../features/product/ProductCard";

export default function Home() {

    return (
        <main>
            <section className="grid grid-cols-4 ">
                <ProductCard title={"Minion King of Cool"} image={"https://prod-eurasian-res.popmart.com/default/20231228_175528_391965__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"} />
                <ProductCard title={"Po and Laura Funny Teletubbie"} image={"https://prod-eurasian-res.popmart.com/default/20240428_100718_402960__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"} />
                <ProductCard title={"Labubu Durian Gold Pillow"} image={"https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/440378078_3734862780089082_5857508038075454752_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7OZHz5fpiTAQ7kNvgHNgCom&_nc_ht=scontent.fbkk5-4.fna&oh=00_AfCRwNbrel8I0hJ39DYR6xnRz_FwMWlHdRfbUY4i98JCSg&oe=6635A676"} />
                <ProductCard title={"Faiz Gear"} image={"https://fg.lnwfile.com/_/fg/_raw/zi/m0/th.jpg"} />
                {/* <ProductCard image={ } /> */}

            </section>
        </main>
    )
}
