type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type UserModel = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  deletedAt: null | number;
};

const User: UserModel[] = [
  {
    id: 1,
    name: "Awais Iqbal",
    username: "Awais",
    email: "awais@test.com",
    address: {
      street: "10",
      suite: "Unkown",
      city: "Warsaw",
      zipcode: "55555",
      geo: {
        lat: "55",
        lng: "55",
      },
    },
    phone: "999999999",
    website: "example.com",
    company: {
      name: "test",
      catchPhrase: "cloud vm",
      bs: "e-commerce",
    },
    deletedAt: null,
  },
  {
    id: 2,
    name: "Mark",
    username: "mark123",
    email: "mark@test.com",
    address: {
      street: "56",
      suite: "Mongo",
      city: "New York",
      zipcode: "77777",
      geo: {
        lat: "40",
        lng: "40",
      },
    },
    phone: "99999909",
    website: "example1.com",
    company: {
      name: "Bensnow",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    deletedAt: null,
  },
];

export default User;
