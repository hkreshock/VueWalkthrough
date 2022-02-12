import { date } from 'quasar';

const fn = () => {
    // takes any string and capitalizes the first letter of each word
    // also capitalizes scottish/irish surnames appropriately
    const capitalize = (string) => string && string.toLowerCase().replace(/(?:(?<=\b(?:ma?c)?))\w/g, (char) => char.toUpperCase());

    // takes an ISO date string and a format (ex: 'MM/DD/YY HH:mm')
    const formatTimestamp = (val, format) => {
        if (!val) return '';
        if (!format) return val;
        const formattedString = date.formatDate(val, format);
        return formattedString;
    };

    // takes a name, splits at the space, and grabs the first letter of name[0] and name[1] returns them concatenated and toUpperCase
    const formatInitials = (val) => {
        if (!val) return '';
        const firstI = val.split(' ')[0].slice(0, 1);
        const lastI = val.split(' ')[1].slice(0, 1);
        const initials = firstI + lastI;
        return initials.toUpperCase();
    };

    // takes phone number string and formats it like (555) 867 - 5309
    const formatPhone = (string) => string && string.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2 - $3');

    // truncate a string to a certain character length
    const truncate = (string, length) => {
        let ellipsis = '...';
        if (string && string.length <= length) ellipsis = '';
        return string && length && `${string.substring(0, length)}${ellipsis}`;
    };

    // removes html from a string
    const strip = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return html && doc && (doc.body.textContent || '');
    };

    return {
        capitalize,
        formatTimestamp,
        formatInitials,
        formatPhone,
        truncate,
        strip,
    };
};

export default fn;
