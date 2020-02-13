
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000; 

function send_request(){
    var xmlhttp = null;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject){
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    if (xmlhttp!=null){
        serverUrl = '/weixin/media19da/getdata'
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
        console.log(xmlhttp.responseText);
    }
    else{
        alert("Your browser does not support XMLHTTP.");
    }
};

function get_signature(){
    //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000; 
    if (expire < now + 3){
        body = send_request()
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback']
        key = obj['dir']
        return true;
    }
    return false;
};

function check_object_radio() {
     g_object_name_type = 'random_name';
}

function random_string(len) {
　　len = len || 32;
　　var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
　　var maxPos = chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
    　　pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function calculate_object_name(filename){
    if (g_object_name_type == 'local_name'){
        g_object_name += "${filename}"
    }
    else if (g_object_name_type == 'random_name'){
        suffix = get_suffix(filename)
        g_object_name = key + random_string(20) + suffix
    }
    return ''
}


function get_uploaded_object_name(filename){
    if (g_object_name_type == 'local_name'){
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name'){
        return g_object_name
    }
}


function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

function set_upload_param(up, filename, ret){
    if (ret == false){
        ret = get_signature()
    }
    //g_object_name = key;
    suffix = get_suffix(filename)
    calculate_object_name(filename)
    new_multipart_params = {
        'policy': policyBase64,
        'OSSAccessKeyId': accessid, 
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'callback' : callbackbody,
        'signature': signature,
        'key' : g_object_name,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}

var uploader = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'video', 
    //multi_selection: false,
	container: document.getElementById('btn'),
	flash_swf_url : 'Moxie.swf',
	silverlight_xap_url : 'Moxie.xap',
    url : 'http://bbs-qianlong-com-web.oss-cn-beijing.aliyuncs.com',

    filters: {
        mime_types : [ //只允许上传图片和zip文件
            {title : "Video files", extensions : "mp4,m4v,mov,ogv,webm" }, 
            {title : "Image files", extensions : "jpg,png,gif" }, 
        ],
        max_file_size : '2048mb', //最大只能上传2048mb的文件
        prevent_duplicates : false //不允许选取重复文件
    },
    multi_selection : false,
	init: {
		PostInit: function() {
			document.getElementById('message').innerHTML = '';
			document.getElementById('upload-btn').onclick = function() {
                set_upload_param(uploader, '', false);
                return false;
			};
		},

		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				document.getElementById('message').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ')<b></b>'
				+'<div class="progress"><div class="progress-bar" style="width: 0%"></div></div>'
				+'</div>';
			});
		},

		BeforeUpload: function(up, file) {
            check_object_radio();
            set_upload_param(up, file.name, true);
        },

		UploadProgress: function(up, file) {
			var d = document.getElementById(file.id);
			d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            var prog = d.getElementsByTagName('div')[0];
			var progBar = prog.getElementsByTagName('div')[0]
			progBar.style.width= 2*file.percent+'px';
			progBar.setAttribute('aria-valuenow', file.percent);
		},

		FileUploaded: function(up, file, info) {
            var redirect = false;
            if (info.status == 200){
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '上传成功';
                redirect = true;
            }
            else if (info.status == 203){
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '上传成功';
                redirect = true;
            }
            else{
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '发生错误,请刷新页面重试';
            } 

            if(redirect){
                location.href = 'message.html?filename=' + get_uploaded_object_name(file.name);
            }

		},

		Error: function(up, err) {
            if (err.code == -600) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
            }
            else if (err.code == -601) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
            }
            else if (err.code == -602) {
                document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
            }
            else{
                document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
            }
		}
	}
});

uploader.init();
