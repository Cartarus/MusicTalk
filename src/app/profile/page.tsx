import { IoPersonCircle } from "react-icons/io5";
import { ProfileActions } from "../components/Profile/ProfileActions";
import { ProfileDescription } from "../components/Profile/ProfileDescription";
import { ProfileTags } from "../components/Profile/ProfileTags";

export default function profilePage() {
  return (
    <div className="px-2 md:px-0 md:w-1/2  mx-auto">
      <div className="flex items-center mb-4">
        <IoPersonCircle size={70} />
        <p className="text-2xl">CristianG</p>
      </div>
      <ProfileActions/>
      <ProfileDescription/>
      <ProfileTags/>
    </div>
  );
}