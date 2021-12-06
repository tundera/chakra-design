import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

const computedFields: ComputedFields = {
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  tweetIds: {
    type: 'json',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
      const tweetIDs = tweetMatches?.map(
        (tweet: any) => tweet.match(/[0-9]+/g)[0]
      )
      return tweetIDs ?? []
    },
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const ComponentDoc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/doc/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    kind: { type: 'string', required: true },
    slug: { type: 'string', required: true },
  },
  computedFields,
}))

// const Snippet = defineDocumentType(() => ({
//   name: 'Snippet',
//   filePathPattern: 'snippets/*.mdx',
//   bodyType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     description: { type: 'string', required: true },
//   },
//   computedFields,
// }))

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: '../packages',
  documentTypes: [ComponentDoc, OtherPage],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

export default contentLayerConfig
