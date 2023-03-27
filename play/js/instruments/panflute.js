/*******************
 * Copyright (C) 2019 VirtualMusicalInstruments.com - All Rights Reserved
 * __________________
 *
 * NOTICE: All information contained herein is the
 * property of VirtualMusicalInstruments.com and reproduction
 * or distribution of this material is strictly forbidden.
 * The intellectual and technical concepts contained
 * herein are proprietary to VirtualMusicalInstruments.com
 * and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by copyright law.
 */
var lib, images, createjs;
function keyPressed(t) {
    var n = t.key.toLowerCase();
    "1" == n && exportRoot.sound1.gotoAndPlay(0),
    "2" == n && exportRoot.sound2.gotoAndPlay(0),
    "3" == n && exportRoot.sound3.gotoAndPlay(0),
    "4" == n && exportRoot.sound4.gotoAndPlay(0),
    "5" == n && exportRoot.sound5.gotoAndPlay(0),
    "6" == n && exportRoot.sound6.gotoAndPlay(0),
    "7" == n && exportRoot.sound7.gotoAndPlay(0),
    "8" == n && exportRoot.sound8.gotoAndPlay(0),
    "9" == n && exportRoot.sound9.gotoAndPlay(0),
    "0" == n && exportRoot.sound10.gotoAndPlay(0),
    "q" == n && exportRoot.sound11.gotoAndPlay(0),
    "w" == n && exportRoot.sound12.gotoAndPlay(0),
    "e" == n && exportRoot.sound13.gotoAndPlay(0),
    "r" == n && exportRoot.sound14.gotoAndPlay(0),
    "t" == n && exportRoot.sound15.gotoAndPlay(0)
}
!function(t, n, i) {
    var e;
    (t.panflute = function() {
        this.initialize(),
        this.sound15 = new t.soundbutton15,
        this.sound15.setTransform(375, 30),
        new i.ButtonHelper(this.sound15,0,1,2,!1,new t.soundbutton15,3),
        this.sound14 = new t.soundbutton14,
        this.sound14.setTransform(358, 30),
        new i.ButtonHelper(this.sound14,0,1,2,!1,new t.soundbutton14,3),
        this.sound13 = new t.soundbutton13,
        this.sound13.setTransform(339, 30),
        new i.ButtonHelper(this.sound13,0,1,2,!1,new t.soundbutton13,3),
        this.sound12 = new t.soundbutton12,
        this.sound12.setTransform(318, 30),
        new i.ButtonHelper(this.sound12,0,1,2,!1,new t.soundbutton12,3),
        this.sound11 = new t.soundbutton11,
        this.sound11.setTransform(297, 30),
        new i.ButtonHelper(this.sound11,0,1,2,!1,new t.soundbutton11,3),
        this.sound10 = new t.soundbutton10,
        this.sound10.setTransform(275, 30),
        new i.ButtonHelper(this.sound10,0,1,2,!1,new t.soundbutton10,3),
        this.sound9 = new t.soundbutton9,
        this.sound9.setTransform(253.5, 29.6),
        new i.ButtonHelper(this.sound9,0,1,2,!1,new t.soundbutton9,3),
        this.sound5 = new t.soundbutton5,
        this.sound5.setTransform(182.7, 31.4),
        new i.ButtonHelper(this.sound5,0,1,2,!1,new t.soundbutton5,3),
        this.sound8 = new t.soundbutton8,
        this.sound8.setTransform(230, 29),
        new i.ButtonHelper(this.sound8,0,1,2,!1,new t.soundbutton8,3),
        this.sound7 = new t.soundbutton7,
        this.sound7.setTransform(205.8, 65.6),
        new i.ButtonHelper(this.sound7,0,1,2,!1,new t.soundbutton7,3),
        this.sound2 = new t.soundbutton2,
        this.sound2.setTransform(-106.6, 69.7),
        new i.ButtonHelper(this.sound2,0,1,2,!1,new t.soundbutton2,3),
        this.sound3 = new t.soundbutton3,
        this.sound3.setTransform(96.1, 21.3),
        new i.ButtonHelper(this.sound3,0,1,2,!1,new t.soundbutton3,3),
        this.sound4 = new t.soundbutton4,
        this.sound4.setTransform(141.5, 37.7),
        new i.ButtonHelper(this.sound4,0,1,2,!1,new t.soundbutton4,3),
        this.sound6 = new t.soundbutton6,
        this.sound6.setTransform(180, 28.6, 1.026, 1.026),
        new i.ButtonHelper(this.sound6,0,1,2,!1,new t.soundbutton6,3),
        this.sound1 = new t.soundbutton1,
        this.sound1.setTransform(-97, 42.7),
        new i.ButtonHelper(this.sound1,0,1,2,!1,new t.soundbutton1,3),
        this.text = new i.Text("VirtualMusicalInstruments.com","22px Arial"),
        this.text.lineHeight = 26,
        this.text.lineWidth = 307,
        this.text.setTransform(81.1, 349.2),
        this.instance = new t.panflute_1,
        this.instance.setTransform(0, 1),
        this.text_1 = new i.Text("Keys:","14px Arial","#FFFFFF"),
        this.text_1.textAlign = "center",
        this.text_1.lineHeight = 16,
        this.text_1.lineWidth = 106,
        this.text_1.setTransform(487.5, 194.4),
        this.addChild(this.text_1, this.instance, this.text, this.sound1, this.sound6, this.sound4, this.sound3, this.sound2, this.sound7, this.sound8, this.sound5, this.sound9, this.sound10, this.sound11, this.sound12, this.sound13, this.sound14, this.sound15)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(0,1,544.5,377),
    (t.panflute_1 = function() {
        this.initialize(n.panflute_1)
    }
    ).prototype = e = new i.Bitmap,
    e.nominalBounds = new i.Rectangle(0,0,400,377),
    (t.button15 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(3, 1.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-3.9,-5.5,14,14),
    (t.button14 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(1, .5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-6.5,14,14),
    (t.button13 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(1, -.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-7.5,14,14),
    (t.button12 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgVgBgcQABgcAUgUQAVgVAbAAQAdAAAUAVQAVAUAAAcQAAAcgVAVQgUAUgdABQgbgBgVgUg"),
        this.shape.setTransform(2, -.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-4.9,-7.5,14,14),
    (t.button11 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgVgBgcQABgcAUgUQAVgVAbAAQAdAAAUAVQAVAUAAAcQAAAcgVAVQgUAUgdABQgbgBgVgUg"),
        this.shape.setTransform(1, -1.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-8.5,14,14),
    (t.button10 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(1, -2.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-9.5,14,14),
    (t.button9 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(1, .5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-6.5,14,14),
    (t.button8 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(0, -.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-6.9,-7.5,14,14),
    (t.button7 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(1, -42.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-5.9,-49.5,14,14),
    (t.button6 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(-2.8, -.4),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-9.8,-7.4,14,14),
    (t.button5 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(-40.9, 18.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-47.9,11.5,14,14),
    (t.button4 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(-21.9, -11.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-28.9,-18.5,14,14),
    (t.button3 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgVgVAAgcQAAgcAVgUQAUgVAcABQAcgBAVAVQAUAUABAcQgBAcgUAVQgVAUgcAAQgcAAgUgUg"),
        this.shape.setTransform(-.9, 5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(-7.9,-1.9,14,14),
    (t.button2 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(170, -42.5),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(163,-49.5,14,14),
    (t.button1 = function() {
        this.initialize(),
        this.shape = new i.Shape,
        this.shape.graphics.f("#666666").s().p("AgwAxQgUgUgBgdQABgbAUgVQAVgUAbgBQAdABAUAUQAVAVAAAbQAAAdgVAUQgUAVgdgBQgbABgVgVg"),
        this.shape.setTransform(131.1, -14.6),
        this.addChild(this.shape)
    }
    ).prototype = e = new i.Container,
    e.nominalBounds = new i.Rectangle(124.1,-21.6,14,14),
    (t.soundbutton15 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            audio.currentTime = 0,
            audio.pause(),
            playSound("sound15")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button15("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.57,
            scaleY: 2.14,
            x: -1.4,
            y: -8.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton14 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound14")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button14("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.71,
            scaleY: 2.14,
            y: -7.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton13 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound13")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button13("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.71,
            scaleY: 2.14,
            x: -1.3,
            y: -6.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton12 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound12")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button12("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.71,
            scaleY: 2.14,
            x: -2.2,
            y: -6.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton11 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound11")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button11("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.79,
            scaleY: 2.14,
            y: -5.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton10 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound10")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button10("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.86,
            scaleY: 2.14,
            x: -.4,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton9 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound9")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button9("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 1.86,
            scaleY: 2.14,
            x: -1.4,
            y: -9.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton8 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound8")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button8("synched",0),
        this.instance.setTransform(-.4, -2.4),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2,
            scaleY: 2.14,
            y: -7.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton7 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound7")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button7("synched",0),
        this.instance.setTransform(-1.6, 2.8),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2,
            scaleY: 2.14,
            x: -2.5,
            y: 46.8,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton6 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound6")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button6("synched",0),
        this.instance.setTransform(.3, -.6),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            x: 4.1,
            y: -5.2,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton5 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound5")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button5("synched",0),
        this.instance.setTransform(8.6, -22.8),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            x: 53.7,
            y: -48.6,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton4 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound4")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button4("synched",0),
        this.instance.setTransform(2.2, .3),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            x: 27.2,
            y: 10.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton3 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound3")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button3("synched",0),
        this.instance.setTransform(-1.9, .7),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            y: -8.2,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton2 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound2")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button2("synched",0),
        this.instance.setTransform(.3, .3),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            x: -194.5,
            y: 46.3,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0),
    (t.soundbutton1 = function(n, e, s) {
        null == s && (s = !1),
        this.initialize(n, e, s, {}),
        this.frame_2 = function() {
            playSound("sound1")
        }
        ,
        this.timeline.addTween(i.Tween.get(this).wait(2).call(this.frame_2).wait(2)),
        this.instance = new t.button1("synched",0),
        this.instance.setTransform(.1, 0),
        this.instance.alpha = .301,
        this.instance._off = !0,
        this.timeline.addTween(i.Tween.get(this.instance).wait(1).to({
            startPosition: 0,
            _off: !1
        }, 0).wait(1).to({
            alpha: .602
        }, 0).wait(1).to({
            scaleX: 2.14,
            scaleY: 2.14,
            x: -148.7,
            y: 14.9,
            alpha: 1
        }, 0).to({
            _off: !0
        }, 1).wait(1))
    }
    ).prototype = e = new i.MovieClip,
    e.nominalBounds = new i.Rectangle(0,0,0,0)
}(lib = lib || {}, images = images || {}, createjs = createjs || {}),
window.addEventListener("keydown", keyPressed);
