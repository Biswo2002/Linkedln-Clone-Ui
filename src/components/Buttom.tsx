import { Dimensions, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'
import { COLORS, FONTS } from '../styles'

const Bottom = ({ title }: any) => {
    return (
        <Button
            colorScheme={'blue'}
            width={Dimensions.get('window').width / 1.1}
            ml={4}
            mr={4}
            mt={6}
            p={3}
        >
            <Text
                fontSize={'sm'}
                color={COLORS.SECONDARY}
                bold
                fontFamily={FONTS[600].normal}
                px={2}
            >
                {title}
            </Text>
        </Button>
    )
}

export default Bottom

const styles = StyleSheet.create({})