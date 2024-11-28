/**
 * MEEEK TEMPLATE CUSTOM SCRIPTS - TABLE OF CONTENTS
 * 
 * Bio Links Page Sharer panel
 */

(function ($) {
    'use strict';
    

    jQuery(window).on("load", function(){
        jQuery( '.meeeksaas-splash-screen-loader' ).fadeOut( 1000, function() {
            jQuery( this ).fadeOut();
        });
    });

    jQuery(document).ready(function () {

        jQuery( "a[data-bs-target='#meeeksaas_nsfw_modal']" ).on( "click", function() {
            var href = jQuery( this ).attr('href');
            var modal_yes_href = jQuery('.meeeksaas-nsfw-yes');
            modal_yes_href.attr('href', href);
        });


        /**
         * Bio Links Page Sharer panel
         */ 
        function meeeksaas_sharer_panel_init(){
            var selector = jQuery('.meeeksaas-panel_button');
            if ( selector.length){
                jQuery(".meeeksaas-panel_button .meeeksaas-toggle_sidebar").click(function(){
                    jQuery("div#meeeksaas-panel").animate({
                        right: "0px"
                    }, "fast");
                    jQuery(".meeeksaas-panel_button").animate({
                        right: "300px"
                    }, "fast");
                    jQuery(".meeeksaas-panel_button").toggle();
                    jQuery("body").css("overflow", "hidden");
                });
                jQuery(".meeeksaas_hide_button").click(function(){
                    jQuery("#meeeksaas-panel").animate({
                        right: "-300px"
                    }, "fast");
                    jQuery(".meeeksaas-panel_button").animate({
                        right: "0px"
                    }, "fast");
                    jQuery(".meeeksaas-panel_button").toggle();
                    jQuery("body").css("overflow", "visible");
                });
            }
        }
        meeeksaas_sharer_panel_init();

        /**
         * Builder Tooltips
         */ 
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
        function meeeksaas_tooltips(){
            var tooltip_selector = jQuery('[data-bs-toggle="tooltip"]');
            if (tooltip_selector.length) {
                jQuery('[data-toggle="tooltip"]').tooltip();
            }
        }
        meeeksaas_tooltips();


    });

} (jQuery) );