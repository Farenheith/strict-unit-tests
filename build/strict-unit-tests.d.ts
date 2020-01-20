import * as sinon from 'sinon';
export { match, SinonStub } from 'sinon';
export { expect } from 'chai';
export { before, after, beforeEach, afterEach, describe, it } from 'mocha';
export { stubSuperConstructor } from 'sinon-chai-calls-assertion';
export * from 'strict-mocha-describers';
export declare function stub<T, K extends keyof T>(obj?: T, method?: K): sinon.SinonStub<any[], any>;
import 'mocha';
