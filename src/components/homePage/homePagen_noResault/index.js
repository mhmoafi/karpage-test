import strings from "../../../res/strings";
import style from "./homePage_noResault.module.scss"
import searchImage from "../../../res/assets/images/searchIcon.png"
import loadingImage from "../../../res/assets/images/loading.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTruckLoading } from "@fortawesome/free-solid-svg-icons";

const HomePageNoResault = (props) => {

    const viewPreparer = () => {
        if (props.type === "noMatch") {
            return (
                <div className={style.mainContainer}>
                    <p>
                        {strings.home.noResault.notExistText}
                    </p>
                </div>
            )
        } else if (props.type === "empty") {
            return (
                <div className={style.mainContainer}>
                    <img src={searchImage} className={style.searchImage} />
                </div>
            )
        }
    }

    return (
        <>
            {viewPreparer()}
        </>
    )
}

export default HomePageNoResault