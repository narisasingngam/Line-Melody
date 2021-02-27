import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_API } from "../../constants";

export default function useFriendInfo() {
  const [friends, setfriend] = useState({});

  useEffect(() => {
    async function fetchData() {
      await axios.get(BASE_API + "api/friends").then((respones) => {
        setfriend(respones.data);
      });
    }

    fetchData();
  }, [setfriend]);

  return { friends };
}
