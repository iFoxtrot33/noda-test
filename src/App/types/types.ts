export type User = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: string;
};

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};
