export default class Util {

    static getSeconds(ts) {
        let seconds = ts.getSeconds().toString();
        return (seconds.padStart(2, '0'));
    }

    static getMinutes(ts) {
        let minutes = ts.getMinutes().toString();
        return (minutes.padStart(2, '0'));
    }

}