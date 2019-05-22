export class Post {
    'title': {
        'rendered': string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    date: string;
    slug: string;
    link: string;
    'wp:featuredmedia': {
      'href': string;
    };
    featured_media: number;
    better_featured_image: {
      media_type: string;

      media_details: {
        sizes: {
          thumbnail: {
            file: string;
          },
          medium: {
            file: string;
            source_url: string;
          },
          medium_large: {
            file: string;
            source_url: string;
          },
          large: {
            file: string;
            source_url: string;
          }
      }
      };
  };

}
