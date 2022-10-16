import { FC } from 'react';
import { Form } from 'react-router-dom';

interface FavoriteContactProps {
  contact: {
    first: string;
    last: string;
    avatar: string;
    twitter: string;
    notes: string;
    favorite: boolean;
  };
}

export const FavoriteContact: FC<FavoriteContactProps> = ({ contact }) => {
  const { favorite } = contact;
  return (
    <Form method="post">
      <button name="favorite" value={favorite ? 'false' : 'true'} aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}>
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
};
