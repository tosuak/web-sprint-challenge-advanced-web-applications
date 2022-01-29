import React from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

test('renders component without errors', ()=> {
    render(<Article />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article headline={headline} author={author}/>)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article headline={'Associated Press'} author={''}/>)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article />);
    const button = screen.getByRole('button');
    userEvent.click(button);
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.