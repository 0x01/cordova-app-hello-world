/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_pan}": [
            ["transform", "translateX", '10px'],
            ["transform", "translateY", '-11px']
         ],
         "${_scene}": [
            ["transform", "translateX", '-1px']
         ],
         "${_vis}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateX", '56px'],
            ["transform", "translateY", '156px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid37", tween: [ "transform", "${_vis}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 0, duration: 0, easing: "swing" },
            { id: "eid36", tween: [ "transform", "${_vis}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 58, duration: 391, easing: "swing" },
            { id: "eid10", tween: [ "transform", "${_vis}", "translateX", '45px', { fromValue: '56px'}], position: 0, duration: 80 },
            { id: "eid25", tween: [ "transform", "${_vis}", "translateX", '37px', { fromValue: '45px'}], position: 80, duration: 128 },
            { id: "eid27", tween: [ "transform", "${_vis}", "translateX", '33px', { fromValue: '37px'}], position: 208, duration: 28 },
            { id: "eid29", tween: [ "transform", "${_vis}", "translateX", '45px', { fromValue: '33px'}], position: 236, duration: 128 },
            { id: "eid15", tween: [ "transform", "${_vis}", "translateX", '56px', { fromValue: '45px'}], position: 363, duration: 137 },
            { id: "eid12", tween: [ "transform", "${_vis}", "translateY", '85px', { fromValue: '156px'}], position: 0, duration: 80, easing: "swing" },
            { id: "eid26", tween: [ "transform", "${_vis}", "translateY", '58px', { fromValue: '85px'}], position: 80, duration: 128, easing: "swing" },
            { id: "eid28", tween: [ "transform", "${_vis}", "translateY", '59px', { fromValue: '58px'}], position: 208, duration: 28, easing: "swing" },
            { id: "eid30", tween: [ "transform", "${_vis}", "translateY", '106px', { fromValue: '59px'}], position: 236, duration: 128, easing: "swing" },
            { id: "eid16", tween: [ "transform", "${_vis}", "translateY", '156px', { fromValue: '106px'}], position: 363, duration: 137, easing: "swing" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4975074");
