var simplyModalTestPage;

simplyModalTestPage = {
	_selector : {
		nav : '.nav.sidenav',
		header: '.header-sticky'
	},
	_classSet : {
		static : 'static'
	},
	_staticValue :{
		scrollPosition : null
	},
	_init : function () {
		this._scroll();
		this._setModal();
	},
	_scroll : function(){
		$(window).scroll(function (e) {
			simplyModalTestPage._staticValue = $(document).scrollTop();
			if(simplyModalTestPage._staticValue  > 200){
				$(simplyModalTestPage._selector.nav).addClass(simplyModalTestPage._classSet.static);
				$(simplyModalTestPage._selector.header).addClass(simplyModalTestPage._classSet.static);
			}else{
				$(simplyModalTestPage._selector.nav).removeClass(simplyModalTestPage._classSet.static);
				$(simplyModalTestPage._selector.header).removeClass(simplyModalTestPage._classSet.static);
			}
		})
	},
	_setModal : function(){
		$('.btn-outline').on('click', function(){
				var dataProps = $(this).attr('data-props');
				var dataEffect = $(this).attr('data-effect');
				if(dataProps == "type1"){
					debugger
					$.simplyModal({
				title: 'Thanks for your apply',description: 'We will turn to back as soon as possible',setTimeout: 0, class:'success', classSet: 'success',typeSet: 'type1',type:'type1',close: true,effects: 'fadein',buttonNameSet : ['Yes', 'No']
                 });

				}
				if(dataProps == "default"){
					$.simplyModal({
				title: 'Thanks for your apply',description: 'We will turn to back as soon as possible',setTimeout: 2000, class:'info', classSet: 'default',typeSet: 'default',close: true,effects: 'fadein'
                 });

				}
				if(dataProps == "notifyTemplate"){
					$.simplyModal({
                            description: 'Do not use without sign in.',
                            setTimeout: false,
                            class: 'error',
                            type: 'notifyTemplate',
                            button: '',
                            effect: 'flid3d'
                 });

				}
				if(dataProps == "iframeModal"){
					    $.simplyModal({
               title: '',
               description: '',
               setTimeout: 0,
               class: 'iframeModal',
               type: 'iframeModal',
               button: '',
               classBtn : 'iframeModal',
               defaultW : 600,
               defaultH : 750,
               effect: dataEffect
});
				}
				if(dataProps == "success"){
							$.simplyModal({
                            description: 'Ok. Thanks.',
                            setTimeout: 0,
                            class: 'success',
                            type: 'notifyTemplate',
                            button: '',
                            effect: dataEffect
                 });
				}
				if(dataProps == "info"){
							$.simplyModal({
                            description: 'Ok. Thanks.',
                            setTimeout: 3000,
                            class: 'info',
                            type: 'notifyTemplate',
                            button: '',
                            effect: dataEffect
                 });
				}
				if(dataProps == "error"){
							$.simplyModal({
                            description: 'Ok. Thanks.',
                            setTimeout: 3000,
                            class: 'error',
                            type: 'notifyTemplate',
                            button: '',
                            effect: dataEffect
                 });
				}

			}
		)
	}
}
$(document).ready(function () {
	simplyModalTestPage._init();
})
