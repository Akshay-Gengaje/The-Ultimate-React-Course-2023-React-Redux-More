# React Performance Optimization Overview

## Areas of Optimization

In React applications, there are three main areas for performance optimization:

1. **Preventing Wasted Renders:**

   - Memorizing components with `memo`.
   - Memorizing objects and functions with `useMemo` and `useCallback` hooks.
   - Techniques such as passing elements into other elements to prevent unnecessary re-renders.

2. **Improving App Speed and Responsiveness:**
   - Using `useMemo` and `useCallback` hooks.
   - Utilizing the modern `useTransition` hook.
3. **Reducing Bundle Size:**
   - Using fewer third-party packages.
   - Implementing code splitting and lazy loading.

## Goal of the Section

The main goal of this section is to provide an understanding of tools and techniques for optimization. The aim is to equip you with a toolbox of optimization tools so that you can apply them when needed, based on specific situations.

## Usage of Tools

It's important to note that not all tools need to be used all the time. The section aims to guide you on when to use each tool and in which situations they are most effective.

## Additional Considerations

The list of tools and techniques provided is not exhaustive. There are other optimization best practices that have been covered in previous sections, such as not defining components inside other components.

## Understanding Wasted Renders

### Component Re-rendering

To optimize wasted renders, it's essential to understand when a component instance gets re-rendered in React. A component re-renders in three situations:

### Component Re-render Triggers

1. **Component State Changes:**

   - A re-render occurs when the internal state of a component changes.

2. **Change in Subscribed Context:**

   - If a component is subscribed to a context, it re-renders when there's a change in that context.

3. **Parent Component Re-renders:**
   - When a parent component re-renders, all of its child components automatically re-render as well.

### Prop Changes

Contrary to common misconception, updating props does not directly trigger a component re-render. Props change when the parent re-renders, and it's the parent's re-render that causes the child component to re-render.

### Wasted Renders

A wasted render occurs when a render operation doesn't result in any change in the DOM. While React is generally fast, frequent wasted renders can impact performance, making the application feel sluggish and unresponsive.

## Next Steps

The upcoming videos in this section will delve into optimizing wasted renders and understanding when and how to use the discussed tools.
