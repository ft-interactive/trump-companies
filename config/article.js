export default () => ({ // eslint-disable-line

  // link file UUID
  id: '8ba58c48-e73e-11e6-893c-082c54a7f539',

  // canonical URL of the published page
  // https://ig.ft.com/trump-cabinet/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/trump-companies',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Companies react to Donald Trump',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Follow companies',

  topic: {
    name: 'Donald Trump',
    url: 'https://www.ft.com/topics/people/Donald_Trump',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: 'FT reporters',

  // Appears in the HTML <title>
  title: 'Companies react to Donald Trump',

  // meta data
  description: 'Follow companies',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F867b4c1e-b627-11e6-961e-a1acd97f622d?source=ig&fit=scale-down&width=1200',
  socialHeadline: 'Business and Donald Trump: Here\'s what some of the biggest US companies are saying about the new president',
  socialSummary: 'From Elon Musk and Jeff Bezos to Warren Buffett: here\'s what they\'re saying.',

  // TWITTER
  // twitterImage: '',
  //twitterCreator: '@ft',
  tweetText: 'Business and Donald Trump: Here\'s what some of the biggest US companies are saying about the new president',
  twitterHeadline: 'Business and Donald Trump: Here\'s what some of the biggest US companies are saying about the new president',

  // FACEBOOK
  // facebookImage: '',
  facebookHeadline: 'Business and Donald Trump: Here\'s what some of the biggest US companies are saying about the new president',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
