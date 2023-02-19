import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { transactionHistory } from 'components/transactionHistory/transactionHistory';
import data from 'data/data.json';
import user from 'data/user.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { GlobalStyle } from './App.styled';


export const App = () => {
  return (
    <>
      <Profile
        avatar={Profile.avatar}
        username={Profile.username}
        tag={Profile.tag}
        location={Profile.location}
        stats={Profile.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <transactionHistory itransactions={transactions} />
      </>
  );
};
