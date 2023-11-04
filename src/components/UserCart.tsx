import React, { useState } from "react";
import { IUser } from "../interfaces/UserInterface";
import LoadingSpinner from "./LoadingSpinner";
import { toast } from "react-toastify";
import { toastSuccess } from "./Toast";
// import { collection, doc, updateDoc } from "firebase/firestore";
// import { db } from "../firebase/firebase";

type Props = {
  user: IUser;
  setusers(user: IUser[]): void;
  users: IUser[];
};

function UserCart({ user, setusers, users }: Props) {
  const [loadingUpdate, setloadingUpdate] = useState<boolean>(false);

 
  return (
    <div className="m-4 border p-7 w-80 rounded-2xl">
      <p>{user.userPack}</p>
      <p>{user.userName}</p>
      <p>{user.userEmail}</p>
      <p className="font-bold mb-10">Invested: {user.userInvested} $</p>
      <button
        className="w-full p-4 button-background-register border-white  text-white  text-base
    rounded-none hover:border-white bg-blue-900 "
        onClick={async () => {
          try {
            setloadingUpdate(true);
            // await updateDoc(doc(collection(db, "users"), `${user.userID}`), {
            //   userIsAccepted: true,
            // });
            // alert("The user has been accepted");
            // toast.success("Successfully user accepted!", {
            //   position: toast.POSITION.TOP_LEFT,
            // });
            toastSuccess("Successfully user accepted!")

            setusers(users.filter((user2) => user2 !== user));
          } catch (error) {
            console.log(error);
            // alert("Error happened , please try again");
            toast.error("Error happened , please try again!", {
              position: toast.POSITION.TOP_CENTER,
            });
          } finally {
            setloadingUpdate(false);
          }
        }}
      >
        {loadingUpdate ? (
          <div>
            <LoadingSpinner width={"w-5"} height={"h-5"} text={"Loading ..."} />
          </div>
        ) : (
          <p>Accept</p>
        )}
      </button>
    </div>
    // <div>{user.userName}</div>
  );
}

export default UserCart;
