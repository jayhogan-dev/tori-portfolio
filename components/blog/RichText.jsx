import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node.content.some((item) =>
          item.marks?.some((mark) => mark.type === "code"),
        )
      ) {
        return (
          <div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>
        );
      }
      return <p>{children}</p>;
    },

    [INLINES.ENTRY_HYPERLINK]: (node) => {
      if (node.data.target.sys.contentType.sys.id === "post") {
        return (
          <Link href={`/blog/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
            {node.data.target.fields.image}
          </Link>
        );
      }
    },

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      const contentType = node.data.target.sys.contentType.sys.id;
      if (contentType === "post") {
        return (
          <Link
            href={`/blog/${node.data.target.fields.slug}`}
            className="text-primary-blue-700 hover:underline"
          >
            {node.data.target.fields.title}
          </Link>
        );
      } else {
        return <span>Unhandled content type {contentType}</span>;
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      const text = node.content.find((item) => item.nodeType === "text")?.value;
      return (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-blue-700 hover:underline"
        >
          {text}
        </a>
      );
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // Check if the embedded entry is a video or a post or another type
      switch (node.data.target.sys.contentType.sys.id) {
        case "videoEmbed":
          return (
            <iframe
              height="400"
              width="100%"
              src={node.data.target.fields.embedUrl}
              title={node.data.target.fields.title}
              allowFullScreen
            />
          );
        case "post": // Add a case for posts
          return (
            <Link href={`/blog/${node.data.target.fields.slug}`}>
              <a>{node.data.target.fields.title}</a>
            </Link>
          );
        default:
          return <p>Unsupported content type</p>;
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <ContentfulImage
        src={node.data.target.fields.file.url}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
        alt={node.data.target.fields.title}
      />
    ),
  },
};

const RichText = ({ content }) => (
  <>{documentToReactComponents(content, options)}</>
);

export default RichText;
