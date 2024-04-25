import { useState } from 'react';
import { IPhoto } from '../../interfaces/IPhoto';

const useDetailPhoto = (defaultValue: null | IPhoto) => {
  const [photo, setPhoto] = useState<IPhoto | null>(defaultValue);

  const onDetailPhotoClick = (e: any, photo: IPhoto) => {
    e.preventDefault();
    setPhoto(photo);
  };

  return { photo, onDetailPhotoClick };
};

export default useDetailPhoto;
