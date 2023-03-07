import { writable } from 'svelte/store';

const QuotesStore = writable([
    {id: 0, quote: 'The way to get started is to quit talking and begin doing.', author: 'Walt Disney', timeCreated: 1686257460},
    {id: 1, quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela', timeCreated: 1609459200},
    {id: 2, quote: 'If life were predictable it would cease to be life, and be without flavor.', author: 'Eleanor Roosevelt', timeCreated: 1604035200},
    {id: 3, quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.', author: 'Oprah Winfrey', timeCreated: 1627190400},
    {id: 4, quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.', author: 'James Cameron', timeCreated: 1614288000},
    {id: 5, quote: 'Life is what happens when you\'re busy making other plans.', author: 'John Lennon', timeCreated: 1617657600},
    {id: 6, quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.', author: 'Mother Teresa', timeCreated: 1607606400},
    {id: 7, quote: 'When you reach the end of your rope, tie a knot in it and hang on.', author: 'Franklin D. Roosevelt', timeCreated: 1623648000},
    {id: 8, quote: 'Always remember that you are absolutely unique. Just like everyone else.', author: 'Margaret Mead', timeCreated: 1631875200},
]);

export { QuotesStore };