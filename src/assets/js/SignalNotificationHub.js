var webApiPath = "http://10.10.10.129:8081/Api/";
var notification;
var invokerClient = false;
var vsUsNm = "";

function authenticate()
{
    var userName = prompt('digite seu nome :', '');

    if (userName != "" && userName != null)
    {
        vsUsNm = userName;
    }
}

function conectar()
{
        notification = $.connection.notificationHub;
        $.connection.hub.url = webApiPath + "signalr";
        $.connection.hub.qs =
        {
            'userId': vsUsNm
        };

        notification.client.executeBroadcastMessage = function (mensagem)
        {
            Message(mensagem);
        };

        $.connection.hub.start().done(function ()
        {
            notification.server.sendBroadcastMessageLogin(vsUsNm);
        });
}

$(window).bind("load", function ()
{
    authenticate();

    if (vsUsNm != "")
    {
        $.getScript(webApiPath + "signalr/hubs", conectar);
    }
});