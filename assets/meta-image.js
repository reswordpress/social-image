jQuery(document).ready(function(e){if("undefined"!=typeof wp.media){var a,t=e("#meta-image-generate"),i=function(e){var a=t.find(".meta-image-error");return"undefined"!=typeof e?a.html(e).addClass("is-active"):a.removeClass("is-active")},n=function(e){return t.find(".button").toggleClass("disabled"),t.find(".spinner").toggleClass("is-active"),i()};t.on("click",".meta-image-fullsize",function(a){a.preventDefault();var t=e(this).find(".meta-image-preview").attr("src");if(t.length>0)return window.open(t,"_blank")}),t.on("click",".meta-image-run",function(a){a.preventDefault();var r={action:"meta_image_generate",post:t.data("post"),text:t.find(".meta-image-text").val(),contrast:t.find(".meta-image-contrast").val(),brightness:t.find(".meta-image-brightness").val()},s=e.ajax({method:"POST",url:t.data("ajaxurl"),data:r},"json");return s.done(function(e){return n(!0),e.success===!1?i(e.data):(t.find(".meta-image-delete").addClass("is-active"),t.find(".meta-image-preview").attr("src",e.data))}),n()}),t.on("click",".meta-image-library",function(r){return r.preventDefault(),a?a.open():(a=wp.media({title:meta_image_options.choose,multiple:!1}),a.on("select",function(){var r=a.state().get("selection").first().toJSON(),s={action:"meta_image_library",post:t.data("post"),url:r.url},d=e.ajax({method:"POST",url:t.data("ajaxurl"),data:s},"json");return d.done(function(e){return n(!0),e.success===!1?i(e.data):(t.find(".meta-image-delete").addClass("is-active"),t.find(".meta-image-preview").attr("src",e.data))}),n()}),a.open())}),t.on("click",".meta-image-delete",function(a){a.preventDefault();var r={action:"meta_image_delete",post:t.data("post")},s=e.ajax({method:"POST",url:t.data("ajaxurl"),data:r},"json");return s.done(function(e){return n(!0),e.success===!1?i(e.data):(t.find(".meta-image-delete").removeClass("is-active"),t.find(".meta-image-preview").attr("src",""))}),n()})}});