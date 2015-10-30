// http://javascript.crockford.com/remedial.html
'use strict';
/*jslint indent: 4 */

// In the source code that follows, the priorities were portability and
// compactness.

function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (value instanceof Array) {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

/* The typeOf function above will only recognize arrays that are created in the
   same context (or window or frame). If we want to recognize arrays that are
   constructed in a different frame, then we need to do something more
   complicated.
*/
function typeOf(value) {
    var s = typeof value;
    if (s === 'object') {
        if (value) {
            if (Object.prototype.toString.call(value) == '[object Array]') {
                s = 'array';
            }
        } else {
            s = 'null';
        }
    }
    return s;
}

/* isEmpty(v) returns true if v is an object containing no enumerable members.
*/
function isEmpty(o) {
    var i, v;
    if (typeOf(o) === 'object') {
        for (i in o) {
            v = o[i];
            if (v !== undefined && typeOf(v) !== 'function') {
                return false;
            }
        }
    }
    return true;
}

/* entityify() produces a string in which '<', '>', and '&' are replaced with
   their HTML entity equivalents. This is essential for placing arbitrary
   strings into HTML texts. So,

    "if (a < b && b > c) {".entityify()

   produces

    "if (a &lt; b &amp;&amp; b &gt; c) {"
*/
if (!String.prototype.entityify) {
    String.prototype.entityify = function () {
        return this.replace(/&/g, "&amp;").replace(/</g,
            "&lt;").replace(/>/g, "&gt;");
    };
}

/* quote() produces a quoted string. This method returns a string that is like
   the original string except that it is wrapped in quotes and all quote and
   backslash characters are preceded with backslash.
*/
if (!String.prototype.quote) {
    String.prototype.quote = function () {
        var c, i, l = this.length, o = '"';
        for (i = 0; i < l; i += 1) {
            c = this.charAt(i);
            if (c >= ' ') {
                if (c === '\\' || c === '"') {
                    o += '\\';
                }
                o += c;
            } else {
                switch (c) {
                case '\b':
                    o += '\\b';
                    break;
                case '\f':
                    o += '\\f';
                    break;
                case '\n':
                    o += '\\n';
                    break;
                case '\r':
                    o += '\\r';
                    break;
                case '\t':
                    o += '\\t';
                    break;
                default:
                    c = c.charCodeAt();
                    o += '\\u00' + Math.floor(c / 16).toString(16) +
                        (c % 16).toString(16);
                }
            }
        }
        return o + '"';
    };
}

/*
supplant() does variable substitution on the string. It scans through the string
looking for expressions enclosed in { } braces. If an expression is found, use
it as a key on the object, and if the key has a string value or number value, it
is substituted for the bracket expression and it repeats. This is useful for
automatically fixing URLs. So

param = {domain: 'valvion.com', media: 'http://media.valvion.com/'};
url = "{media}logo.gif".supplant(param);

produces a url containing "http://media.valvion.com/logo.gif".
*/
if (!String.prototype.supplant) {
    String.prototype.supplant = function (o) {
        return this.replace(
            /\{([^{}]*)\}/g,
            function (a, b) {
                var r = o[b];
                return typeof r === 'string' || typeof r === 'number' ? r : a;
            }
        );
    };
}

/* The trim() method removes whitespace characters from the beginning and end of
   the string.
*/
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, "$1");
    };
}
