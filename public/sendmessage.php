<?php
// contact.php

// CORS optional, falls du getrennte Domains / Ports nutzt
// header("Access-Control-Allow-Origin: https://deine-domain.de");
// header("Access-Control-Allow-Headers: Content-Type");
// header("Access-Control-Allow-Methods: POST");

// Nur POST erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// JSON-Daten einlesen (falls du JSON sendest)
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Fallback, falls kein JSON:
if (!$data) {
    $data = $_POST;
}

// Felder holen & rudimentär säubern
$name    = isset($data['name'])    ? trim($data['name'])    : '';
$email   = isset($data['email'])   ? trim($data['email'])   : '';
$message = isset($data['message']) ? trim($data['message']) : '';

// Validierung
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Bitte alle Felder ausfüllen."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Ungültige E-Mail-Adresse."]);
    exit;
}

// Mail vorbereiten
$to      = "markus@von-staden.net"; // HIER deine Mail
$subject = "Neue Kontaktanfrage von $name";
$body    = "Name: $name\nE-Mail: $email\n\nNachricht:\n$message";
$headers = "From: markus@von-staden.net\r\n" .
           "Reply-To: $email\r\n" .
           "Content-Type: text/plain; charset=utf-8\r\n";

// Mail senden
$sent = mail($to, $subject, $body, $headers);

header('Content-Type: application/json; charset=utf-8');

if ($sent) {
    echo json_encode(["success" => true, "message" => "Nachricht erfolgreich gesendet."]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Mail konnte nicht gesendet werden."]);
}
