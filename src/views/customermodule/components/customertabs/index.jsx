import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ChakraProvider,
  Container,
  HStack,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import AboutCustomer from "./components/aboutcustomer";
import AboutCustomerDoc from "./components/aboutcustomerdoc";
import CallRecordingList from "./components/aboutcustomercallrecords";
import AboutCustomerMeeting from "./components/aboutcustomermeet";
import { MdEvent, MdGroup, MdPlace, MdSchedule } from "react-icons/md";
import { useState } from "react";
import LeadOverviewWithEdit from "./components/aboutcustomer/EditableFieldsOne";
import EditableField from "./components/aboutcustomer/EditableFieldsOne";
import EditableFields from "./components/aboutcustomer/EditableFieldsOne";
import EditableFieldsTwo from "./components/aboutcustomer/EditableFieldsTwo";

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
export default function CustomerTabs() {
  const recordings = [
    { title: 'Recording 1', url: 'https://example.com/recording1.mp3' },
    { title: 'Recording 2', url: 'https://example.com/recording2.mp3' },
    { title: 'Recording 3', url: 'https://example.com/recording3.mp3' },
  ];
  const tabSize = useBreakpointValue({ base: 'sm', md: 'lg' });

  const meetings = [
    {
      title: 'Team Standup Meeting',
      date: '2024-07-19',
      time: '09:00 AM',
      duration: 30,
      participants: 'john@example.com, jane@example.com',
      image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-meet-512.png',
      icons: [<MdSchedule key="event" color="grey" />],
    },
  ];

  const [fieldsData, setFieldsData] = useState({
    City: '- -',
    Company: '- -',
    'Company Founder': '- -',
    'Company Headquarters': '- -',
    'Company Size': '- -',
    Company_Industry: '- -',
    Country: '- -',
    email: '- -',
    id: '- -',
    name: '- -',
    Description: '- -',
    Designation: '- -',
    Email: '- -',
    Establishment_Year: '- -',
    Instagram_id: '- -',
    Landline_No: '- -',
  });
  const [fieldsData1, setFieldsData1] = useState({
    LinkedIn_Business_Page: '- -',
    Linkedln_Profile_Page: '- -',
    Location: '- -',
    Mobile_number: '- -',
    Rating: '- -',
    Skype_ID: '- -',
    State: '- -',
    Street: '- -',
    Twitter: '- -',
    Website: '- -',
    YouTube: '- -',
    Zip_Code: '- -',
    Currency: '- -',
    Current_Monthly_PPC_Spend: '- -',
    Interested_in: '- -'
  });

  const handleSave = (updatedData) => {
    setFieldsData(updatedData);
  };
  const handleSave1 = (updatedData) => {
    setFieldsData1(updatedData);
  };
  return (
    <Box w="100%" p={4} overflowX={'auto'}>
      <Tabs variant="enclosed" size={tabSize}>
        <TabList>
          <Tab>About </Tab>
          <Tab>Documents</Tab>
          <Tab>Call Recordings</Tab>
          <Tab>Meetings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Container maxW="xxl" mt={10} p={0}>
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={4} width={'100%'} alignItems={'baseline'}>
            <Box w='100%'>
              <EditableFields
                  initialData={fieldsData}
                  onSave={handleSave}
                />
              </Box>
              <Box w='100%'>
              <EditableFieldsTwo
                  initialData={fieldsData1}
                  onSave={handleSave1}
                />
              </Box>
              </SimpleGrid>
            </Container>
          </TabPanel>
          <TabPanel>
            <AboutCustomerDoc />
          </TabPanel>
          <TabPanel>
            <CallRecordingList recordings={recordings} />
          </TabPanel>
          <TabPanel>
            {meetings.map((meeting, index) => (
              <AboutCustomerMeeting key={index} meeting={meeting} />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
