export class CreateContentItemDto {
  readonly type?: string;
  readonly order?: number;
  readonly videoUrl?: string;
  readonly videoTime?: string;
  readonly imageUrl?: string;
  readonly title: string;
  readonly text?: string;
  readonly slug?: string;
  readonly published: boolean;
  stakeholderIds?: string[];
  providerIds?: string[];
  tagIds?: string[];
}

export class UpdateContentItemDto {
  readonly type?: string;
  readonly order?: number;
  readonly videoUrl?: string;
  readonly videoTime?: string;
  readonly imageUrl?: string;
  readonly title?: string;
  readonly text?: string;
  readonly slug?: string;
  readonly published?: boolean;
  stakeholderIds?: string[];
  providerIds?: string[];
  tagIds?: string[];
}
