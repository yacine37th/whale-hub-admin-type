import React, { useEffect, useState } from 'react'
import HomeNavBar from '../home/HomeNavBar'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, goldenPack } from '../firebase/firebase';
import { TNormalUser } from '../interfaces/UserInterface';

type Props = {}

function GoldenPackUsers({}: Props) {
  const [users, setusers] = useState<TNormalUser[]>([]);
  const [selectedUsers, setselectedUsers] = useState<TNormalUser[]>([]);
  const [selectedUsersToWithdraw, setselectedUsersToWithdraw] = useState<TNormalUser[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [search, setsearch] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [withdrewPercentage, setwithdrewPercentage] = useState<number>(0);
  const [withdrewPercentage2, setwithdrewPercentage2] = useState<number>(0);

  const [totalin, settotalin] = useState<number>(0);
  // const q = query(
  //   collection(db, "users"),
  //   where("userIsAccepted", "==", true),
  //   where("userPack", "==", "GOLDEN PACK")
  // );
  const [loadingUpdate, setloadingUpdate] = useState(false);
  const [loadingUpdate2, setloadingUpdate2] = useState(false);


  const userArray : TNormalUser[] = [];
  let userTotalInvested :number= 0;

  const getdata = async () => {
    try {
      setloading(true);
      const querySnapshot = await getDocs(goldenPack);
      querySnapshot.forEach((doc) => {
        if (!userArray.includes(doc.data())) {
          userArray.push(doc.data());
        }
        doc.data().userInvested.forEach((element :number) => {
          userTotalInvested += Number(element);
        });
      });
      setusers(userArray);

      settotalin(Number(userTotalInvested.toFixed(2)));
    } catch (error) {
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
    <HomeNavBar />
    </>
  )
}

export default GoldenPackUsers