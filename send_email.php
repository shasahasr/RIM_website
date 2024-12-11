<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $business = htmlspecialchars($_POST['firstname']);
    $country = htmlspecialchars($_POST['country']);
    $email = htmlspecialchars($_POST['lastname']);
    $subject = htmlspecialchars($_POST['subject']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    $to = "shasahasr@gmail.com";
    $email_subject = "Contact Form Submission from $business";
    $message = "Business: $business\nCountry: $country\nEmail: $email\n\nMessage:\n$subject";
    $headers = "From: $email";

    if (mail($to, $email_subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        error_log("Failed to send email.");
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
