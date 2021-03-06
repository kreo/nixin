/*
 |--------------------------------------------------------------------------
 | Nixin
 |--------------------------------------------------------------------------
 | author: @kreo
 | http: //github.com/kreo
 | version: 1.0.0
 |
 | A bunch of useful mixins that provides the power necessary
 | to let you build semantic style effectively with no frustration.
 | Nixin can extend any other framework using both implicit or explicit
 | approach.
 |
 */

module.exports = (opts) => {
    let implicit = (!(opts && opts.implicit === false));

    return (style) => {
        style.include(__dirname);
        if (implicit) style.import("nixin");
    }
};
