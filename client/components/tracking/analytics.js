/* eslint max-len: ["error", { "ignoreStrings": true }]*/

// track clicks on the follow button
const followButtons = document.querySelectorAll('.card-position .follow-button-form button.follow-button');

Array.from(followButtons).forEach(followButton => {
  followButton.addEventListener('click', () => {
    const dataConceptId = this.getAttribute('data-concept-id');
    const category = 'followButton';
    const action = 'click';

    const oTrackingEventDetails = {
      detail: {
        category,
        action,
        id: dataConceptId,
      },
      bubbles: true,
    };

    const gaEventDetails = {
      hitType: 'event',
      eventCategory: category,
      eventAction: action,
      eventValue: dataConceptId,
    };

    document.body.dispatchEvent(new CustomEvent('oTracking.event', oTrackingEventDetails));
    ga('send', gaEventDetails);

    console.log(`followed ${dataConceptId}`);
  });
});
