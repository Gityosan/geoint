/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      userId
      name
      introduction
      lat
      lng
      tag
      acquaintance
      userImageId
      status
      owner
      createdAt
      updatedAt
      event {
        items {
          eventId
          userId
          name
          eventImageId
          introduction
          tag
          lat
          lng
          limit
          reserved
          start
          end
          from
          to
          reported
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      icon {
        userImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $userId: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      userId: $userId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        createdAt
        updatedAt
        event {
          nextToken
        }
        icon {
          userImageId
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listUserByOwner = /* GraphQL */ `
  query ListUserByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        createdAt
        updatedAt
        event {
          nextToken
        }
        icon {
          userImageId
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($eventId: ID!) {
    getEvent(eventId: $eventId) {
      eventId
      userId
      name
      eventImageId
      introduction
      tag
      lat
      lng
      limit
      reserved
      start
      end
      from
      to
      reported
      owner
      createdAt
      updatedAt
      comment {
        items {
          commentId
          eventId
          value
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      image {
        eventImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $eventId: ID
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEvents(
      eventId: $eventId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        eventId
        userId
        name
        eventImageId
        introduction
        tag
        lat
        lng
        limit
        reserved
        start
        end
        from
        to
        reported
        owner
        createdAt
        updatedAt
        comment {
          nextToken
        }
        image {
          eventImageId
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listEventByOwner = /* GraphQL */ `
  query ListEventByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        eventId
        userId
        name
        eventImageId
        introduction
        tag
        lat
        lng
        limit
        reserved
        start
        end
        from
        to
        reported
        owner
        createdAt
        updatedAt
        comment {
          nextToken
        }
        image {
          eventImageId
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($commentId: ID!) {
    getComment(commentId: $commentId) {
      commentId
      eventId
      author {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        createdAt
        updatedAt
        event {
          nextToken
        }
        icon {
          userImageId
          name
          type
          size
          alt
          url
          identityId
          owner
          createdAt
          updatedAt
        }
      }
      value
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $commentId: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      commentId: $commentId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        commentId
        eventId
        author {
          userId
          name
          introduction
          lat
          lng
          tag
          acquaintance
          userImageId
          status
          owner
          createdAt
          updatedAt
        }
        value
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const lisByOwner = /* GraphQL */ `
  query LisByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    lisByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        commentId
        eventId
        author {
          userId
          name
          introduction
          lat
          lng
          tag
          acquaintance
          userImageId
          status
          owner
          createdAt
          updatedAt
        }
        value
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($userImageId: ID!) {
    getUserImage(userImageId: $userImageId) {
      userImageId
      name
      type
      size
      alt
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $userImageId: ID
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserImages(
      userImageId: $userImageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserImageByOwner = /* GraphQL */ `
  query ListUserImageByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserImageByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventImage = /* GraphQL */ `
  query GetEventImage($eventImageId: ID!) {
    getEventImage(eventImageId: $eventImageId) {
      eventImageId
      name
      type
      size
      alt
      url
      identityId
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listEventImages = /* GraphQL */ `
  query ListEventImages(
    $eventImageId: ID
    $filter: ModelEventImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventImages(
      eventImageId: $eventImageId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        eventImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listEventImageByOwner = /* GraphQL */ `
  query ListEventImageByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEventImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventImageByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        eventImageId
        name
        type
        size
        alt
        url
        identityId
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
