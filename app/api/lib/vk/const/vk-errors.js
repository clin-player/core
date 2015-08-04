/**
 * Created by oleg on 13.06.14.
 */
[{
	"errors": [
		{
			"error_code": "1",
			"error_msg": "Произошла неизвестная ошибка.Попробуйте повторить запрос позже."
		},
		{
			"error_code": "2",
			"error_msg": "Приложение выключено.	Необходимо включить приложение в настройках https://vk.com/editapp?id={Ваш API_ID} или использовать тестовый режим (test_mode=1)"
		},
		{
			"error_code": "3",
			"error_msg": "Передан неизвестный метод. Проверьте, правильно ли указано название вызываемого метода: http://vk.com/dev/methods."
		},
		{
			"error_code": "4",
			"error_msg": "Неверная подпись.	Проверьте правильность формирования подписи запроса: https://vk.com/dev/api_nohttps"
		},
		{
			"error_code": "5",
			"error_msg": "Авторизация пользователя не удалась. Убедитесь, что Вы используете верную схему авторизации. Для работы с методами без префикса secure Вам нужно авторизовать пользователя одним из этих способов: http://vk.com/dev/auth_sites, http://vk.com/dev/auth_mobile."
		},
		{
			"error_code": "6",
			"error_msg": "Слишком много запросов в секунду.	Задайте больший интервал между вызовами или используйте метод execute. Подробнее об ограничениях на частоту вызовов см. на странице http://vk.com/dev/api_requests."
		},
		{
			"error_code": "7",
			"error_msg": "Нет прав для выполнения этого действия. Проверьте, получены ли нужные права доступа при авторизации. Это можно сделать с помощью метода account.getAppPermissions."
		},
		{
			"error_code": "8",
			"error_msg": "Неверный запрос. Проверьте синтаксис запроса и список используемых параметров (его можно найти на странице с описанием метода)."
		},
		{
			"error_code": "9",
			"error_msg": "Слишком много однотипных действий. Нужно сократить число однотипных обращений. Для более эффективной работы Вы можете использовать execute или JSONP."
		},
		{
			"error_code": "10",
			"error_msg": "Произошла внутренняя ошибка сервера. Попробуйте повторить запрос позже."
		},
		{
			"error_code": "11",
			"error_msg": "В тестовом режиме приложение должно быть выключено или пользователь должен быть залогинен. Выключите приложение в настройках https://vk.com/editapp?id={Ваш API_ID}"
		},
		{
			"error_code": "14",
			"error_msg": "Требуется ввод кода с картинки (Captcha).	Процесс обработки этой ошибки подробно описан на отдельной странице."
		},
		{
			"error_code": "15",
			"error_msg": "Доступ запрещён. Убедитесь, что Вы используете верные идентификаторы, и доступ к контенту для текущего пользователя есть в полной версии сайта."
		},
		{
			"error_code": "16",
			"error_msg": "Требуется выполнение запросов по протоколу HTTPS, т.к. пользователь включил настройку, требующую работу через безопасное соединение. Чтобы избежать появления такой ошибки, в Standalone-приложении Вы можете предварительно проверять состояние этой настройки у пользователя методом account.getInfo."
		},
		{
			"error_code": "17",
			"error_msg": "Требуется валидация пользователя. Убедитесь, что Вы не используете токен, полученный по схеме http://vk.com/dev/auth_mobile, для вызовов с сервера — это запрещено. Процесс валидации пользователя описан на отдельной странице."
		},
		{
			"error_code": "20",
			"error_msg": "Данное действие запрещено для не Standalone приложений. Если ошибка возникает несмотря на то, что Ваше приложение имеет тип Standalone, убедитесь, что при авторизации Вы используете redirect_uri=https://oauth.vk.com/blank.html. Подробнее см. http://vk.com/dev/auth_mobile."
		},
		{
			"error_code": "21",
			"error_msg": "Данное действие разрешено только для Standalone и Open API приложений."
		},
		{
			"error_code": "23",
			"error_msg": "Метод был выключен. Все актуальные методы ВК API, которые доступны в настоящий момент, перечислены здесь: http://vk.com/dev/methods."
		},
		{
			"error_code": "100",
			"error_msg": "Один из необходимых параметров был не передан или неверен. Проверьте список требуемых параметров и их формат на странице с описанием метода."
		},
		{
			"error_code": "101",
			"error_msg": "Неверный API ID приложения. Найдите приложение в списке администрируемых на странице http://vk.com/apps?act=settings и укажите в запросе верный API_ID (идентификатор приложения)."
		},
		{
			"error_code": "113",
			"error_msg": "Неверный идентификатор пользователя. Убедитесь, что Вы используете верный идентификатор. Получить ID по короткому имени можно методом utils.resolveScreenName."
		},
		{
			"error_code": "150",
			"error_msg": "Неверный timestamp. Получить актуальное значение Вы можете методом utils.getServerTime."
		},
		{
			"error_code": "200",
			"error_msg": "Доступ к альбому запрещён. Убедитесь, что Вы используете верные идентификаторы (для пользователей owner_id положительный, для сообществ — отрицательный), и доступ к запрашиваемому контенту для текущего пользователя есть в полной версии сайта."
		},
		{
			"error_code": "201",
			"error_msg": "Доступ к аудио запрещён.Убедитесь, что Вы используете верные идентификаторы (для пользователей owner_id положительный, для сообществ — отрицательный), и доступ к запрашиваемому контенту для текущего пользователя есть в полной версии сайта."
		},
		{
			"error_code": "203",
			"error_msg": "Доступ к группе запрещён. Убедитесь, что текущий пользователь является участником или руководителем сообщества (для закрытых и частных групп и встреч)."
		},
		{
			"error_code": "300",
			"error_msg": "Альбом переполнен. Перед продолжением работы нужно удалить лишние объекты из альбома или использовать другой альбом."
		},
		{
			"error_code": "500",
			"error_msg": "Действие запрещено. Вы должны включить переводы голосов в настройках приложения. Проверьте настройки приложения: http://vk.com/editapp?id={Ваш API_ID}&section=payments"
		},
		{
			"error_code": "600",
			"error_msg": "Нет прав на выполнение данных операций с рекламным кабинетом."
		},
		{
			"error_code": "603",
			"error_msg": "Произошла ошибка при работе с рекламным кабинетом"
		}
	]
}]