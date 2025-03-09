import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    it('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Project')).toBeInTheDocument();
    });

    it('adds a new todo', () => {
        render(<TodoList />);
        fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
            target: { value: 'New Todo' }
        });
        fireEvent.click(screen.getByText('Add Todo'));
        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    it('toggles todo completion', () => {
        render(<TodoList />);
        const todoItem = screen.getByText('Learn React');
        fireEvent.click(todoItem);
        expect(todoItem).toHaveStyle('text-decoration: line-through');
    });

    it('deletes a todo', () => {
        render(<TodoList />);
        fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
        expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    });
});
