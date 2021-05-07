import {device, element, by} from 'detox';

describe('Todo', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have title label', async () => {
    await expect(element(by.text('My Neighbour React Native'))).toBeVisible();
    await expect(element(by.id('appTitle'))).toBeVisible();
  });
  it('should add a new Todo', async () => {
    await expect(element(by.id('textInput'))).toBeVisible();
    await element(by.id('textInput')).typeText('New Todo');
    await element(by.id('addButton')).tap();
  });
});
