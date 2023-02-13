import React, { useState } from "react";

const useCreateTimeTable = () => {
  const [timeTableTypeName, setTimeTableTypeName] = useState("평일");
  return { timeTableTypeName, setTimeTableTypeName };
};

export default useCreateTimeTable;
