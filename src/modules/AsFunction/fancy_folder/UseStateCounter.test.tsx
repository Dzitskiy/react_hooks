import React from 'react';
import { render, screen } from '@testing-library/react';
import UseStateCounter from "./UseStateCounter";
import userEvent from '@testing-library/user-event'

describe('useStateCounter общие тесты', () => {














    test('check UseStateCounter', async () => {
        // Arrange
        const fakeFunction = jest.fn();

        render(<UseStateCounter onChange={fakeFunction}/>);
        
        const b1=screen.getByTestId('first-button');
        const b2=screen.getByTestId('second-button');

        // Act
        await userEvent.click(b1);
        await userEvent.click(b2);

        // Assert
        expect(b1.textContent).toBe('У меня useState 1');
        expect(fakeFunction).toHaveBeenCalledTimes(1);

    });


});
