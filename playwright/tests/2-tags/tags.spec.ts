// Tags are used to separate smoke,sanityand regression tests

import test from "@playwright/test";

// single tag

test('Test name', { tag: '@smoke' }, async () => {
// test steps
});

// Multiple tag
test('Test name1', { tag: ['@smoke', '@regression'] }, async () => {
// test steps
});


/* Run All Tests with @smoke Tag
npx playwright test --grep "@smoke"

Run Tests with Multiple Tags
npx playwright test --grep "@smoke|@regression"

Run Tagged Tests from a Specific File
npx playwright test playwright-training/tests/3-tags/tags.spec.ts --grep "@smoke" */