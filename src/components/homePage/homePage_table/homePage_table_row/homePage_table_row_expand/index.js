import strings from "../../../../../res/strings";
import style from "./homePage_table_row_expand.module.scss"

const HomePageTableRowExpand = (props) => {

    const rowGenerator = () => {
        return props.data.map((item, index) => {
            return (
                <div className={style.rowContainer} key={index}>
                    <div className={style.row_leftContainer}>
                        <p className={style.row_detailsText}>
                            {item[1]}
                        </p>
                    </div>
                    <div className={style.row_rightContainer}>
                        <p className={style.row_detailsTitleText}>
                            {item[0]}
                        </p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.leftContainer}>
                {rowGenerator()}
            </div>
            <div className={style.rightContainer}>
                <img className={style.image} src={props.image} />
            </div>
        </div>
    )
}

export default HomePageTableRowExpand;