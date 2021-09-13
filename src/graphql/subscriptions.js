/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($owner: String) {
    onCreateEvent(owner: $owner) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($owner: String) {
    onUpdateEvent(owner: $owner) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($owner: String) {
    onDeleteEvent(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateUserImage = /* GraphQL */ `
  subscription OnCreateUserImage($owner: String) {
    onCreateUserImage(owner: $owner) {
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
export const onUpdateUserImage = /* GraphQL */ `
  subscription OnUpdateUserImage($owner: String) {
    onUpdateUserImage(owner: $owner) {
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
export const onDeleteUserImage = /* GraphQL */ `
  subscription OnDeleteUserImage($owner: String) {
    onDeleteUserImage(owner: $owner) {
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
export const onCreateEventImage = /* GraphQL */ `
  subscription OnCreateEventImage($owner: String) {
    onCreateEventImage(owner: $owner) {
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
export const onUpdateEventImage = /* GraphQL */ `
  subscription OnUpdateEventImage($owner: String) {
    onUpdateEventImage(owner: $owner) {
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
export const onDeleteEventImage = /* GraphQL */ `
  subscription OnDeleteEventImage($owner: String) {
    onDeleteEventImage(owner: $owner) {
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
