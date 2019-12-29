import {
	SinonStub, stubSuperConstructor, describeClass, stub, expect
} from '../src/strict-unit-tests';

class BaseTest {
	a: number;
	constructor() {
		this.a = 1;
	}

	methodBase() {
		return 'base';
	}
}

class Test extends BaseTest {
	b: number;
	constructor() {
		super();
		this.b = 2;
	}

	method1() {
		return 'test1 ' + this.methodBase();
	}
}

let target: Test;
let superStub: SinonStub;
function bootStrapper() {
	superStub = stubSuperConstructor(Test);
	return target = new Test();
}

describeClass(Test, bootStrapper, describeMethod => {
	describeMethod("method1", it => {
		beforeEach(() => {
			stub(target, 'methodBase').returns('methodBase result');
		});

		afterEach('should call super properly', () => {
			expect(superStub).to.have.callsLike([]);
		});

		it('should return "test1 " + result of methodBase', () => {
			const result = target.method1();

			expect(target.methodBase).to.have.callsLike([]);
			expect(result).to.be.eq('test1 methodBase result');
		});
	});
})
