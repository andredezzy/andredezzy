import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export type NotionArticle = PageObjectResponse & {
  properties: {
    Name: {
      title: [
        {
          plain_text: string;
        },
      ];
    };
    Status: {
      status: {
        name: string;
      };
    };
    'Blog views count': {
      number: number;
    };
  };
};
