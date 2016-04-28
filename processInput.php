<?php
$eventName = $_POST['eventName'];
$address = $_POST['address'];
$city = $_POST['city'];
$state = $_POST['state'];
$zipCode = $_POST['zipCode'];
$foodCheckbox = null;
$shelterCheckbox = null;
$healthCheckbox = null;
$skillsCheckbox = null;
$jobsCheckbox = null;
$otherCheckbox = null;


if($_POST['category'] == 'Food') {
	$foodCheckbox = true;
} else if ($_POST['category'] == 'Shelter') {
	$shelterCheckbox = true;
} else if ($_POST['category'] == 'Health') {
	$healthCheckbox = true;
} else if ($_POST['category'] == 'Skills') {
	$skillsCheckbox = true;
} else if ($_POST['category'] == 'Jobs') {
	$jobsCheckbox = true;
} else if ($_POST['category'] == 'Other') {
	$otherCheckbox = $_POST['otherTextBox'];
}

/* hello */ 
$xml = new DOMDocument('1.0', 'utf-8');
$xml->formatOutput = true;
$xml->preserveWhiteSpace = false;
$xml->load('file.xml');

$element = $xml->getElementsByTagName('reports')->item(0);

$timestamp = $element->getElementsByTagName('timestamp')->item(0);
$fname = $element->getElementsByTagName('fname')->item(0);
$lname = $element->getElementsByTagName('lname')->item(0);
$location = $element->getElementsByTagName('location')->item(0);
$report = $element->getElementsByTagName('report')->item(0);
$description = $element->getElementsByTagName('description')->item(0);

$newItem = $xml->createElement('reports');

$newItem->appendChild($xml->createElement('timestamp', date("F j, Y, g:i a",time())));;

$newItem->appendChild($xml->createElement('fname', $_POST['firstname']));
$newItem->appendChild($xml->createElement('lname', $_POST['lastname']));
$newItem->appendChild($xml->createElement('location', $_POST['location']));
$newItem->appendChild($xml->createElement('report', $_POST['report']));
$newItem->appendChild($xml->createElement('description', $_POST['desc']));

$xml->getElementsByTagName('entries')->item(0)->appendChild($newItem);

$xml->save('file.xml');

echo "Data has been written.";


?>