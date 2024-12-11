export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export interface Testimonial {
  sys: {
    createdAt: string;
    updatedAt: string;
    id: string;
    type: string;
    locale: string;
    space?: Record<string, unknown>;
    environment?: Record<string, unknown>;
    publishedVersion?: number;
    revision?: number;
    contentType?: Record<string, unknown>;
  };
  fields: {
    name: string;
    review: {
      nodeType: string;
      data: Record<string, unknown>;
      content: Array<{
        nodeType: string;
        data: Record<string, unknown>;
        content: Array<{
          nodeType: string;
          value: string;
          marks: Array<Record<string, unknown>>;
          data: Record<string, unknown>;
        }>;
      }>;
    };
    location: string;
    stars: number;
    _id: string;
  };
}
