export const constants = {
  FOOTER_QUICK_LINKS_OPEN: "Footer/FOOTER_QUICK_LINKS_OPEN",
  FOOTER_QUICK_LINKS_CLOSE: "Footer/FOOTER_QUICK_LINKS_CLOSE",
  FOOTER_CONTACT_LINKS_OPEN: "Footer/FOOTER_CONTACT_LINKS_OPEN",
  FOOTER_CONTACT_LINKS_CLOSE: "Footer/FOOTER_CONTACT_LINKS_CLOSE"
};

export const actions = {
  openQuickLinks() {
    return {
      type: constants.FOOTER_QUICK_LINKS_OPEN,
      quickLinkNav: true
    };
  },
  closeQuickLinks() {
    return {
      type: constants.FOOTER_QUICK_LINKS_CLOSE,
      quickLinkNav: false
    };
  },
  openContactLinks() {
    return {
      type: constants.FOOTER_CONTACT_LINKS_OPEN,
      contactLinkNav: true
    };
  },
  closeContactLinks() {
    return {
      type: constants.FOOTER_CONTACT_LINKS_CLOSE,
      contactLinkNav: false
    };
  }
};

export const initialState = {
  quickLinkNav: false,
  contactLinkNav: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FOOTER_QUICK_LINKS_OPEN:
      return {
        ...state,
        quickLinkNav: action.openQuickLinks
      };
    case constants.FOOTER_QUICK_LINKS_CLOSE:
      return {
        ...state,
        quickLinkNav: action.closeQuickLinks
      };
    case constants.FOOTER_CONTACT_LINKS_OPEN:
      return {
        ...state,
        contactLinkNav: action.openContactLinks
      };
    case constants.FOOTER_CONTACT_LINKS_CLOSE:
      return {
        ...state,
        contactLinkNav: action.closeContactLinks
      };
    default:
      return state;
  }
};
