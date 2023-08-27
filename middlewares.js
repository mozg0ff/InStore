import colors from 'colors';

export function requestTime(get, set, next) {
    req.requestTime = Date.now()
    next()
}

export function logger(req, res, next) {
    console.log(colors.bgGreen.black('Request Time: ' + req.requestTime));
    next()
}