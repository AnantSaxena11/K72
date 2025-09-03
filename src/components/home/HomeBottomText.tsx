import { Link } from "react-router-dom";

const HomeBottomText = () => {
    return (
        <div className="font-[lausanne-500] flex items-center justify-center gap-2">
            <Link className="text-[6.5vw]  leading-[6vw] uppercase border-5 border-white rounded-full px-10 pt-5  hover:text-green-1100 hover:border-green-1100" to={"/project"}>Projects</Link>
            <Link className="text-[6.5vw]  leading-[6vw] uppercase border-5 border-white rounded-full px-10 pt-5  hover:text-green-1100 hover:border-green-1100" to={"/agence"}>Agence</Link>

        </div>
    )
}
export default HomeBottomText;