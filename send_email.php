<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $business = htmlspecialchars($_POST['business']);
    $country = htmlspecialchars($_POST['country']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);

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
