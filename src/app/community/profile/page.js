import FormData from "./formData";
import Image from "next/image";

const Profile = () => {
  const submit = () => {};
  return (
    <div className="flex flex-col justify-center font-poppins font-normal items-center min-h-[100vh] bg-back">
      <div className="w-[90%] md:w-[35%] flex flex-col aspect-[430/932] justify-between">
        <div className="w-[100%] aspect-[430/788] pt-[20%] flex flex-col items-center justify-around">
          <h1 className="text-[7.5vw] md:text-[3vw] text-product text-center">
            Create Profile
          </h1>
          <div className="aspect-[379/759] w-[100%]">
            <FormData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
