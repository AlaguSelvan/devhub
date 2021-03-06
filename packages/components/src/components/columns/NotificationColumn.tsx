import React, { useMemo } from 'react'

import { getColumnHeaderDetails } from '@devhub/core'
import {
  NotificationCardsContainer,
  NotificationCardsContainerProps,
} from '../../containers/NotificationCardsContainer'
import { ColumnRenderer, ColumnRendererProps } from './ColumnRenderer'

export interface NotificationColumnProps
  extends Omit<
    NotificationCardsContainerProps,
    'ownerIsKnown' | 'repoIsKnown'
  > {
  columnIndex: number
  headerDetails: ReturnType<typeof getColumnHeaderDetails>
  pagingEnabled?: boolean
}

export const NotificationColumn = React.memo(
  (props: NotificationColumnProps) => {
    const {
      columnId,
      columnIndex,
      headerDetails,
      pagingEnabled,
      pointerEvents,
      swipeable,
    } = props

    const Children = useMemo<ColumnRendererProps['children']>(
      () => (
        <NotificationCardsContainer
          key={`notification-cards-container-${columnId}`}
          columnId={columnId}
          pointerEvents={pointerEvents}
          swipeable={swipeable}
        />
      ),
      [columnId, columnIndex, pointerEvents, swipeable],
    )

    if (!headerDetails) return null

    return (
      <ColumnRenderer
        key={`notification-column-${columnId}-inner`}
        avatarImageURL={
          headerDetails.avatarProps && headerDetails.avatarProps.imageURL
        }
        avatarLinkURL={
          headerDetails.avatarProps && headerDetails.avatarProps.linkURL
        }
        columnId={columnId}
        columnIndex={columnIndex}
        columnType="notifications"
        icon={headerDetails.icon}
        owner={headerDetails.owner}
        pagingEnabled={pagingEnabled}
        repo={headerDetails.repo}
        repoIsKnown={headerDetails.repoIsKnown}
        subtitle={headerDetails.subtitle}
        title={headerDetails.title}
      >
        {Children}
      </ColumnRenderer>
    )
  },
)

NotificationColumn.displayName = 'NotificationColumn'
