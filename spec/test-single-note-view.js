'use strict';

(function (exports){
    function testStringHTML(){
    var note = new Note ("Hello")
    var html = new StringHTML(note);
    assert.isTrue(html.returnHTML(note.returnText()) === `<div>Hello</div>`)
    };

testStringHTML()

})(this);
