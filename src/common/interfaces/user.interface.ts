interface IOffer {
  id: string,
  title: string,
  type: string,
};

export interface IUser {
  id: string,
  available_badges: string,
  image_key: string,
  offers: IOffer[],
};
