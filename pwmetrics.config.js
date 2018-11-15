module.exports = {
    flags: {
        expectations: true,
        runs: 3,
    },
    expectations: {
        speedIndex: {
            warn: '>=1000',
            error: '>=2000',
        },
    }
};
