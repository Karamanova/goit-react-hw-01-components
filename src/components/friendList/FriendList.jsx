import PropTypes from 'prop-types';
import friends from 'data/friends.json';
import { FriendListItem } from './FriendListItem';
import {List} from './FriendList.styled'
export const FriendList = ({}) => {
  return (
    <List friends={friends}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</List>
  )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};