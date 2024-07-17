import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import IntroCards from "./components/introcards";
import EditProfileDetailsTab from "./components/editprofiletab";
import ChangePassTab from "./components/changepasswordtab";
import ChatUsers from "./components/chatmodule";
import LongChatHistory from "./components/chatmodule";
import SocialChatShell from "./components/chatmodule/chatlist";
import ChatModule from "./components/chatmodule/chatlist";

const profile = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  username: "johndoe123",
  // Add more profile details as needed
};

const messages = [
  { senderId: 1, senderName: 'Alice', senderAvatar: '/avatars/alice.jpg', text: 'Hello!', timestamp: '9:00 AM' },
  { senderId: 2, senderName: 'Bob', senderAvatar: '/avatars/bob.jpg', text: 'Hi there!', timestamp: '9:05 AM' },
  // Add more messages as needed
];

const currentUser = {
  id: 1,
};
export default function ProfileTabs() {
  return (
    <Box w="100%" p={4}>
      <Tabs>
        <TabList>
          <Tab>Intro</Tab>
          <Tab>Edit Profile</Tab>
          <Tab>Change Password</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <IntroCards />
          </TabPanel>
          <TabPanel>
            <ChangePassTab />
          </TabPanel>
          <TabPanel>
              <EditProfileDetailsTab profile={profile} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
