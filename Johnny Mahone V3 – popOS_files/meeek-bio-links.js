(function ($) {
  'use strict';

  jQuery(document).ready(function() {

    var myAccordion = new gianniAccordion({
      elements: ".meeek-accordion-card .meeek-accordion-card-inner",
        trigger: "[data-accordion-element-trigger]",
        content: "[data-accordion-element-content]",
    });

    myAccordion.on("elementSelected", (data)=>{
      console.log("elementOpened", data);
    });
  });

} (jQuery) );