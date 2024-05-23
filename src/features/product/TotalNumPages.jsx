import { useSelector } from "react-redux";
import NumPage from "./NumPage";

export default function TotalNumPages() {
    const totalPage = useSelector((state) => state.productImage.totalPage)

    let TotalCountPagesComponent = []
    for (let i = 0; i < totalPage; i++) {
        TotalCountPagesComponent[i] = <NumPage key={i} page={i} />
    }

    console.log(TotalCountPagesComponent)

    return TotalCountPagesComponent
}
