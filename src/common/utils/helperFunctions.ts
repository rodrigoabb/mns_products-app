const BASE_IMAGE_URL: string = 'https://asset1.cxnmarksandspencer.com/is/image/mands';

export const getImageUrl = (imageKey: string) => {
  const url = `${BASE_IMAGE_URL}/${imageKey}`;
  return url;
};
