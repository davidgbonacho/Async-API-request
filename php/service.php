<?php

/**
 * PHP as a service 
 * @author David G. Bonacho - Tizedit - 2024
 */ 

// retreive params (if they come as JSON)
//$json_data = file_get_contents("php://input");
//$params = json_decode($json_data, true);

// retreive params (if they come as querystring)
$params = $_POST;

// your code here


// your response 
//$response = ['venus' => 42.4, 'marte' => 78.3, 'mercurio' => 91.7, 'jupiter' => 628.9, 'saturno' => 1284.4, 'urano' => 2721.4, 'neptuno' => 4500,];
$response = $params;

// convert to JSON
$encoded = json_encode($response, JSON_PRETTY_PRINT); // , JSON_FORCE_OBJECT   , JSON_PRETTY_PRINT
header('Content-type: application/json');

exit($encoded);
