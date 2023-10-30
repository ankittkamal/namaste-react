import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   const dispatch = useAppDispatch();
  //   const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  //   const handleSearch = () => {
  //     if (location.pathname !== "/search") navigate("/search");
  //     else {
  //       dispatch(clearVideos());
  //       dispatch(getSearchPageVideos(false));
  //     }
  //   };

  return (
    <div className="flex justify-between items-center  px-5 h-14 bg-[#0f0f0f] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600 " />
            <span className="text-xl font-medium">YouTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5 ">
        <form
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     handleSearch();
        //   }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-[26rem] bg-zinc-900 focus:outline-none border-none"
                // value={searchTerm}
                // onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className="text-xl cursor-pointer"
                //  {`text-xl cursor-pointer ${
                //   !searchTerm ? "invisible" : "visible"
                // }`}
                // onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-6 items-center text-xl ">
        <BsCameraVideo />

        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <span className="text-3xl ml-1 mx-5">
          <FaCircleUser />
        </span>
      </div>
    </div>
  );
}
