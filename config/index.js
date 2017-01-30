import article from './article';
import getFlags from './flags';
import axios from 'axios';

export default async function() {
  const d = await article();
  const flags = await getFlags();
  const endpoint = 'http://bertha.ig.ft.com/view/publish/gss/1r_TIJPjUu1xOVk3SiOzF1hSXEyZbP2zedASR9wDYCv8/data,pageText';
  let cards = {};
  let data;
  let pageText;
  let intro;
  let headline;

  try {
    const res = await axios(endpoint);
    data = res.data.data;
    pageText = res.data.pageText;
    intro = res.data.pageText.filter((d) => d.name === 'lede')[0].value;
    headline = res.data.pageText.filter((d) => d.name === 'head')[0].value;
  } catch (e) {
    console.log('Error getting content from Bertha', e);
  }

  cards = data.filter((d) => d.revised);

  try {
    const results = await Promise.all(cards.map(async function(card) {
      card.links = await Promise.all(card.links.map(async function(link) {
        const linkURL = link;
        let linkPubDate = '';
        let linkHeadline = '';

        try {
          const linkUIUD = linkURL.split('https://www.ft.com/content/')[1];
          const response = await axios(`http://next-elastic.ft.com/v3_api_v2/item/${linkUIUD}`);

          linkPubDate = response.data._source.publishedDate;
          linkHeadline = response.data._source.title;
        } catch (e) {
          console.log('Error pinging Next API', e);
        }

        return {
          linkURL,
          linkPubDate,
          linkHeadline,
        }
      }));
      return card;
    }));
    // cards.data = results;
  } catch (e) {
    console.error(e);
  }

  return {
    ...d,
    intro,
    pageText,
    cards,
    flags,
  };
}
