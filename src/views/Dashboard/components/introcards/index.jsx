import * as React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid, Heading, Button, Text, Avatar, Image, useDisclosure, Flex, Input, Center, Divider } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { ItemContent } from "components/Menu/ItemContent";
// import UploadDocDropzone from "./components/dropzonemodal";
import UploadDocDropzone from "./components/dropzone";
// import ContactsMain from "views/Dashboard/contactsmain";

export default function IntroCards() {
    const [modal1Open, setModal1Open] = React.useState(false);
    const [modal2Open, setModal2Open] = React.useState(false);
    const [modal3Open, setModal3Open] = React.useState(false);

    const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
    const toggleModal1 = () => setModal1Open(!modal1Open);
    const toggleModal2 = () => setModal2Open(!modal2Open);
    const toggleModal3 = () => setModal3Open(!modal3Open);
    return (
        <Box w="100%" mt={10}>
            <SimpleGrid spacing={5} columns={5}>
                <Card>
                    <CardHeader>
                        <Image
                            src={'https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg'}
                            w="60px"
                            h="60px"
                            objectFit={'contain'}
                            borderRadius="15px"
                        />
                    </CardHeader>
                    <CardBody mt={4}>
                        <Text>Zoho Connection</Text>
                    </CardBody>
                    <Box mt={4}>
                        <Button size="sm" fontWeight={500} fontSize={12} onClick={toggleModal1}>Connect</Button>
                    </Box>
                </Card>
                <Card>
                    <CardHeader>
                        <Image
                            src={'https://play-lh.googleusercontent.com/bk3e0glVbvRC4Z0uEZ5Oso5wjS89r1P_X5e-k3N_UBkTPXZLhGv50rRy7LAuDzzC9w'}
                            w="60px"
                            h="60px"
                            objectFit={'contain'}
                            borderRadius="15px"
                        />
                    </CardHeader>
                    <CardBody mt={4}>
                        <Text>Phone No</Text>
                    </CardBody>
                    <Box mt={4}>
                        <Button size="sm" fontWeight={500} fontSize={12} onClick={toggleModal3}>+91 889665332</Button>
                    </Box>
                </Card>
                <Card>
                    <CardHeader>
                        <Image
                            src={'https://static.vecteezy.com/system/resources/previews/017/396/757/original/google-mail-icons-free-png.png'}
                            w="60px"
                            h="60px"
                            objectFit={'contain'}
                            borderRadius="15px"
                        />
                    </CardHeader>
                    <CardBody mt={4}>
                        <Text>Emails</Text>
                    </CardBody>
                    <Box mt={4}>
                        <Button size="sm" fontWeight={500} fontSize={12}>abchello@yahoo.co.in</Button>
                    </Box>
                </Card>
                <Card>
                    <CardHeader>
                        <Image
                            src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAhvn////7//8AZ9kAfvnF3/0AgvnN5P1ztft7uPsAhPkAgPnA4P30/P8pk/oAiPsAgPKbyfwAXddtn+jm9f4LivlsnuigzPzf7P5Xpfri8P7S5/1Hn/qUxPxssfsVjfl7qOqx1f1gqvtFm/oAc/Gy1f0OMLKWAAADRUlEQVR4nO3d4VLTQBRA4aSExDa2WCxCC2ks6Pu/ohXUUUfdm9zdvXvxnN8Mk2+yTXZL2FS1sEU37Dc3Vbraj9JDmVYl+7H1MDbtKqGvqq6u3xsKT2OfVPcsvEhDFAmPTXLfV2EaokC42Kc/gS/CJESB8JgF+CxMQQwLtzmG6HdhAmJQuMsE/Ca8uP6QW/jY5hVGP4sh4SEX8IcwNjEkHPJcZn4WRiaGhE9pJzJ/FMYlBoS7lDPRvwqjEgPCu2yD9BdhTGJA2OW6V/wmjEgMCC+thPGIxQqjEcsVxprdFCyMRCxZGGegFi2MQixbGINYuDACsXShnli8UE0sX6glOhAqiR6EOqILoWp240OoIToRKgaqF+F8ohvhbKIf4VyiI+FMoifhPKIr4SyiL+EcojPhDKI34fTZjTvhZKI/4dSB6lA4kehROI3oUjiJ6FM4hehUOOGK6lUoJ7oVigeqX6GU6FgoJHoWyoiuhSKib6GE6FwoIHoXhonlCKt38/p06UZYXc2qdyScV4MQoTUgGEKECO1DiBChfQgRIrQPIUKE9iFEiNA+hAgR2odQL+xv//0rVN2G93TIINzWi1TVW4QIESJEiBAhwmzCdBUhbJf3Xarul+Et/zKsLdomXYI9DVk9IURoH0KECO1DiBChfQgRIjy3atMl2C89vXD1sHyTquVDmMhf1/iuDSFChAgRIkSI8Fn46mdt55l3uoqYeb/+1ZN1CBEitA8hQoT2IUSI0D6ECLM8fal6YW2OJ2jfajtp3jrs4ilo1XuVXXzXhhAhQoQIESL8D4Slz2na7WKt7FC2sBo36hTALOvDlTYNkBUwQoQFhBAhQvsQIkRoH0KECO1DiBChfQgRIrQPIUKE9iFEiNA+hAgR2ocQIUL7ECJEaB9ChK9e2DkQdirhnepfA7PU36mEqmfM83SzUwnrJ90jyulbPQUEIeFQ+jDtB6XwIHgPimntQSmsH8smto8hQFC4K/t+0QSuMwJhvS2Z2IS3wwsL62O5F5s+OEZFwsW+VGK/X0QRns9iU+RdsTlKDl4krD+P5Z3GfjyJjl0mrNfD2Eg2MczUqm3GYS07dKHw/Gnshv2mjFnqzWY/dIJP4EtfAHC4rfKYiMr+AAAAAElFTkSuQmCC'}
                            w="60px"
                            h="60px"
                            objectFit={'contain'}
                            borderRadius="15px"
                        />
                    </CardHeader>
                    <CardBody mt={4}>
                        <Text>Upload Document</Text>
                    </CardBody>
                    <Box mt={4}>
                        <Button size="sm" fontWeight={500} fontSize={12} onClick={toggleModal2}>Upload</Button>
                    </Box>
                </Card>
                <Card>
                    <CardHeader>
                        <Image
                            src={'https://store-images.s-microsoft.com/image/apps.11057.084b1fe9-2145-40a7-bc0d-6582d50102bd.ba5f348c-639d-40f3-b74d-973d22911ae0.55bca9b2-ca8d-4b2d-a755-2b187f35e67d.png'}
                            w="60px"
                            h="60px"
                            objectFit={'contain'}
                            borderRadius="15px"
                        />
                    </CardHeader>
                    <CardBody mt={4}>
                        <Text>Connect Work Drive</Text>
                    </CardBody>
                    <Box mt={4}>
                        <Button size="sm" fontWeight={500} fontSize={12}>Connect</Button>
                    </Box>
                </Card>
            </SimpleGrid>
            <Modal isOpen={modal1Open} onClose={toggleModal1} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Zoho CRM</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Account 1 is connected to these sites. They can
                            view your account address.
                        </Text>
                        <Flex alignItems={'center'} mt={6}>
                            <Avatar width={10} height={10} />
                            <Text fontWeight={500} ml={2} fontSize={16}>
                                Avenue180
                            </Text>

                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button fontWeight={400} fontSize={12} colorScheme='blue' borderRadius={50}>Connect</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={modal2Open} onClose={toggleModal2} isCentered size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Document Connect</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UploadDocDropzone />
                    </ModalBody>
                    <ModalFooter>
                        <Flex gap={5} width={'100%'} alignItems={'center'} justifyContent={'center'}>
                            <Text fontSize={14}>Link from the web</Text>
                            <Input width={200} size='md' placeholder='Paste url ...' />
                            <Center height='25px'>
                                <Divider orientation='vertical' />
                            </Center>
                            <Button fontWeight={400} fontSize={12} borderRadius={50}>Cancel</Button>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Modal isOpen={modal3Open} onClose={toggleModal3} isCentered size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>File Import</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <UploadDocDropzone />
                    </ModalBody>
                    <ModalFooter>
                        {/* <ContactsMain /> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}