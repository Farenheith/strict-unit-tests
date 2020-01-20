import sinon = require('sinon');
export { expect } from 'chai';
export { before, after, beforeEach, afterEach, describe, it } from 'mocha';
export { stubSuperConstructor } from 'sinon-chai-calls-assertion';
export * from 'strict-mocha-describers';
export declare const match: sinon.SinonMatch;
export declare type SinonStub = sinon.SinonStub<any, any>;
export declare function stub<T, K extends keyof T>(obj?: T, method?: K): SinonStub;
import 'mocha';
