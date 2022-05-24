import logo from "../../../res/assets/images/karpageLogo.png"
import loadingGif from "../../../res/assets/images/loading.gif"
import style from "./loading.module.scss"

const LoadingPage = (props) => {
    const viewPreparer = () => {
        if (props && props.type === "local") {
            return (
                <div className={style.localMainContainer}>
                    <img className={style.loadingGif} src={loadingGif} />
                </div>
            )
        } else {
            return (
                <div className={style.mainContainer}>
                    <img className={`${style.logoImage} ${style.blink_image}`} src={logo} />
                </div>
            )
        }
    }
    return (
        <>
            {viewPreparer()}
        </>
    );
};

export default LoadingPage;