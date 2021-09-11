/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      name
      introduction
      lat
      lng
      tag
      acquaintance {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
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
      status
      event {
        eventId
        userId
        name
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
        introduction
        tag
        pin
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
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userId
      name
      introduction
      lat
      lng
      tag
      acquaintance {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
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
      status
      event {
        eventId
        userId
        name
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
        introduction
        tag
        pin
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
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      name
      introduction
      lat
      lng
      tag
      acquaintance {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
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
      status
      event {
        eventId
        userId
        name
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
        introduction
        tag
        pin
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
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      eventId
      userId
      name
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
      introduction
      tag
      pin
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
    }
  }
`;
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      eventId
      userId
      name
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
      introduction
      tag
      pin
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
    }
  }
`;
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      eventId
      userId
      name
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
      introduction
      tag
      pin
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
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      commentId
      eventId
      author {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
      }
      value
      owner
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
      commentId
      eventId
      author {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
      }
      value
      owner
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
      commentId
      eventId
      author {
        userId
        name
        introduction
        lat
        lng
        tag
        acquaintance {
          userId
          name
          introduction
          lat
          lng
          tag
          status
          owner
          createdAt
          updatedAt
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
        status
        event {
          eventId
          userId
          name
          introduction
          tag
          pin
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
        owner
        createdAt
        updatedAt
      }
      value
      owner
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
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
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
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
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
export const createEventImage = /* GraphQL */ `
  mutation CreateEventImage(
    $input: CreateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    createEventImage(input: $input, condition: $condition) {
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
export const updateEventImage = /* GraphQL */ `
  mutation UpdateEventImage(
    $input: UpdateEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    updateEventImage(input: $input, condition: $condition) {
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
export const deleteEventImage = /* GraphQL */ `
  mutation DeleteEventImage(
    $input: DeleteEventImageInput!
    $condition: ModelEventImageConditionInput
  ) {
    deleteEventImage(input: $input, condition: $condition) {
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
