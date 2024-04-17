import { Box, Flex, Avatar, Heading, Text, IconButton, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';

interface Professor {
    name: string;
    profession: string;
}

interface ProfessorCardProps {
    professors: Professor[];
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({ professors = [] }) => (
  // rest of your code
    <>
        {professors.map((professor) => (
            <Card maxW='md' key={professor.name}>
                <CardHeader>
                    <Flex >
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name={professor.name} src='https://bit.ly/sage-adebayo' />

                            <Box>
                                <Heading size='sm'>{professor.name}</Heading>
                                <Text>{professor.profession}</Text>
                            </Box>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    <Text>
                        {professor.name} is a {professor.profession} at our university.
                    </Text>
                </CardBody>
                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
                        Like
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                        Comment
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                        Share
                    </Button>
                </CardFooter>
            </Card>
        ))}
    </>
);



export default ProfessorCard;