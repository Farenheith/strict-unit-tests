import * as chai from 'chai';
import sinon = require('sinon');
import { callsLike } from 'sinon-chai-calls-assertion';
import { enforceStubsAssertions } from 'enforced-assertions';
export { expect } from 'chai';
export { before, after, beforeEach, afterEach, describe, it } from 'mocha';
export { stubSuperConstructor } from 'sinon-chai-calls-assertion';
export * from 'strict-mocha-describers';

import { beforeEach } from 'mocha';

export const match = sinon.match;
// tslint:disable-next-line: no-any
export type SinonStub = sinon.SinonStub<any, any>;

export function stub<T, K extends keyof T>(obj?: T, method?: K) {
	return sinon.stub(obj!, method!) as SinonStub;
}
import 'mocha';

chai.use(callsLike);
enforceStubsAssertions(sinon, chai);

beforeEach(() => {
	sinon.restore();
});
