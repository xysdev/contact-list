const common = { tabs: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] };
const dev = {
    SITE_NAME: 'Contact List (DEV)',
};
const prod ={
    SITE_NAME: 'Contact List ',

}
export const config = process.env.NODE_ENV === 'production' ? { ...common, ...prod } : { ...common, ...dev };