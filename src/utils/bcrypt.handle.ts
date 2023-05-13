import { hash, compare } from 'bcryptjs';

const encrypt = async (pass: string) => {
  const passwordHash = hash(pass, 8);
  return passwordHash;
};

const verified = (pass: string, passHash: string) => {
  const isCorrect = compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };
