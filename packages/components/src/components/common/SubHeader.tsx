import React from 'react'

import { View } from 'react-native'
import { OcticonIconProps } from '../../libs/vector-icons'
import { sharedStyles } from '../../styles/shared'
import { contentPadding } from '../../styles/variables'
import { ThemedIcon } from '../themed/ThemedIcon'
import { H2 } from './H2'
import { Spacer } from './Spacer'

export interface SubHeaderProps {
  children?: React.ReactNode
  iconName?: OcticonIconProps['name']
  muted?: boolean
  title?: string
}

export function SubHeader(props: SubHeaderProps) {
  const { children, iconName, muted, title } = props

  return (
    <View
      style={[
        sharedStyles.horizontal,
        sharedStyles.justifyContentFlexStart,
        sharedStyles.alignSelfStretch,
        sharedStyles.alignItemsCenter,
        sharedStyles.padding,
      ]}
    >
      {!!iconName && (
        <ThemedIcon
          color="foregroundColor"
          family="octicon"
          name={iconName}
          size={18}
        />
      )}

      {!!title && (
        <>
          {!!iconName && <Spacer width={contentPadding / 2} />}

          <H2 muted={muted} withMargin={false}>
            {title}
          </H2>
        </>
      )}

      {children}
    </View>
  )
}
