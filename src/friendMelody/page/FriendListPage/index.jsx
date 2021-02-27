import React from "react";
import useFriendInfo from "./../../hooks/useFriendInfo";
import Card from "./../../components/Card";
import CardProfile from './../../components/CardProfile'
import { Container } from "./styled";

const FriendListPage =  () => {
  const { friends } =  useFriendInfo();

  return (
    <Container>
      {friends.items && friends.items.map((friend, index) => (
        <Card>
          <CardProfile name={friend.displayName} image={friend.pictureUrl} userId={friend.userId}/>
        </Card>
      ))}
    </Container>
  );
};

export default FriendListPage;
