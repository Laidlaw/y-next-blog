'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/alanlaidlaw/Desktop/site/with-next/x-next-blog/components/Submit.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement('button', { type: 'submit', 'data-jsx': 567193191,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Submit'), _react2.default.createElement(_style2.default, {
    styleId: 567193191,
    css: 'form[data-jsx="567193191"] {border-bottom: 1px solid #ececec;padding-bottom: 20px;margin-bottom: 20px;}h1[data-jsx="567193191"] {font-size: 20px;}input[data-jsx="567193191"] {display: block;margin-bottom: 10px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3VibWl0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFDSiw0QkFDNkIsaUNBQ1oscUJBQ0Qsb0JBQ3JCLENBQ0csMEJBQ2MsZ0JBQ2pCLENBQ00sNkJBQ1UsZUFDSyxvQkFDckIiLCJmaWxlIjoiY29tcG9uZW50cy9TdWJtaXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYW5sYWlkbGF3L0Rlc2t0b3Avc2l0ZS93aXRoLW5leHQveC1uZXh0LWJsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIGdyYXBocWwgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmZ1bmN0aW9uIFN1Ym1pdCAoeyBjcmVhdGVQb3N0IH0pIHtcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0IChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBsZXQgdGl0bGUgPSBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZVxuICAgIGxldCB1cmwgPSBlLnRhcmdldC5lbGVtZW50cy51cmwudmFsdWVcblxuICAgIGlmICh0aXRsZSA9PT0gJycgfHwgdXJsID09PSAnJykge1xuICAgICAgd2luZG93LmFsZXJ0KCdCb3RoIGZpZWxkcyBhcmUgcmVxdWlyZWQuJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIHByZXBlbmQgaHR0cCBpZiBtaXNzaW5nIGZyb20gdXJsXG4gICAgaWYgKCF1cmwubWF0Y2goL15bYS16QS1aXSs6XFwvXFwvLykpIHtcbiAgICAgIHVybCA9IGBodHRwOi8vJHt1cmx9YFxuICAgIH1cblxuICAgIGNyZWF0ZVBvc3QodGl0bGUsIHVybClcblxuICAgIC8vIHJlc2V0IGZvcm1cbiAgICBlLnRhcmdldC5lbGVtZW50cy50aXRsZS52YWx1ZSA9ICcnXG4gICAgZS50YXJnZXQuZWxlbWVudHMudXJsLnZhbHVlID0gJydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aDE+U3VibWl0PC9oMT5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndGl0bGUnIG5hbWU9J3RpdGxlJyAvPlxuICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSd1cmwnIG5hbWU9J3VybCcgLz5cbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmNvbnN0IGNyZWF0ZVBvc3QgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZVBvc3QoJHRpdGxlOiBTdHJpbmchLCAkdXJsOiBTdHJpbmchKSB7XG4gICAgY3JlYXRlUG9zdCh0aXRsZTogJHRpdGxlLCB1cmw6ICR1cmwpIHtcbiAgICAgIGlkXG4gICAgICB0aXRsZVxuICAgICAgdm90ZXNcbiAgICAgIHVybFxuICAgICAgY3JlYXRlZEF0XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwoY3JlYXRlUG9zdCwge1xuICBwcm9wczogKHsgbXV0YXRlIH0pID0+ICh7XG4gICAgY3JlYXRlUG9zdDogKHRpdGxlLCB1cmwpID0+IG11dGF0ZSh7XG4gICAgICB2YXJpYWJsZXM6IHsgdGl0bGUsIHVybCB9LFxuICAgICAgdXBkYXRlUXVlcmllczoge1xuICAgICAgICBhbGxQb3N0czogKHByZXZpb3VzUmVzdWx0LCB7IG11dGF0aW9uUmVzdWx0IH0pID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdQb3N0ID0gbXV0YXRpb25SZXN1bHQuZGF0YS5jcmVhdGVQb3N0XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzUmVzdWx0LCB7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIG5ldyBwb3N0XG4gICAgICAgICAgICBhbGxQb3N0czogW25ld1Bvc3QsIC4uLnByZXZpb3VzUmVzdWx0LmFsbFBvc3RzXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSkoU3VibWl0KVxuIl19 */\n/*@ sourceURL=components/Submit.js */'
  }));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);