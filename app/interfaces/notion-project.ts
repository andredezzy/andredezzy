import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type NotionProject = PageObjectResponse & {
  properties: {
    Name: {
      title: [
        {
          plain_text: string;
        },
      ];
    };
    Description: {
      rich_text: [
        {
          plain_text: string;
        },
      ];
    };
    Type: {
      multi_select: [
        {
          name: string;
        },
      ];
    };
    'Source code URL': {
      url: string;
    };
  };
};
