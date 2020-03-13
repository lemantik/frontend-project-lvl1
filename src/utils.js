const MAX_RANDOM = 100;
export default (max = MAX_RANDOM) => Math.floor(Math.random() * max) + 1;
