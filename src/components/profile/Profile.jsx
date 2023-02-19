import PropTypes from 'prop-types';
// import user from 'data/user.json';
import {
  ProfileBox,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }
}) => {
return (
<ProfileBox>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <StatsList>
    <StatsItem>
      <StatsLabel>Followers</StatsLabel>
      <StatsQuantity>{followers}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Views</StatsLabel>
      <StatsQuantity>{views}</StatsQuantity>
    </StatsItem>
    <StatsItem>
      <StatsLabel>Likes</StatsLabel>
      <StatsQuantity>{likes}</StatsQuantity>
    </StatsItem>
  </StatsList>
</ProfileBox>
);
};
Profile.propTypes = {
    user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape(PropTypes.number.isRequired),
  }),
};