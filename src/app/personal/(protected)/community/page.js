import PersonalCommunityHeader from "@/components/common/communityProfile/personalCommunityHeader";
import Menu from "./Menu";

import SearchPage from "@/components/searchCommunity/searchPage";

import Image from "next/image";
import Navbar from "@/components/homepage/navbar/Navbar";

const {
  default: CommunityHeader,
} = require("@/components/common/communityProfile/communityHeader");

const Community = () => {
  return (
    <div className="w-full h-fit min-h-screen bg-back flex flex-col items-center">
      <Navbar community={false} />
      <div className="w-full md:w-[33%] overflow-y-scroll bg-back">
        <PersonalCommunityHeader />
        <div className="w-full bg-back">
          <Menu />
        </div>
        {/* <SearchPage /> */}
      </div>
    </div>
  );
};

export default Community;
