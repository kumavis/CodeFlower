// vendor deps
var d3 = require('d3')

// local deps
var CodeFlower = require('./src/CodeFlower')
var util = require('./src/util')

var currentCodeFlower
var createCodeFlower = function(obj) {
  // remove previous flower to save memory
  if (currentCodeFlower) currentCodeFlower.cleanup()
  // adapt layout size to the total number of elements
  var total = util.countElements(obj)
  // w = parseInt(Math.sqrt(total) * 30, 10)
  // h = parseInt(Math.sqrt(total) * 30, 10)
  w = window.innerWidth * 0.8
  h = window.innerHeight * 0.8
  // create a new CodeFlower
  document.write('<div id="visualization"></div>')
  currentCodeFlower = new CodeFlower('#visualization', w, h).update(obj)
}

var testObj = {
  "name": "root",
  "children": [{
      "name": "app",
      "children": [{
        "name": "stylesheets",
        "children": [{
            "name": "bootstrap.css",
            "size": 4945,
            "language": "CSS"
        }, {
            "name": "style.css",
            "size": 254,
            "language": "CSS"
        }, {
            "name": "jquery.tagsinput.css",
            "size": 7,
            "language": "CSS"
        }],
        "size": 5206,
    }],
    "size": 5206,
  }],
  "size": 5206,
}

createCodeFlower(testObj)