/* eslint max-len: ["error", { "ignoreStrings": true }]*/

function sendEvent(category, action, id) {
  const gaEventDetails = {
    hitType: 'event',
    eventCategory: category,
    eventAction: action,
    eventLabel: id,
    transport: 'beacon',
  };

  ga('send', gaEventDetails);
}

// track clicks on the follow button
const followButtons = document.querySelectorAll('.card-position .follow-button-form button.follow-button');
Array.from(followButtons).forEach(followButton => {
  followButton.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-concept-id');
    const category = 'followButton';
    const action = 'click';

    sendEvent(category, action, id);
    // console.log(`followed ${id}`);
  });
});


// track clicks on the onward journey links (more on links)
const onwardJourneyLinks = document.querySelectorAll('a.card-position__onward-link');
Array.from(onwardJourneyLinks).forEach(onwardLink => {
  onwardLink.addEventListener('click', (e) => {
    const id = e.target.getAttribute('href');
    const category = 'onwardLink';
    const action = 'click';

    sendEvent(category, action, id);
    // console.log(`clicked on onward link ${id}`);
  });
});


// track clicks on the read more buttons (to expand/collapse cards)
const readMoreButtons = document.querySelectorAll('.card-position__readmore');
Array.from(readMoreButtons).forEach(readMoreButton => {
  readMoreButton.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-concept-id');
    const category = 'readMoreButton';
    let action = 'collapse';
    if (e.target.getAttribute('aria-expanded') === 'false') {
      action = 'expand';
    }

    sendEvent(category, action, id);
    // console.log(`${action} on read more button for ${id}`);
  });
});
