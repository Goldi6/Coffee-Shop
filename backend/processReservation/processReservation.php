<?php
$MIN_DAYS = 4; //minimum today+days to allow reservation

$errors = [];
$values = [];

// $fields = ['name', 'phone', 'date' , 'hour','minute','guests','email', 'subscription'];
$fields = ['name', 'phone', 'date', 'hour', 'minute', 'guests', 'subscription', 'email' , 'event' , 'eventId'];

$optionalFields = ['email' , 'event', 'eventId'];
$values = [];

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    foreach ($fields as $field) {
        //check for empty fields if they required
        if (empty($_POST[$field]) && !in_array($field, $optionalFields)) {
            $errors[$field] = $field . " is empty";
        } elseif ($_POST['subscription'] == 'subscribe' && empty($_POST['email'])) {

            $errors['email'] = "Email is required to subscribe!";
        } else {
            //get values

            $values[$field] = test_input($_POST[$field]);
        }
    }
};


if (empty($errors)) {


    $name = $values['name'];

    //error checking
    //only letters and whitespace

    if (!preg_match("/^[a-zA-z ]*$/", $name)) {
        $errors['name'] = "Only alphabets and whitespace are allowed";
    };
    $event = $values['event'];
    if($event){
        if (!preg_match("/^[a-zA-z ]*$/", $event)) {
            $event = preg_replace("/[^a-zA-Z0-9]/", "", $event);        };
    
    }

    $eventId = $values['eventId'];
    if($eventId){
        if (!preg_match("/^[0-9]*$/", $eventId)) {
            $errors['eventId'] = "Event Id is incorrect!";
        };

    }







    //10 characters ,05 , 057
    $phone = $values["phone"];
    if (!preg_match("/^[0-9]*$/", $phone)) {
        $errors['phone'] = "Only numeric value is allowed";
    } else {
        //check length
        $strLength = strlen($phone);
        if ($strLength < 10 || $strLength > 10) {
            $errors['phone'] = 'Must be 10 numbers';
        } elseif (!preg_match("/05[^7]\d{7}/", $phone)) {
            $errors['phone'] = 'Invalid phone number';
        }
    };




    // check  e-mail address format



    //if email was posted
    if ($values['email']) {

        $email = $values['email'];
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $errors['email'] = "The email address is incorrect";
        };
    }



    //check guests
    $guests = intval($values['guests']);
    if ($guests > 10 || $guests < 1) {
        $errors['guests'] = 'reservations available for 1-10 guests';
    };


    //change of values??
    $subs = $values['subscription'];

    //if values are not changed
    if (($subs === 'subscribe') || ($subs === 'no')) {
        if ($subs === 'subscribe') {
            $subs = true;
        } else {
            $subs = false;
        }
    } else {
        $errors['subscription'] =  $subs . "  ERROR! value is unacceptable";
    };



    //check hour minute

    $hour = intval($values['hour']);
    if ($hour > 18 || $hour < 12) {
        $errors['hour'] = 'Unavailable hour';
    };

    $minute = intval($values['minute']);
    $partOfHour = [0, 15, 30, 45];
    if (!($minute == 0 || $minute == 15 || $minute == 30 || $minute == 45)) {
        $errors['minute'] = 'Unavailable d';
    };



    //check date






    $d = strtotime($values['date']);
    if ($d) {
        $got_date = date('Y-m-d', $d);


        //check if selected date is  at least in a MIN_DAYS

        $inAWeek = strtotime("+" .$MIN_DAYS."day", time());
        $inAWeek = date('Y-m-d', $inAWeek);

        //check is selected date is max up to 3 months

        $inThreeMonths = strtotime("+3 months", time());
        $inThreeMonths = date('Y-m-d', $inThreeMonths);

        if ($got_date < $inAWeek) {
            $errors['date'] = ' You can reserve only in '. $MIN_DAYS. ' from now.' . $inAWeek ."sfd".$values['date'];
        } elseif ($got_date > $inThreeMonths) {
            $errors['date'] = 'Reservations are up to 3 months ahead';
        }


        //check if selected date is not weekend
        $weekday = date("l", $d);
        if ($weekday === 'Saturday') {
            $errors['date'] = "Can't reserve on Saturday";
        }

        //? may be for js disabled page
        //$data['weekday'] = $weekday;
    } else {
        $errors['date'] =  'Invalid Date: ' . $values['date'];
    }
}







function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;
};


foreach ($values as $key => $value) {

    $data[$key] = $value;
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['errors'] = 'Success!';


    //generate order id
    $randomId = rand(11111, 99999);

    require 'idGenerator.php';

    //identify order on client side
    $data['id'] = $randomId;

    require 'mysql.php';
}




echo json_encode($data);