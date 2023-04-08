import { writable } from 'svelte/store';
import { supabaseClient } from '$lib/supabase';

const QuotesStore = writable([]);

export const loadQuotes = async () => {
    const {data, error} = await supabaseClient.from('quotes').select();

    if(error) return console.error(error);
    QuotesStore.set(data);
};

export const addQuote = async (user_id, quote) => {
    let created_at = quote.created_at;
    let text = quote.text;
    let author = quote.author;
    let tags = quote.tags;
    const {data, error} = await supabaseClient.from('quotes').insert([{user_id, created_at, text, author, tags}]);
    if(error) return console.error(error);
    console.log(data, error);

    if (data && data.length > 0) {
        QuotesStore.update((cur) => [...cur, data[0]]);
    } else {
        console.error('No data returned after insert.');
    }
};


export const deleteQuote = async (/** @type {number} */ id) => {
    const {error} = await supabaseClient.from('quotes').delete().eq('id', id);
    if(error) return console.error(error);
    QuotesStore.update( (QuotesStore) => QuotesStore.filter( (quote) => quote.id !== id));
};

export const updateQuote = async (id, updatedQuote) => {
    console.log('Updating quote:', updatedQuote, id);
    const { error } = await supabaseClient
        .from('quotes')
        .update({
            created_at: updatedQuote.created_at,
            text: updatedQuote.text,
            author: updatedQuote.author,
            tags: updatedQuote.tags,
        })
        .eq('id', id);

    if (error) {
        console.error('Error updating quote:', error);
        return;
    } else {
        QuotesStore.update((cur) => {
            const quoteIndex = cur.findIndex((quote) => quote.id === id);
            if (quoteIndex !== -1) {
                cur[quoteIndex] = updatedQuote;
            }
            return [...cur];
        });
    }
};
    
export { QuotesStore };