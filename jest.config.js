module.exports = {
  testEnvironment: 'jsdom',
  preset: 'solid-jest/preset/browser',
  setupFilesAfterEnv: ["./tests/setup.ts"],
};
