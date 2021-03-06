var GL = {
	url : function() {
		return "//img.ips.ms/"+_gl_client+'-'+this.rnd()+'.gif';
	},
	eurl : function() {
		return "//img.ips.ms/"+_gl_client+'-'+this.rnd()+'.png';
	},
	isA : function(n) {
		return "undefined" !== typeof n && null !== n && "" !== n;
	},
    rnd: function(){
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < 5; i++ )
           text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    },
	en : function(k) {
		return encodeURIComponent(k);
	},
	r : function(){
		GL.isA(_gl_redirect_url) && (window.location.replace(_gl_redirect_url))
	},
	t : function() {
		params = "c=" + this.en(_gl_client) + "&u="+ this.en(document.location.href),
				this.isA(navigator.language) && (params += "&l=" + this.en(navigator.language)),
				this.isA(navigator.platform) && (params += "&os=" + this.en(navigator.platform)),
				this.isA(window.outerHeight) && (params += "&h=" + this.en(window.outerHeight)),
				this.isA(window.outerWidth) && (params += "&w=" + this.en(window.outerWidth)),
				this.isA(document.referrer)	&& (params += "&r=" + this.en(document.referrer));
				params += "&jv=6";
				if ("undefined" !== typeof _gl_optin){
					this.isA(_gl_optin) && (params += "&o=" + this.en(_gl_optin))
				}
				if ("undefined" !== typeof _gl_dedup_sales){
					this.isA(_gl_dedup_sales) && (params += "&de=" + this.en(_gl_dedup_sales))
				}
				if ("undefined" !== typeof _gl_amount){
					this.isA(_gl_amount) && (params += "&a=" + this.en(_gl_amount))
				}
				if ("undefined" !== typeof _gl_sale_code){
					this.isA(_gl_sale_code)	&& (params += "&sc=" + this.en(_gl_sale_code))
				}
				if ("undefined" !== typeof _gl_product_code){
					this.isA(_gl_product_code) && (params += "&pc=" + this.en(_gl_product_code))
				}
				if ("undefined" !== typeof _gl_products){
					this.isA(_gl_products) && (params += "&ps=" + this.en(JSON.stringify(_gl_products)))
				}
				if ("undefined" !== typeof _gl_page_type){
					this.isA(_gl_page_type)	&& (params += "&pt=" + this.en(_gl_page_type))
				}
				if ("undefined" !== typeof _gl_labels){
					this.isA(_gl_labels) && (params += "&lb=" + this.en(_gl_labels))
				}
				img = new Image,
				img.onload = function() {
					if ("undefined" !== typeof _gl_redirect_url){
						GL.r()
					}
				},
				img.onerror = function(){
					new Image().src = GL.eurl() + "?" + params;
					if ("undefined" !== typeof _gl_redirect_url){
						GL.r()
					}
				},
				img.height=0;
				img.width=0;
				img.src = this.url() + "?" + params;
	}
};
GL.t();
