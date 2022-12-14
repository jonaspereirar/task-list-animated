import React, { useCallback, useState } from 'react'
import { Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {
  Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-togle'
import AnimatedCheckbox from '../components/animated-checkbox'

export default function MainScreen() {
  const [checked, setChecked] = useState(false)
  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])
  return (
    <>
      <StatusBar
        style={useColorModeValue('dark', 'light')}
        backgroundColor='transparent'
        translucent
      />
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems='center'>
          <Box w='100px' h='100px'>
            <Pressable onPress={handlePressCheckbox} >
              <AnimatedCheckbox checked={checked} />
            </Pressable>
          </Box>
          <ThemeToggle />
        </VStack>
      </Center>
    </>
  )
}