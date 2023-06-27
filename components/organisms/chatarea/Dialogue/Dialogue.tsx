import React from "react";
import styled from "@emotion/styled";
import moment from "moment";

type Props = { dial: any,userInfo:any };

export default function Dialogue({ dial,userInfo }: Props) {
  const mail = userInfo.email;
  const MessageType = dial.user === mail ? myMessage : fromMessage;
  return (
    <Container>
      <MessageType>
        {dial.messages}
        <Timestamp>{moment(dial?.timeStamp?.toDate()).format("LT")}</Timestamp>
      </MessageType>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const MessageBubble = styled.div`
  margin: 1rem 1rem;
  padding: 1rem;
  padding-bottom: 26px;
  text-align: center;
  margin-bottom: 10px;
  position: relative;

`;

const myMessage = styled(MessageBubble)`
  margin-left: auto;
  background-color: #0084ff;
  color: #fff;
  border-radius: 1rem 0 2rem 0;
`;

const fromMessage = styled(MessageBubble)`
  background-color: #e4e6eb;
  text-align: left;
  color: #0c3374;
  border-radius: 0 1rem 0 2rem;
`;

const Timestamp = styled.span`
  font-size: 12px;
  padding: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;
