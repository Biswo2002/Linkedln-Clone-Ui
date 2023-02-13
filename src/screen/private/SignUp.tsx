import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, HStack, Icon, Image, Input, Pressable, Text } from 'native-base'
import { COLORS, FONTS } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { PrivateNavigationProps } from '../../types/AllRoutes'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const SignUp = () => {
    const typesLogin = [
        {
            id: '1',
            img: 'https://static.vecteezy.com/system/resources/previews/009/469/630/non_2x/google-logo-isolated-editorial-icon-free-vector.jpg',
            title: 'Continue with Google',
        },
        {
            id: '2',
            img: 'https://cdn3.iconfinder.com/data/icons/social-media-logos-glyph/2048/5315_-_Apple-512.png',
            title: 'Continue with Apple',
        },
        {
            id: '3',
            img: 'https://static.vecteezy.com/system/resources/previews/002/557/415/non_2x/facebook-snapchat-instagram-facebook-color-icons-free-vector.jpg',
            title: 'Continue with Facebook',
        },
    ]


    const [show, setShow] = React.useState(false);
    const { navigate } = useNavigation<PrivateNavigationProps>();
    return (
        <Box safeArea bgColor={COLORS.SECONDARY} flex={1} >
            <Image source={{ uri: 'https://brand.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png' }} alt={''}
                width={Dimensions.get('window').width / 3}
                height={'32'}
            />
            <Box
                ml={'4'}
            >
                <Text
                    fontSize={'3xl'}
                    bold
                    fontFamily={FONTS[600].normal}
                    color={'gray.900'}
                >
                    Sign in
                </Text>
                <HStack py={2} >
                    <Text
                        color={'gray.500'}
                        fontSize={'sm'}
                        fontFamily={FONTS[500].normal}
                    >
                        or
                    </Text>
                    <Pressable
                        onPress={() => navigate('Login')}
                    >
                        <Text
                            color={COLORS.PRIMARY}
                            fontSize={'md'}
                            ml={2}
                            bold
                            fontFamily={FONTS[800].normal}
                        >
                            join Linkedln
                        </Text>
                    </Pressable>
                </HStack>
            </Box>
            <Box
                width={Dimensions.get('window').width / 1.08}
                m={'4'}
                p={2}
            >
                <Input
                    placeholder='Email or Phone '
                    variant={'underlined'}
                    focusOutlineColor={'gray.900'}
                    fontSize={'md'}
                    fontFamily={FONTS[600].normal}
                    color={'gray.900'}
                    fontWeight={'600'}
                    placeholderTextColor={'gray.600'}
                />
                <Input
                    type={show ? "text" : "password"}
                    mt={5}
                    placeholder='Password '
                    variant={'underlined'}
                    focusOutlineColor={'gray.900'}
                    fontSize={'md'}
                    fontFamily={FONTS[600].normal}
                    color={'gray.900'}
                    fontWeight={'600'}
                    placeholderTextColor={'gray.600'}
                    InputRightElement={<Pressable onPress={() => setShow(!show)}
                    >
                        <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                            size={5} mr="2"
                            color="muted.400"
                        />
                    </Pressable>}
                />
            </Box>
            <Button
                colorScheme={'blue'}
                width={Dimensions.get('window').width / 1.1}
                ml={4}
                mr={4}
                mt={6}
                p={3}
                borderRadius={'full'}
            >
                <Text
                    fontSize={'md'}
                    color={COLORS.SECONDARY}
                    bold
                    fontFamily={FONTS[600].normal}
                    px={2}
                >
                    Continue
                </Text>
            </Button>
            <Text
                textAlign={'center'}
                p={'4'}
                fontSize={'sm'}
                bold
                fontFamily={FONTS[600].normal}
            >
                or
            </Text>
            {
                typesLogin.map(item => (
                    <React.Fragment key={item?.id}  >
                        <HStack
                            alignItems={'center'}
                            justifyContent={'center'}
                            borderWidth={'.8'}
                            width={Dimensions.get('window').width / 1.1}
                            ml={'4'}
                            mt={2}
                            mb={2}
                            mr={3}
                            borderRadius={'full'}
                            p={.5}

                        >
                            <Image source={{ uri: item?.img }} alt={''}
                                size={'xs'}
                                borderRadius={'md'}
                                resizeMode={'contain'}
                            />
                            <Text
                                fontSize={'md'}
                                bold
                                fontFamily={FONTS[600].normal}
                                color={'gray.800'}
                                ml={2}
                            >
                                {item?.title}
                            </Text>
                        </HStack>
                    </React.Fragment>
                ))
            }
        </Box>
    )
}

export default SignUp

const styles = StyleSheet.create({})