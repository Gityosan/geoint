import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum UserStatus {
  EVERYONE = "everyone",
  WELCOME = "welcome",
  REJECT = "reject"
}



export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly introduction?: string;
  readonly lat?: number;
  readonly lng?: number;
  readonly tag?: (string | null)[];
  readonly acquaintance?: (string | null)[];
  readonly userImageId: string;
  readonly icon?: UserImage;
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly event?: (Event | null)[];
  readonly owner: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class UserImage {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly size?: number;
  readonly alt?: string;
  readonly url?: string;
  readonly identityId: string;
  readonly owner: string;
  constructor(init: ModelInit<UserImage>);
  static copyOf(source: UserImage, mutator: (draft: MutableModel<UserImage>) => MutableModel<UserImage> | void): UserImage;
}

export declare class Event {
  readonly id: string;
  readonly userId: string;
  readonly name?: string;
  readonly eventImageId: string;
  readonly image?: EventImage;
  readonly introduction?: string;
  readonly tag?: (string | null)[];
  readonly lat?: number;
  readonly lng?: number;
  readonly limit?: number;
  readonly reserved?: number;
  readonly start?: string;
  readonly end?: string;
  readonly from?: string;
  readonly to?: string;
  readonly comment?: (Comment | null)[];
  readonly reported?: boolean;
  readonly owner: string;
  constructor(init: ModelInit<Event>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

export declare class EventImage {
  readonly id: string;
  readonly name?: string;
  readonly type?: string;
  readonly size?: number;
  readonly alt?: string;
  readonly url?: string;
  readonly identityId: string;
  readonly owner: string;
  constructor(init: ModelInit<EventImage>);
  static copyOf(source: EventImage, mutator: (draft: MutableModel<EventImage>) => MutableModel<EventImage> | void): EventImage;
}

export declare class Comment {
  readonly id: string;
  readonly eventId: string;
  readonly value?: string;
  readonly owner: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}