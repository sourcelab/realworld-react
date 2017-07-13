const filter = require('lodash/filter');
const find = require('lodash/find');
let articles = [
  { id: 1, title: 'I like pie', description: 'The best food', body: 'It just tastes so so so so so so good!', tags: [] },
  { id: 2, title: 'I love jelly beans', description: "The diabetic's choice", body: 'Popcorn is by far my favorite flavor', tags: [] }
];
const tags = [
  { id: 1, title: 'reactjs' },
  { id: 2, title: 'angularjs' },
  { id: 3, title: 'jquery' },
];
module.exports = {
  Query: {
    articles() {
      return articles;
    },
    tags() {
      return tags;
    }
  },
  Mutation: {
    tagArticle(_, { articleId }) {
      const article = find(articles, { id: articleId });
      if (!article) {
        throw new Error(`Couldn't find article with id ${articleId}`);
      }
      const nextArticle = Object.assign({}, article, { tags: article.tags.concat(tags.slice(0, 1)) });
      articles = articles.map((item, index) => {
        if (item.id === articleId) {
          return nextArticle;
	}
	return item;
      });
      return nextArticle;
    },
  },
  Author: {
    articles(author) {
      return filter(articles, { authorId: author.id });
    },
  },
  Article: {
    author(article) {
      return find(authors, { id: article.authorId });
    },
  },
};
