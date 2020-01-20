"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const sinon = require("sinon");
const sinon_chai_calls_assertion_1 = require("sinon-chai-calls-assertion");
const enforced_assertions_1 = require("enforced-assertions");
var chai_1 = require("chai");
exports.expect = chai_1.expect;
var mocha_1 = require("mocha");
exports.before = mocha_1.before;
exports.after = mocha_1.after;
exports.beforeEach = mocha_1.beforeEach;
exports.afterEach = mocha_1.afterEach;
exports.describe = mocha_1.describe;
exports.it = mocha_1.it;
var sinon_chai_calls_assertion_2 = require("sinon-chai-calls-assertion");
exports.stubSuperConstructor = sinon_chai_calls_assertion_2.stubSuperConstructor;
__export(require("strict-mocha-describers"));
const mocha_2 = require("mocha");
exports.match = sinon.match;
function stub(obj, method) {
    return sinon.stub(obj, method);
}
exports.stub = stub;
require("mocha");
chai.use(sinon_chai_calls_assertion_1.callsLike);
enforced_assertions_1.enforceStubsAssertions(sinon, chai);
mocha_2.beforeEach(() => {
    sinon.restore();
});
//# sourceMappingURL=strict-unit-tests.js.map