import { writable } from 'svelte/store';

const QuotesStore = writable([
    {quote: 'Believe you can and you’re halfway there', author: 'Theodore Roosevelt', timeCreated: 1234567890000},
    {quote: 'Be the change that you wish to see in the world', author: 'Mahatma Gandhi', timeCreated: 1251815400000},
    {quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', timeCreated: 1262322000000},
    {quote: 'It does not matter how slowly you go as long as you do not stop', author: 'Confucius', timeCreated: 1286856000000},
    {quote: 'Don’t Let Yesterday Take Up Too Much Of Today', author: 'Will Rogers', timeCreated: 1293878400000},
    {quote: 'You Miss 100% Of The Shots You Don’t Take', author: 'Wayne Gretzky', timeCreated: 1301145600000},
    {quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.', author: 'Thomas A. Edison', timeCreated: 1328016000000},
    {quote: 'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.', author: 'Steve Jobs', timeCreated: 1354540800000},
    {quote: 'You Are Never Too Old To Set Another Goal Or To Dream A New Dream', author: 'C.S. Lewis', timeCreated: 1374624000000},
    {quote: 'If You Want To Lift Yourself Up, Lift Up Someone Else', author: 'Booker T. Washington', timeCreated: 1392048000000},
    {quote: 'The best way to predict your future is to create it', author: 'Abraham Lincoln', timeCreated: 1419043200000},
    {quote: 'Life is 10% what happens to us and 90% how we react to it', author: 'Charles R. Swindoll', timeCreated: 1445577600000},
    {quote: 'The only way to do great work is to love what you do', author: 'Steve Jobs', timeCreated: 1472112000000},
    {quote: 'Change your thoughts and you change your world.', author: 'Norman Vincent Peale', timeCreated: 1498646400000},
    {quote: 'The only limit to our realization of tomorrow will be our doubts of today', author: 'Franklin D. Roosevelt', timeCreated: 1525180800000},
    {quote: 'The future belongs to those who believe in the beauty of their dreams', author: 'Eleanor Roosevelt', timeCreated: 1551715200000},
    {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall', author: 'Nelson Mandela', timeCreated: 1578259200000},
    {quote: 'If you want to go fast, go alone. If you want to go far, go together', author: 'African Proverb', timeCreated: 1604793600000},
    {quote: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle', author: 'Christian D. Larson', timeCreated: 1631328000000},
    {quote: 'If you want to go fast, go alone. If you want to go far, go together.', author: 'African Proverb', timeCreated: 1678572226346},
    {quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.', author: 'Winston Churchill', timeCreated: 1678572230429},
    {quote: 'I have not failed. I have just found 10,000 ways that won’t work.', author: 'Thomas Edison', timeCreated: 1678572233891},
    {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.', author: 'Nelson Mandela', timeCreated: 1678572237895},
    {quote: 'If you tell the truth, you don’t have to remember anything.', author: 'Mark Twain', timeCreated: 1678572241284},
    {quote: 'It is during our darkest moments that we must focus to see the light.', author: 'Aristotle', timeCreated: 1678572244672},
    {quote: 'Don’t judge each day by the harvest you reap but by the seeds that you plant.', author: 'Robert Louis Stevenson', timeCreated: 1678572248137},
    {quote: 'The only way to do great work is to love what you do.', author: 'Steve Jobs', timeCreated: 1678572251762},
    {quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', author: 'Helen Keller', timeCreated: 1678572255353},
    {quote: 'Believe you can and you’re halfway there.', author: 'Theodore Roosevelt', timeCreated: 1678572259039}
]);

export { QuotesStore };