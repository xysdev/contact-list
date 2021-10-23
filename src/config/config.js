const common = {
    culture: {
        nat: 'US',
        alphabet: process.env.REACT_APP_TABS.split(''),
    },
    contactCount: process.env.REACT_APP_NUMBER_CARDS,
};
const dev = {
    //Add dev specific config here
};
const prod = {
    //Add prod specific config here
};
export const config = process.env.NODE_ENV === 'production' ? { ...common, ...prod } : { ...common, ...dev };
