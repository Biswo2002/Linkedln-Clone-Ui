import { useNavigation } from '@react-navigation/native'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Box, Button, Image, Input, ScrollView, Text } from 'native-base'
import { PrivateNavigationProps } from '../../types/AllRoutes'
import { COLORS, FONTS } from '../../styles'

const ForgotPassword = () => {
    const { navigate } = useNavigation<PrivateNavigationProps>();
    return (
        <Box safeArea bgColor={COLORS.SECONDARY} flex={1} >
            <ScrollView showsVerticalScrollIndicator={false} >
                <Image source={{ uri: 'https://brand.linkedin.com/apps/settings/wcm/designs/linkedin/katy/global/clientlibs/resources/img/default-share.png' }} alt={''}
                    width={Dimensions.get('window').width / 3}
                    height={'40'}
                    ml={'3'}
                />
                <Box
                    m={5}
                >
                    <Text
                        fontSize={'2xl'}
                        bold
                        color={'gray.800'}
                        fontFamily={FONTS[600].normal}
                    >
                        Forgot password?
                    </Text>
                    <Text
                        color={'muted.600'}
                        py={1}
                    >
                        Reset password in two quick steps
                    </Text>
                </Box>
                <Box
                    width={Dimensions.get('window').width / 1.15}
                    ml={5}
                    mt={5}
                >
                    <Input
                        placeholder='Email or Phone '
                        focusOutlineColor={'gray.800'}
                        fontSize={'md'}
                        fontFamily={FONTS[600].normal}
                        color={'gray.900'}
                        fontWeight={'600'}
                        placeholderTextColor={'gray.600'}
                        borderColor={'gray.300'}
                        bgColor={COLORS.SECONDARY}
                    />
                </Box>
                <Button
                    colorScheme={'blue'}
                    width={Dimensions.get('window').width / 1.15}
                    ml={5}
                    mr={4}
                    mt={'10'}
                    p={3}
                    borderRadius={'full'}
                    onPress={() => navigate('Login')}
                >
                    <Text
                        fontSize={'md'}
                        color={COLORS.SECONDARY}
                        bold
                        fontFamily={FONTS[600].normal}
                        px={2}
                    >
                        Reset password
                    </Text>
                </Button>
            </ScrollView>
        </Box>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})