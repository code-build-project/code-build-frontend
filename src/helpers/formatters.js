export default {
    formatString(value) {
        return value.replace(/[^a-zа-яё\-]/gi, '');
    }
}