# strict-unit-tests

A wrapper for many test related lib to create stricts and enforced unit tests

## How to use it?

First, install it in your project:

```batch
npm i --save-dev strict-unit-tests
```
second, setup your project:

```batch
npx setup-project
```

Create your test/setup.spec.ts in your test folder with this content:
```typescript
import 'strict-unit-tests';

```

That's it. You Have your project with typescript, ts-node, mocha, sinon, chai and nyc, enforced-assertions, strict-mocha-describers and sinon-chai-calls-assertions, all ready to use.

You can get more details about each package in they own page, but is important to enforce that it is recommended to use the wrapper of this test to write all your tests. Take a look in the test folder, there we'll create a lot of examples of differents use cases.
