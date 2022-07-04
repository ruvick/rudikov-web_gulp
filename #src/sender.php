<?
header("Access-Control-Allow-Origin: *"); 
// HTTP_ORIGIN
// REMOTE_ADDR
// REQUEST_METHOD
// print_r(json_encode($_SERVER));

if (
    ($_SERVER["HTTP_ORIGIN"] !== "http://localhost:3000")&&
    ($_SERVER["HTTP_ORIGIN"] !== "http://ruvick.site") 
    
    ) {
        http_response_code(403);
        die($_SERVER["HTTP_ORIGIN"]);  
    }


    $to = 'rudikov-web@yandex.ru'; 
    $subject = 'Обращение с сайта ruvick.site';
    $message = '
                <html>
                    <head>
                        <title>'.$_REQUEST["msg"].'</title>
                    </head>
                    <body>
                        <p>ФИО: '.$_REQUEST['name'].'</p>
                        <p>Телефон: '.$_REQUEST['tel'].'</p> 
                        <p>E-mail: '.$_REQUEST['mail'].'</p>                                     
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Заявка с сайта Rudikov-Web <noreply@ruvick.site/>\r\n";
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            die(array());
        } else {
            http_response_code(403);
            die(array());
        }



?>