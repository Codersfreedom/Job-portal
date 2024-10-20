import { customAlphabet } from "nanoid";

const generateOtp = () => {
  const nanoid = customAlphabet("1234567890", 10);
  return (nanoid(5));
};

export default generateOtp;