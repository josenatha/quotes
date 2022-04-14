import quotes from './quotes.json'

const colors = [
    '#9a031e',
    '#5f0f40',
    '#0f4c5c',
    '#3185FC',
    '#1e2f23',
    '#808F85',
]
export function numQuoteRan(){
const random = Math.floor((Math.random() * (quotes.length - 0 + 1)) + 0);
    return quotes[random]
}

export function colorRan(){
    const randomcolor = Math.floor((Math.random() * (colors.length - 0 + 1)) + 0);
  
        return colors[randomcolor]
    }