import * as React from 'react'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Todo App',()=>{
    // Write tests for Todo App
    // Add and  Delete Todo
    it('initialise todo app', () => {
      render(<App/>);
      expect(screen.getByText(/0/i)).toBeInTheDocument();
    })
    it('Add todo', () => {
      render(<App />);
      const tesstId=screen.getByTestId('todoCount');
      const newTodo=screen.getByRole('textbox');
      userEvent.type(newTodo,"Task");
      const submitBtn=screen.getByRole('button', {  name: /create/i});
      userEvent.click(submitBtn);  
      expect(tesstId).toHaveTextContent("1 todo")
    })
    it('delete Todo', () => {
      render(<App />);
      const newTodo=screen.getByPlaceholderText(/New Todo/i);
      userEvent.type(newTodo,"Task");
      const submitBtn=screen.getByRole('button', {  name: /create/i});
      userEvent.click(submitBtn);  
      const deleteBtn=screen.getByRole('button', {  name: /delete/i});
      userEvent.click(deleteBtn);  
      expect(screen.getByText(/0 todo/i)).toBeInTheDocument();
      })
})
