import React, { useState } from "react";

const useCreateTimeTable = () => {
  const [timeTableTypeName, setTimeTableTypeName] = useState("타입 선택");
  return { timeTableTypeName, setTimeTableTypeName };
};

export default useCreateTimeTable;
