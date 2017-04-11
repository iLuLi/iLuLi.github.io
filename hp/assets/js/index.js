$('#content-top .content-title').on({
	mouseover:function(){
		$('#content-top .content-title').removeClass('active');
		$(this).addClass('active');
		$('.content-btm').hide();
		$('.content-btm').eq($(this).index()).show();
	}
});
/*轮播*/
$('.pay_student_items ul').clone().appendTo('.pay_student_items');
var x = -1,
    timer, flag = false;

function lunBo() {
    if (x < -518) {
        x = 0;
    };
    x--;
    $('.pay_student_items').css({
        top: x
    });
};
timer = setInterval(lunBo, 40);
flag = true;
$('.pay_student_info').mouseover(function() {
    clearInterval(timer);
    flag = false;
});
$('.pay_student_info').mouseout(function() {
    if (!flag) {
        timer = setInterval(lunBo, 40);
        flag = true;
    }
});


// 学员作品  

$('.No2-prev').on({
	click:function(){
		var arr = [];
		for(var i=1;i<6;i++){
			arr.push($('#No2-state'+i+'').attr('class'));
		};
		$('#No2-state1').attr('class',arr[4]);
		$('#No2-state2').attr('class',arr[0]);
		$('#No2-state3').attr('class',arr[1]);
		$('#No2-state4').attr('class',arr[2]);
		$('#No2-state5').attr('class',arr[3]);
	}
})
$('.No2-next').on({
	click:function(){
		var arr = [];
		for(var i=1;i<6;i++){
			arr.push($('#No2-state'+i+'').attr('class'));
		};
		$('#No2-state1').attr('class',arr[1]);
		$('#No2-state2').attr('class',arr[2]);
		$('#No2-state3').attr('class',arr[3]);
		$('#No2-state4').attr('class',arr[4]);
		$('#No2-state5').attr('class',arr[0]);
	}
})
var arr = ['课程体系每半年升级、更新一次，一直引领PHP培训行业发展。',
			'PHP学员就业可以从网站建设、游戏开发、软件应用、ERP管理系统、oA管理系统、销售系统、服务器管理、各类接口等几方面着手。',
			'官方招聘网站，企业给出的工资待遇','零基础，感兴趣即可。',
			'像FACEBOOK、Yahoo! 、百度、维基百科、淘宝、新浪 、WordPress 、新浪微博 、Tumblr、Hao123、Craigslist、中关村在线、联想、聚美、华图教育、天猫、搜狐网、soso搜搜、凤凰网、优酷、360安全中心等等',
		   '全日制上课，上课时间周一至周五，上午：8：30--12：00    下午1：30至5：30    晚自习7：00- 12：00 教室全天24小时开放，可随机上机练习',
		   '教学课堂纪律严格，如上课不能迟到，旷课，玩手机，玩游戏等，入学后会有相关的学员手册进行详解。课程安排的实战项目必须完成，会有项目经理监督检查。同时伴随罚写、罚站、罚款等，兄弟连“狠”爱你！',
		   '每个班级基础课程，高级课程和项目阶段分别会有1名讲师，1名项目经理，1名班主任。',
		   '成功缴纳报名费后，选正式班级，有一周的免费试学，可以进一步了解兄弟连教学风格和学习环境。7天内不收学费，真正零风险，不用担心强拉强卖。 ',
		   '学生因学习中途落课或者学习效果不扎实等原因可以向教务老师申请重修或降级，选择适合自己课程进度的班级重修，兄弟连的口号不抛弃，不放弃每位兄弟！'
		   ];
$('.No10-item').on({
	mouseover:function(){
		$('#Q-A').html(arr[$(this).parents('.No10-left').length ? $(this).index() : $(this).index()+5]);
		
	}
})
// 学员作品 
var No6X = 1;
var flag = false;
$('#No6-prev').on({
	click:function(){
		console.log('111')
		No6X--;
		if(No6X === -1){
			No6X = 1;
			$('#content-wrap2 ul').css('marginLeft','-1265px');
		}else{
			$('#content-wrap2 ul').css('marginLeft','-50px');
		}
	}
})
$('#No6-next').on({
	click:function(){
		No6X++;
		if(No6X === 2){
			No6X = 0;
			$('#content-wrap2 ul').css('marginLeft','-50px');
		}else{
			$('#content-wrap2 ul').css('marginLeft','-1265px');
		}
	}
})
var timer_2 = setInterval(function(){
	flag = true;
	No6X++;
	if(No6X === 2){
		No6X = 0;
		$('#content-wrap2 ul').css('marginLeft','-50px');
	}else{
		$('#content-wrap2 ul').css('marginLeft','-1265px');
	}
},3300)
$('#content-wrap2').on({
	mouseover:function(){
		clearInterval(timer_2);
		flag = false;
	},
	mouseleave:function(){
	if(!flag)
		flag = true;
		timer_2 = setInterval(function(){
		No6X++;
		if(No6X === 2){
			No6X = 0;
			$('#content-wrap2 ul').css('marginLeft','-50px');
		}else{
			$('#content-wrap2 ul').css('marginLeft','-1265px');
		}
		},3300)
	}
});
// Q/A 
$('.QA-list').on({
	mouseover:function(){
		var idx = $(this).parents('.No7-left').length ? $(this).index() : $(this).index()+5;
		$('.QA-list').css('color','#333');
		$(this).css('color','red');
		$('#question-img').attr('src','static/images/No8-center'+ (idx+1) +'.png');
		$('.question').hide().eq(idx).show();
		$('.answer').hide().eq(idx).show();
	}
})
// 学员作品
var No3X = 1;
var flag_3 = false;
$('#No3-prev').on({
	click:function(){
		No3X--;
		if(No3X === -1){
			No3X = 1;
			$('#content-wrap3 ul').css('marginLeft','-1256px');
		}else{
			$('#content-wrap3 ul').css('marginLeft','-29px');
		}
	}
})
$('#No3-next').on({
	click:function(){
		No3X++;
		if(No3X === 2){
			No3X = 0;
			$('#content-wrap3 ul').css('marginLeft','-29px');
		}else{
			$('#content-wrap3 ul').css('marginLeft','-1256px');
		}
	}
})
var timer_3 = setInterval(function(){
	flag_3 = true;
	No3X++;
	if(No3X === 2){
		No3X = 0;
		$('#content-wrap3 ul').css('marginLeft','-29px');
	}else{
		$('#content-wrap3 ul').css('marginLeft','-1256px');
	}
},3300)
$('.No3').on({
	mouseover:function(){
		clearInterval(timer_3);
		flag_3 = false;
	},
	mouseleave:function(){
	if(!flag_3)
		flag_3 = true;
		timer_3 = setInterval(function(){
		No3X++;
		if(No3X === 2){
			No3X = 0;
			$('#content-wrap3 ul').css('marginLeft','-29px');
		}else{
			$('#content-wrap3 ul').css('marginLeft','-1256px');
		}
		},3300)
	}
});

$('.juti_lesson1').on({
	mouseover:function(){
		$('.juti_lesson1').removeClass('active').eq($(this).index()).addClass('active');
		$('.sanjiao').removeClass('active').eq($(this).index()).addClass('active');
		$('.maincontont10').hide();
		$('.table'+($(this).index()+1)+'').show();
	}
})