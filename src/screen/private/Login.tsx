import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, HStack, Image, Input, Pressable, Text } from 'native-base'
import { COLORS, FONTS } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { PrivateNavigationProps } from '../../types/AllRoutes'

const Login = () => {
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
                    Join Linkedln
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
                        onPress={() => navigate('SignUp')}
                    >
                        <Text
                            color={COLORS.PRIMARY}
                            fontSize={'sm'}
                            ml={2}
                            bold
                            fontFamily={FONTS[600].normal}
                        >
                            Sign in
                        </Text>
                    </Pressable>
                </HStack>
            </Box>
            <Box
                width={Dimensions.get('window').width / 1.08}
                m={'4'}
                py={5}
            >
                <Text
                    fontSize={'sm'}
                    color={'gray.500'}
                    bold
                    fontFamily={FONTS[600].normal}
                >
                    Email or Phone
                </Text>
                <Input
                    variant={'underlined'}
                    focusOutlineColor={'gray.900'}
                    fontSize={'md'}
                    fontFamily={FONTS[600].normal}
                    color={'gray.900'}
                    fontWeight={'600'}
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
            <HStack
                alignItems={'center'}
                justifyContent={'center'}
                borderWidth={'.8'}
                width={Dimensions.get('window').width / 1.1}
                ml={'4'}
                borderRadius={'full'}
                p={.5}
            >
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/009/469/630/non_2x/google-logo-isolated-editorial-icon-free-vector.jpg' }} alt={''}
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
                    Continue with Google
                </Text>
            </HStack>

            <HStack
                alignItems={'center'}
                justifyContent={'center'}
                borderWidth={'.8'}
                width={Dimensions.get('window').width / 1.1}
                ml={'4'}
                borderRadius={'full'}
                mt={4}
                p={.5}
            >
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/002/557/415/non_2x/facebook-snapchat-instagram-facebook-color-icons-free-vector.jpg' }} alt={''}
                    size={'xs'}
                    borderRadius={'sm'}
                    resizeMode={'contain'}
                />
                <Text
                    fontSize={'md'}
                    bold
                    fontFamily={FONTS[600].normal}
                    color={'gray.800'}
                    ml={2}
                >
                    Continue with Google
                </Text>
            </HStack>
        </Box>
    )
}

export default Login

const styles = StyleSheet.create({})