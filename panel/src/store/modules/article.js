const state = {
  selectedArticle: {},
  selectedArticleContents: {},
  articlesRootPath: '',
  contentToPreview: '',
};

const getters = {
  getSelectedArticle(state) {
    return state.selectedArticle;
  },
  getSelectedArticleContents(state) {
    return state.selectedArticleContents;
  },
  getArticleRootPath(state) {
    return state.articlesRootPath;
  },
  getContentToPreview(state) {
    return state.contentToPreview;
  },
};

const mutations = {
  selectArticle(state, payload) {
    state.selectedArticle = payload;
  },
  updateSelectedArticleContents(state, payload) {
    state.selectedArticleContents = payload;
  },
  setArticleRootPath(state, payload) {
    state.articlesRootPath = payload;
  },
  updateContentToPreview(state, payload) {
    state.contentToPreview = payload;
  },
};

const actions = {
  selectArticle({ commit }, payload) {
    return new Promise(resolve => {
      commit('selectArticle', payload);
      resolve();
    });
  },
  updateSelectedArticleContents({ commit }, payload) {
    return new Promise(resolve => {
      commit('updateSelectedArticleContents', payload);
      resolve();
    });
  },
  setArticleRootPath({ commit }, payload) {
    commit('setArticleRootPath', payload);
  },
  updateContentToPreview({ commit }, payload) {
    return new Promise(resolve => {
      commit('updateContentToPreview', payload);
      resolve();
    });
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
