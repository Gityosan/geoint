/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateUserImage = /* GraphQL */ `
  subscription OnCreateUserImage($owner: String) {
    onCreateUserImage(owner: $owner) {
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
export const onUpdateUserImage = /* GraphQL */ `
  subscription OnUpdateUserImage($owner: String) {
    onUpdateUserImage(owner: $owner) {
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
export const onDeleteUserImage = /* GraphQL */ `
  subscription OnDeleteUserImage($owner: String) {
    onDeleteUserImage(owner: $owner) {
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
export const onCreateEventImage = /* GraphQL */ `
  subscription OnCreateEventImage($owner: String) {
    onCreateEventImage(owner: $owner) {
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
export const onUpdateEventImage = /* GraphQL */ `
  subscription OnUpdateEventImage($owner: String) {
    onUpdateEventImage(owner: $owner) {
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
export const onDeleteEventImage = /* GraphQL */ `
  subscription OnDeleteEventImage($owner: String) {
    onDeleteEventImage(owner: $owner) {
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
