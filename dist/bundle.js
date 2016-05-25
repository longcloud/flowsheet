(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) s(r[o]);return s;
})({ 1: [function (require, module, exports) {
        /**
         * Created by longcloud on 2016/5/25.
         */

        class Child extends React.Component {
            render() {
                return React.createElement("div", null, " The Child 8 ");
            }
        }

        module.exports = Child;
    }, {}], 2: [function (require, module, exports) {
        var Child = require('./Child');

        class Parent extends React.Component {
            render() {
                return React.createElement("div", null, React.createElement("div", null, " Hello World 9"), React.createElement(Child, null));
            }
        };

        module.exports = Parent; /**
                                 * Created by longcloud on 2016/5/25.
                                 */
    }, { "./Child": 1 }], 3: [function (require, module, exports) {
        var Parent = require('./components/Parent');

        var ExampleApplication = React.createClass({ displayName: "ExampleApplication",
            render: function () {
                var elapsed = Math.round(this.props.elapsed / 100);
                var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0');
                var message = 'React has been successfully running for ' + seconds + ' seconds.';

                return React.createElement("div", null, message, React.createElement(Parent, null));
            }
        });

        var start = new Date().getTime();

        setInterval(function () {
            ReactDOM.render(React.createElement(ExampleApplication, { elapsed: new Date().getTime() - start }), document.getElementById('app'));
        }, 50);
    }, { "./components/Parent": 2 }] }, {}, [3]);
//# sourceMappingURL=bundle.js.map
