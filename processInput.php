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
?>