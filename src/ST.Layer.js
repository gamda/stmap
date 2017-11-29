'use strict';
var {wms} = require('./ST.Layer.WMS.js')
var {heat} = require('./ST.Layer.Heat.js')
var {traffic} = require('./ST.Layer.Traffic.js')

L.stLayer = function(options) {
    // options: {
    //     ST.Layer.WMS
    //         urlZoomedOut: null,
    //         zoomThreshold: 15,
    //     ST.Layer.Heat && ST.Layer.WMS
    //         apiKey: '',
    //         url: null,
    //         visible: true,
    //         callback: null,
    //         callbackTarget: null,
    //         loadingCallback: null, // function(loading), loading is true when starting, false when finished
    //     layer
    //         opacity: 0.6,
    //     ST.Control.Legend
    //         imgSrc: null,
    //         legendPosition: 'bottomright',
    //         width: '300px',
    //     ST.Control.ToggleButton
    //         buttonPosition: 'topright',
    //         initialValue: true,
    //         icon: 'podcast',
    //         colorOn: '#337AB7',
    //         colorOff: '#5F7C8A',
    //         title: 'Toggle Layer',
    // },
    if (options.url.includes('wms')) {
        return wms(options);
    }
    if (options.url.includes('tile')){
        return traffic(options);
    }
    else {
        return heat(options);
    }
};