"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IssueFilter = /*#__PURE__*/function (_React$Component) {
  _inherits(IssueFilter, _React$Component);

  var _super = _createSuper(IssueFilter);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _super.apply(this, arguments);
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, "This is a place holder");
    }
  }]);

  return IssueFilter;
}(React.Component);

var IssueRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(IssueRow, _React$Component2);

  var _super2 = _createSuper(IssueRow);

  function IssueRow() {
    _classCallCheck(this, IssueRow);

    return _super2.apply(this, arguments);
  }

  _createClass(IssueRow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, this.props.issue.id), /*#__PURE__*/React.createElement("td", null, this.props.issue.status), /*#__PURE__*/React.createElement("td", null, this.props.issue.owner), /*#__PURE__*/React.createElement("td", null, this.props.issue.created), /*#__PURE__*/React.createElement("td", null, this.props.issue.effort), /*#__PURE__*/React.createElement("td", null, this.props.issue.due ? this.props.issue.due : ''), /*#__PURE__*/React.createElement("td", null, this.props.issue.title));
    }
  }]);

  return IssueRow;
}(React.Component);

var IssueTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(IssueTable, _React$Component3);

  var _super3 = _createSuper(IssueTable);

  function IssueTable() {
    _classCallCheck(this, IssueTable);

    return _super3.apply(this, arguments);
  }

  _createClass(IssueTable, [{
    key: "render",
    value: function render() {
      var issueRows = this.props.issues.map(function (issue) {
        return /*#__PURE__*/React.createElement(IssueRow, {
          issue: issue
        });
      });
      return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due Date"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
    }
  }]);

  return IssueTable;
}(React.Component);

var IssueAdd = /*#__PURE__*/function (_React$Component4) {
  _inherits(IssueAdd, _React$Component4);

  var _super4 = _createSuper(IssueAdd);

  function IssueAdd(props) {
    var _this;

    _classCallCheck(this, IssueAdd);

    _this = _super4.call(this, props);
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var form = document.forms.IssuesForm;
      var issue = {
        owner: form.owner.value,
        title: form.title.value
      };
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        name: "IssuesForm",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), /*#__PURE__*/React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var IssueList = /*#__PURE__*/function (_React$Component5) {
  _inherits(IssueList, _React$Component5);

  var _super5 = _createSuper(IssueList);

  function IssueList(props) {
    var _this2;

    _classCallCheck(this, IssueList);

    _this2 = _super5.call(this, props);
    _this2.state = {
      issues: []
    };
    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, response, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query{\n            issueList{\n                id title status owner created effort due\n            }\n        }";
                _context.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                result = _context.sent;
                this.setState({
                  issues: result.data.issueList
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      issue.id = this.state.issues.length + 1;
      issue.status = "New";
      issue.effort = 6;
      issue.created = new Date().toDateString();
      var newIssueList = this.state.issues.slice();
      newIssueList.push(issue);
      this.setState({
        issues: newIssueList
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Issue Tracker"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
        issues: this.state.issues
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(IssueList, null), document.querySelector('#contents'));