// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserStatus = {
  "EVERYONE": "everyone",
  "WELCOME": "welcome",
  "REJECT": "reject"
};

const { User, UserImage, Event, EventImage, Comment } = initSchema(schema);

export {
  User,
  UserImage,
  Event,
  EventImage,
  Comment,
  UserStatus
};