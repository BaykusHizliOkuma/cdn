(()=>{"use strict";var e={85626:e=>{var t,a,r,o,i,n={init:function(){o=KTModalCreateProject.getForm(),i=KTModalCreateProject.getStepperObj(),t=KTModalCreateProject.getStepper().querySelector('[data-kt-element="targets-next"]'),a=KTModalCreateProject.getStepper().querySelector('[data-kt-element="targets-previous"]'),new Tagify(o.querySelector('[name="target_tags"]'),{whitelist:["Important","Urgent","High","Medium","Low"],maxTags:5,dropdown:{maxItems:10,enabled:0,closeOnSelect:!1}}).on("change",(function(){r.revalidateField("tags")})),$(o.querySelector('[name="target_due_date"]')).flatpickr({enableTime:!0,dateFormat:"d, M Y, H:i"}),$(o.querySelector('[name="target_assign"]')).on("change",(function(){r.revalidateField("target_assign")})),r=FormValidation.formValidation(o,{fields:{target_title:{validators:{notEmpty:{message:"Target title is required"}}},target_assign:{validators:{notEmpty:{message:"Customer is required"}}},target_due_date:{validators:{notEmpty:{message:"Due date is required"}}},target_tags:{validators:{notEmpty:{message:"Target tags are required"}}},target_allow:{validators:{notEmpty:{message:"Allowing target is required"}}},"target_notifications[]":{validators:{notEmpty:{message:"Notifications are required"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap:new FormValidation.plugins.Bootstrap5({rowSelector:".fv-row",eleInvalidClass:"",eleValidClass:""})}}),t.addEventListener("click",(function(e){e.preventDefault(),t.disabled=!0,r&&r.validate().then((function(e){console.log("validated!"),"Valid"==e?(t.setAttribute("data-kt-indicator","on"),setTimeout((function(){t.removeAttribute("data-kt-indicator"),t.disabled=!1,i.goNext()}),1500)):(t.disabled=!1,Swal.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",customClass:{confirmButton:"btn btn-primary"}}))}))})),a.addEventListener("click",(function(){i.goPrevious()}))}};void 0!==e.exports&&(window.KTModalCreateProjectTargets=e.exports=n)}},t={};(function a(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,a),i.exports})(85626)})();
//# sourceMappingURL=targets.js.map