/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      introduction
      lat
      lng
      tag
      acquaintance
      userImageId
      status
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      event {
        items {
          id
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      icon {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        event {
          nextToken
          startedAt
        }
        icon {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        id
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        event {
          nextToken
          startedAt
        }
        icon {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        event {
          nextToken
          startedAt
        }
        icon {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      comment {
        items {
          id
          eventId
          value
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      image {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $id: ID
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEvents(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        comment {
          nextToken
          startedAt
        }
        image {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
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
        id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        comment {
          nextToken
          startedAt
        }
        image {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        comment {
          nextToken
          startedAt
        }
        image {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      eventId
      author {
        id
        name
        introduction
        lat
        lng
        tag
        acquaintance
        userImageId
        status
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        event {
          nextToken
          startedAt
        }
        icon {
          id
          name
          type
          size
          alt
          url
          identityId
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      value
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        eventId
        author {
          id
          name
          introduction
          lat
          lng
          tag
          acquaintance
          userImageId
          status
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        value
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        id
        eventId
        author {
          id
          name
          introduction
          lat
          lng
          tag
          acquaintance
          userImageId
          status
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        value
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventId
        author {
          id
          name
          introduction
          lat
          lng
          tag
          acquaintance
          userImageId
          status
          owner
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        value
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($id: ID!) {
    getUserImage(id: $id) {
      id
      name
      type
      size
      alt
      url
      identityId
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $id: ID
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserImages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserImages = /* GraphQL */ `
  query SyncUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEventImage = /* GraphQL */ `
  query GetEventImage($id: ID!) {
    getEventImage(id: $id) {
      id
      name
      type
      size
      alt
      url
      identityId
      owner
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listEventImages = /* GraphQL */ `
  query ListEventImages(
    $id: ID
    $filter: ModelEventImageFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEventImages(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventImages = /* GraphQL */ `
  query SyncEventImages(
    $filter: ModelEventImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEventImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        size
        alt
        url
        identityId
        owner
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
