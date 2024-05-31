import { useSelector } from "react-redux";
import NumPage from "./NumPage";
import log from "../../utils/log";

export default function TotalNumPages() {
    const totalPage = useSelector((state) => state.productImage.totalPage)

    let TotalCountPagesComponent = []
    for (let i = 0; i < totalPage; i++) {
        TotalCountPagesComponent[i] = <NumPage key={i} page={i} />
    }

    log(TotalCountPagesComponent)

    return totalPage > 1 && TotalCountPagesComponent
}
