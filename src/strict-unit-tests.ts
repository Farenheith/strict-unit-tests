import * as chai from 'chai';
import { callsLike } from 'sinon-chai-calls-assertion';
import { enforceStubsAssertions } from 'enforced-assertions';
export { stub, match, SinonStub } from 'sinon';
export { expect } from 'chai';
export { before, after, beforeEach, afterEach, describe, it } from 'mocha';
export { stubSuperConstructor } from 'sinon-chai-calls-assertion';
export * from 'strict-mocha-describers';

chai.use(callsLike);
enforceStubsAssertions();
