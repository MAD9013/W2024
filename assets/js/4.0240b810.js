(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,12,19,20,22],{306:function(t,e,a){},307:function(t,e,a){"use strict";a(306)},308:function(t,e,a){"use strict";a.r(e);var s={name:"CardDeliverable",props:{data:{type:Object,required:!0}}},r=(a(307),a(44)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"card-deliverable",attrs:{href:"/W2024"+t.data.path}},[a("span",{staticClass:"card-deliverable__type"},[t._v(t._s(t.data.frontmatter.type)+" "+t._s(t.data.frontmatter.number))]),t._v(" "),a("h3",{staticClass:"card-deliverable__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.frontmatter.desc?a("p",{staticClass:"card-deliverable__desc"},[t._v(t._s(t.data.frontmatter.desc))]):t._e(),t._v(" "),a("p",{staticClass:"card-deliverable__due"},[a("strong",[t._v("Due:")]),t._v(" "+t._s(t.data.frontmatter.due))])])}),[],!1,null,null,null);e.default=l.exports},309:function(t,e,a){},310:function(t,e,a){},311:function(t,e,a){},313:function(t,e,a){},314:function(t,e,a){"use strict";a(309)},315:function(t,e,a){"use strict";a(310)},316:function(t,e,a){"use strict";a(311)},317:function(t,e,a){"use strict";a.r(e);a(308);var s={name:"ModuleDeliverables"},r=(a(314),a(44)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-deliverables"},[a("h2",[t._v("Deliverables")]),t._v(" "),a("div",{staticClass:"module-deliverables__grid"},[t._l(t.$site.pages,(function(e){return e.frontmatter.week==t.$frontmatter.week&&"In-Class"==e.frontmatter.type?a("CardDeliverable",{attrs:{data:e}}):t._e()})),t._v(" "),t._l(t.$site.pages,(function(e){return e.frontmatter.week==t.$frontmatter.week&&"Assignment"==e.frontmatter.type?a("CardDeliverable",{attrs:{data:e}}):t._e()}))],2)])}),[],!1,null,null,null);e.default=l.exports},318:function(t,e,a){"use strict";a.r(e);var s={name:"ModuleSummary"},r=(a(315),a(44)),l=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module-summary"},[e("h1",[this._v(this._s(this.$page.title))]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.default=l.exports},319:function(t,e,a){"use strict";a.r(e);var s={name:"ModuleTutorial"},r=(a(316),a(44)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-tutorial"},[a("a",{staticClass:"card",attrs:{href:t.$frontmatter.tutorial.url,target:"_blank",rel:"noreferrer nofollow"}},[a("span",{staticClass:"card__type"},[t._v("In-Class Tutorial")]),t._v(" "),a("h2",{staticClass:"card__title"},[t._v(t._s(t.$frontmatter.tutorial.title))]),t._v(" "),t.$frontmatter.tutorial.desc?a("p",{staticClass:"card__desc"},[t._v("\n      "+t._s(t.$frontmatter.tutorial.desc)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=l.exports},320:function(t,e,a){"use strict";a(313)},321:function(t,e,a){"use strict";a.r(e);var s={name:"ModuleLesson"},r=(a(320),a(44)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-lesson"},[a("a",{staticClass:"card",attrs:{href:"./lesson.html"}},[a("span",{staticClass:"card__type"},[t._v("Individual Learning")]),t._v(" "),a("h2",{staticClass:"card__title"},[t._v(t._s(t.$frontmatter.lesson.title))]),t._v(" "),t.$frontmatter.lesson.desc?a("p",{staticClass:"card__desc"},[t._v("\n      "+t._s(t.$frontmatter.lesson.desc)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=l.exports},354:function(t,e,a){},419:function(t,e,a){"use strict";a(354)},440:function(t,e,a){"use strict";a.r(e);a(318),a(321),a(319),a(317);var s={name:"ModuleLayout"},r=(a(419),a(44)),l=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module-layout"},[e("ModuleSummary",[this._t("default")],2),this._v(" "),e("ModuleLesson"),this._v(" "),this.$frontmatter.tutorial?e("ModuleTutorial"):this._e(),this._v(" "),e("ModuleDeliverables")],1)}),[],!1,null,null,null);e.default=l.exports}}]);