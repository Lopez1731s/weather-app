import { useState } from "react";
import axios from "axios";

const usePost = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = ({ data }) => {
    const token = "token aqui";

    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    updateData({
      pending: true,
      data: undefined,
      error: undefined,
    });

    axios
      .post("https://api.m3o.com/v1/weather/Forecast", data, header)
      .then((response) => {
        updateData({
          pending: false,
          data: response.data.forecast,
          error: undefined,
        });
      })
      .catch((err) => {
        updateData({
          pending: false,
          data: undefined,
          error: "error del api",
        });
      });
  };

  return { ...postData, execute };
};

export default usePost;
