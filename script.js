/*
(function () {
	var url = 'http://127.0.0.1:8080/client_server/';      //адрес куда делаем запрос
    $('#submit').on('click', function (e) {                //отправка запрасо по нажатию на кнопку
        e.preventDefault();                                //останавливаем выполнения браузером кода, для его провекри
        let username = $('#username').val();               //считываем значения с формы
        let password = $('#password').val();
        let user = {
            "type":"login",
            "username": username,
            "password": password
        };
        //print(user);
       checkUser(user);              //передаем парамет user  на сервер при помощи fetch()
    })
})()
    //fetch()-метод js нужен для отправки запросов на сервер
    //асинхронная функция  - код выполняется не последовательно, а параллельно с другим кодом
    async function checkUser(user) {
        const response = await fetch(url, {   //await - указывает что код асинхронным и нужен чтобы ждать ответ с сервера
            method:"POST",
            body: JSON.stringify(user)
        })
        let groups = await response.json();     //проверка json на корректность
        if (groups.correct) {
            console.log(groups)
        	startAdmin(groups)
        } else {
            $('.error').removeClass('hidden');  //пароль или юзернейм не верны то блок станетвидимым и сообщит об ошибке
        }
    }

    function startAdmin (groups) {
    	$('.wrapper').remove();
        $('#content').html(groups.html);
        addGroups(groups.val);
        $('#request').on('click', async function (e) {
	        e.preventDefault();
	        let contentTextarea = $('#textarea').val()
	        let groupName = $('#list').val()
	        let data = {
                "type":'postNewMessage',
	        	"group":groupName,
	        	"content": contentTextarea 
	        }
        	const response = await fetch(url, {
            	method:"POST",
            	body: JSON.stringify(data)
        	})
        	console.log(await response.json());
    })
    }

    function addGroups(values) {
        console.log(values)
        let list = '<option selected="selected">'+ values[0] +'</option>';
        for (let i = 1; i<values.length; i++) {
            list += '<option>'+ values[i] +'</option>';
        }
        $('#list').html(list);
        
    }

*/

(function () {
    let url = "http://127.0.0.1:8000/client_server/";  //Адрес, куда мы делаем запрос
    $("#submit").on("click", 
    function (e) {           //Отправка запроса по нажатию кнопки
        e.preventDefault();                           //Останавливаем выполнение браузером кода, для его проверки
        let username = $("#username").val()           //Считываем значение формы
        let password = $("#password").val()
        let user = {
            "type": "login",
            "username": username,
            "passowrd": password
        };
        //checkUser(user);    
        console.log(user);                          //передаем параметры user на сервер при помощи fetch()
    })

    //fetch() - метод js нужен для отпраки запросов на сервер
    //Синхронная функция - код выполняется не последовательно, а параллельно с другим кодом
    async function checkUser(user= {}) {                  
        const response = await fetch(url, {           //Await - указывается, что код является асинхронным и нужен, чтобы ждать ответ с сервера
            method: "POST",
            body: JSON.stringify(user)
        })
        let groups = await response.json();           //Проверка json на корректность 
        if (groups.correct) {
            startAdmin(groups)
        } else {
            $(".error").removeClass("hidden");        //Пароль или юзернейм не верны, то блок станет видимым и сообщит об ошибке
        }
    }
})()
