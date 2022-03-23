import { render, screen, fireEvent } from '@testing-library/angular';
import { MainComponent } from './main.component';

const preTest = async () => {
  await render(MainComponent);
};

describe('main', () => {
  it('should display header text', async () => {
    await preTest();
    const headerText = screen.getByText('Angular Test Driven Development');
    expect(headerText).toBeTruthy();
  });

  it('should not display header text when checkbox is clicked', async () => {
    await preTest();
    const checkBtn = screen.getByRole('checkbox', {
      name: 'Click Checkbox To Hide Header Text',
    });
    fireEvent.click(checkBtn);

    const headerText = screen.queryByText('Angular Test Driven Development');
    expect(headerText).toBeFalsy();
  });

  it('should display checkbox', async () => {
    await preTest();
    const check = screen.getByRole('checkbox', {
      name: 'Click Checkbox To Hide Header Text',
    });
    expect(check).toBeTruthy();
  });

  it('should display hide string button', async () => {
    await preTest();
    const hideBtn = screen.getByRole('button', {
      name: 'Hide 5 Strings',
    });
    expect(hideBtn).toBeTruthy();
  });

  const listTest = async (listItem: string) => {
    await render(MainComponent);
    const actual = screen.getByText(listItem);
    expect(actual).toBeTruthy();
  };

  describe('display list', () => {
    it('should display Lions text', async () => {
      await listTest('Lions');
    });
    it('should display Tigers text', async () => {
      await listTest('Tigers');
    });
    it('should display Bears text', async () => {
      await listTest('Bears');
    });
    it('should display Geese text', async () => {
      await listTest('Geese');
    });
    it('should display Deer text', async () => {
      await listTest('Deer');
    });
  });

  const noList = async (listItem: string) => {
    await render(MainComponent);
    const btnClick = screen.getByRole('button', {
      name: 'Hide 5 Strings',
    });
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  describe('not display list', () => {
    it('should not display Lions text', async () => {
      await noList('Lions');
    });
    it('should not display Tigers text', async () => {
      await noList('Tigers');
    });
    it('should not display Bears text', async () => {
      await noList('Bears');
    });
    it('should not display Geese text', async () => {
      await noList('Geese');
    });
    it('should not display Deer text', async () => {
      await noList('Deer');
    });
  });
});
