'use strict';

(function (exports){
    function testStringHTML(){
    var note = new Note ("Hello")
    var html = new StringHTML(note.returnText());
    console.log(html.returnHTML(note))
    assert.isTrue(html.returnHTML(note) === `<div>Hello</div>`)
    };

testStringHTML()

})(this);
