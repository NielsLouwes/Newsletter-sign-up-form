import React from 'react';
import { ListItemStyled } from './ListItem.styles';

type ListItemProps = {
  icon: string;
  text: string;
};

export const ListItem = ({ icon, text }: ListItemProps) => {
  return (
    <ListItemStyled.StyledListItem>
      <img src={icon} height="25px" width="25px" alt=""></img>
      <ListItemStyled.Text>{text}</ListItemStyled.Text>
    </ListItemStyled.StyledListItem>
  );
};
