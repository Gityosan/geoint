/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createUserImage = /* GraphQL */ `
  mutation CreateUserImage(
    $input: CreateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    createUserImage(input: $input, condition: $condition) {
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
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
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
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
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
export const createEventImage = /* GraphQL */ `
  mutation CreateEventImage(
    $input: CreateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    createEventImage(input: $input, condition: $condition) {
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
export const updateEventImage = /* GraphQL */ `
  mutation UpdateEventImage(
    $input: UpdateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    updateEventImage(input: $input, condition: $condition) {
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
export const deleteEventImage = /* GraphQL */ `
  mutation DeleteEventImage(
    $input: DeleteEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    deleteEventImage(input: $input, condition: $condition) {
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
