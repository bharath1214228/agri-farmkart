/* NM: Blog script */
(function(b){b.extend(b.nmTheme,{blog_init:function(){var a=this;a.$blogList=b("#nm-blog-list");b("#nm-blog-categories-toggle-link").on("click",function(e){e.preventDefault();var d=b(this);b("#nm-blog-categories-list").slideToggle(200,function(){var f=b(this);d.toggleClass("active");d.hasClass("active")||f.css("display","")})});a.$window.on("load",function(){a.$pageIncludes.hasClass("blog-masonry")&&b("#nm-blog-list").masonry({itemSelector:".post",gutter:0,hiddenStyle:{},visibleStyle:{}})});a.$blogList&&
a.blogInfLoadBind()},blogInfLoadBind:function(){var a=this;a.$blogPaginationWrap=b("#nm-blog-pagination");a.$blogInfLoadWrap=b("#nm-blog-infinite-load");a.$blogInfLoadWrap.length&&(a.$blogInfLoadLink=a.$blogInfLoadWrap.children("a"),a.$blogInfLoadLink.on("click",function(e){e.preventDefault();a.blogInfLoadGetPage()}))},blogInfLoadGetPage:function(){var a=this;if(a.blogAjax)return!1;var e=a.$blogInfLoadLink.attr("href");e&&(a.$blogPaginationWrap.addClass("loading nm-loader"),a.blogAjax=b.ajax({url:e,
data:{blog_load:"1"},dataType:"html",cache:!1,headers:{"cache-control":"no-cache"},method:"GET",error:function(d,f,c){a.$blogPaginationWrap.removeClass("loading nm-loader");console.log("NM: AJAX error - blogInfLoadGetPage() - "+c)},success:function(d){var f=b("<div>"+d+"</div>"),c=f.find("#nm-blog-list").children();c.addClass("fade-out");if(a.$pageIncludes.hasClass("blog-masonry")){d=c.find("img");var g=d.last();d.removeAttr("loading");g.on("load",function(){a.$blogList.masonry("appended",c);a.blogInfLoadPrepButton(f);
setTimeout(function(){c.removeClass("fade-out");a.blogAjax=!1},300)});a.$blogList.append(c)}else a.$blogList.append(c),a.blogInfLoadPrepButton(f),setTimeout(function(){c.removeClass("fade-out");a.blogAjax=!1},300)}}))},blogInfLoadPrepButton:function(a){(a=a.find("#nm-blog-infinite-load").children("a").attr("href"))?(this.$blogInfLoadLink.attr("href",a),this.$blogPaginationWrap.removeClass("loading nm-loader")):this.$blogPaginationWrap.addClass("all-pages-loaded")}});b.nmThemeExtensions.blog=b.nmTheme.blog_init})(jQuery);