import { ReactiveFormsModule } from '@angular/forms';
import { render, screen, fireEvent } from '@testing-library/angular';
import { FormComponent } from './form.component';

let component: any;
const formSetup = async () => {
  component = await render(FormComponent, {
    declarations: [],
    imports: [ReactiveFormsModule],
  });
};

describe('forms', () => {
  describe('first name', () => {
    it('should check that first name is required', async () => {
      await formSetup();
      fireEvent.blur(screen.getByLabelText('First Name'));
      const firstName = screen.getByText('First Name Is Required');
      expect(firstName).toBeTruthy();
    });

    it('should check max length of first name is less than 30 characters', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('First Name'), {
        target: {
          value: 'asdfasdfasdfasdfasdfasdfdvzfvzfddddddddrdrdtrdrtdrdd',
        },
      });
      fireEvent.blur(screen.getByLabelText('First Name'));

      const firstName = screen.getByText('Max Length 30 Characters');
      expect(firstName).toBeTruthy();
    });

    it('should not display any first name validation errors', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('First Name'), {
        target: {
          value: 'Jerry',
        },
      });
      fireEvent.blur(screen.getByLabelText('First Name'));

      const fName = screen.queryByText('First Name Is Required');
      const firstName = screen.queryByText('Max Length 30 Characters');
      expect(fName).toBeFalsy();
      expect(firstName).toBeFalsy();
    });
  });

  describe('last name', () => {
    it('should check that last name is required', async () => {
      await formSetup();
      fireEvent.blur(screen.getByLabelText('Last Name'));
      const lastName = screen.getByText('Last Name Is Required');
      expect(lastName).toBeTruthy();
    });

    it('should check max length of last name is less than 30 characters', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Last Name'), {
        target: {
          value: 'cvbcbvccsdfsgdvfgftftftftftftftftftftftftftftftftf',
        },
      });
      fireEvent.blur(screen.getByLabelText('Last Name'));

      const lastName = screen.getByText('Max Length 30 Characters');
      expect(lastName).toBeTruthy();
    });

    it('should not display any last name validation errors', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Last Name'), {
        target: {
          value: 'Seinfeld',
        },
      });
      fireEvent.blur(screen.getByLabelText('Last Name'));

      const lName = screen.queryByText('Last Name Is Required');
      const lastName = screen.queryByText('Max Length 30 Characters');
      expect(lName).toBeFalsy();
      expect(lastName).toBeFalsy();
    });
  });

  describe('middle name', () => {
    it('should check max length of middle name is less than 30 characters', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Middle Name'), {
        target: {
          value: 'askldfjakdfjakdjfaksdfjaklsdjfaklsdfjaklsdfjad',
        },
      });
      fireEvent.blur(screen.getByLabelText('Middle Name'));

      const midName = screen.getByText('Max Length 30 Characters');
      expect(midName).toBeTruthy();
    });

    it('should not display any middle name validation errors', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Middle Name'), {
        target: {
          value: 'Jessica',
        },
      });
      fireEvent.blur(screen.getByLabelText('Middle Name'));

      const midName = screen.queryByText('Max Length 30 Characters');
      expect(midName).toBeFalsy();
    });
  });

  describe('checkbox toggle', () => {
    it('should check if middle name input box is visible', async () => {
      await formSetup();
      const actual = screen.getByLabelText('Middle Name');
      expect(actual).toBeTruthy();
    });

    it('should not display middle name input box if option is checked', async () => {
      await formSetup();
      const checkBtn = screen.getByLabelText('No Middle Name');
      fireEvent.click(checkBtn);
      component.detectChanges();
      const actual = screen.queryByLabelText('Middle Name');
      expect(actual).toBeFalsy();
    });
  });

  describe('phone number', () => {
    it('should check that phone number is required', async () => {
      await formSetup();
      fireEvent.blur(screen.getByLabelText('Phone Number'));
      const phoneNum = screen.getByText('Phone Number Is Required');
      expect(phoneNum).toBeTruthy();
    });

    it('should check number is 10 digits long', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Phone Number'), {
        target: {
          value: '111222333444555',
        },
      });
      fireEvent.blur(screen.getByLabelText('Phone Number'));

      const phoneNum = screen.getByText('Enter 10 Digit Number');
      expect(phoneNum).toBeTruthy();
    });

    it('should not display any phone number validation errors', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('Phone Number'), {
        target: {
          value: '1112223333',
        },
      });
      fireEvent.blur(screen.getByLabelText('Phone Number'));

      const phoneReq = screen.queryByText('Phone Number Is Required');
      const phoneDig = screen.queryByText('Enter 10 Digit Number');
      expect(phoneReq).toBeFalsy();
      expect(phoneDig).toBeFalsy();
    });
  });

  describe('success message', () => {
    it('should display success message', async () => {
      await formSetup();
      fireEvent.input(screen.getByLabelText('First Name'), {
        target: {
          value: 'Jerry',
        },
      });

      fireEvent.input(screen.getByLabelText('Middle Name'), {
        target: {
          value: 'George',
        },
      });

      fireEvent.input(screen.getByLabelText('Last Name'), {
        target: {
          value: 'Seinfeld',
        },
      });

      fireEvent.input(screen.getByLabelText('Phone Number'), {
        target: {
          value: '2223334444',
        },
      });

      const addBtn = screen.getByRole('button', {
        name: 'Add Info',
      });
      fireEvent.click(addBtn);

      const validTest = screen.getByText('Form Added Successfully!');
      expect(validTest).toBeTruthy();
    });

    it('should not display any message if form is invalid', async () => {
      await formSetup();
      const addBtn = screen.getByRole('button', {
        name: 'Add Info',
      });
      fireEvent.click(addBtn);

      const badTest = screen.queryByText('Form Added Successfully!');
      expect(badTest).toBeFalsy();
    });
  });
});
